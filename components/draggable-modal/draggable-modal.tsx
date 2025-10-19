import { useState, useRef, useEffect } from 'react'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

const inter = Inter({ weight: '500' })

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactElement
}

export const DraggableModal = ({ isOpen, onClose, title, children }: Props) => {
  // const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  const [position, setPosition] = useState({ x: 100, y: 100 })
  const [size, setSize] = useState({ width: 500, height: 400 })
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [resizeStart, setResizeStart] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })
  const modalRef = useRef(null)

  const minWidth = 300
  const minHeight = 200

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.closest('.modal-content') || target.closest('.resize-handle'))
      return

    setIsDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleResizeStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsResizing(true)
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    })
  }

  useEffect(() => {
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent
      if (isDragging) {
        const newX = mouseEvent.clientX - dragOffset.x
        const newY = mouseEvent.clientY - dragOffset.y

        if (modalRef.current) {
          const maxX = window.innerWidth - size.width
          const maxY = window.innerHeight - size.height

          setPosition({
            x: Math.max(0, Math.min(newX, maxX)),
            y: Math.max(0, Math.min(newY, maxY)),
          })
        }
      }

      if (isResizing) {
        const deltaX = mouseEvent.clientX - resizeStart.x
        const deltaY = mouseEvent.clientY - resizeStart.y

        const newWidth = Math.max(minWidth, resizeStart.width + deltaX)
        const newHeight = Math.max(minHeight, resizeStart.height + deltaY)

        const maxWidth = window.innerWidth - position.x
        const maxHeight = window.innerHeight - position.y

        setSize({
          width: Math.min(newWidth, maxWidth),
          height: Math.min(newHeight, maxHeight),
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      setIsResizing(false)
    }

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, isResizing, dragOffset, position, size, resizeStart])

  if (!isOpen) return null

  return (
    <div
      className={clsx(
        'fixed inset-0 bg-black/30 flex items-center justify-center z-50',
        inter.className,
      )}
    >
      <div
        ref={modalRef}
        className="bg-white  rounded-lg shadow-2xl overflow-hidden"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${size.width}px`,
          height: `${size.height}px`,
          cursor: isDragging ? 'grabbing' : 'default',
        }}
      >
        <div
          className="bg-gradient-to-b from-gray-100 to-gray-200 px-4 py-3 flex items-center justify-between border-b border-gray-300 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              aria-label="Close"
            />
            <button
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
              aria-label="Minimize"
            />
            <button
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
              aria-label="Maximize"
            />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700 select-none">
            {title}
          </div>
        </div>

        <div
          className="modal-content p-6 overflow-y-auto"
          style={{ height: 'calc(100% - 48px)' }}
        >
          {children}
        </div>

        {/* Resize Handles */}
        <div
          className="resize-handle absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize"
          onMouseDown={handleResizeStart}
          style={{
            background: 'linear-gradient(135deg, transparent 50%, #94a3b8 50%)',
          }}
        />

        <div
          className="resize-handle absolute bottom-0 right-0 w-3 h-3 cursor-nwse-resize opacity-0 hover:opacity-100"
          onMouseDown={handleResizeStart}
          style={{
            width: '20px',
            height: '20px',
          }}
        />
      </div>
    </div>
  )
}
