import React, { useEffect, useState } from 'react'
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Clock,
  AppWindowMac,
} from 'lucide-react'
import clsx from 'clsx'
import { DraggableModal } from '@/components'

type Props = { onButtonClick: () => void }

function useTypingEffect(text: string, speed = 50) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const currentLetter = text[currentIndex]
      const ms = currentLetter === ' ' ? speed * 5 : speed

      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentLetter)
        setCurrentIndex((prev) => prev + 1)
      }, ms)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  const isFinished = displayedText === text

  return { displayedText, isFinished }
}

export const HeroSection = ({ onButtonClick }: Props) => {
  const { displayedText, isFinished } = useTypingEffect('Hello, world!', 100)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showLaterClass = `${
    isFinished ? 'opacity-100' : 'opacity-0'
  } transition-all duration-200 ease-in-out`

  return (
    <>
      <DraggableModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Documents"
      >
        <div className="text-black select-none">
          Folder is empty now. Come back soon
        </div>
      </DraggableModal>
      <section
        id="home"
        className="min-h-dvh flex items-center justify-center px-6 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {displayedText}
              <span
                className={`text-blue-400 animate-[blink_1s_step-end_infinite]`}
              >
                ▊
              </span>
            </h1>
            <h2
              className={clsx(
                'text-xl md:text-3xl text-gray-300 mb-6',
                showLaterClass,
              )}
            >
              I am Levan
            </h2>
            <p
              className={clsx(
                'md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed whitespace-pre-line',
                showLaterClass,
              )}
            >
              {`Building exceptional web experiences with JavaScript.\n Transforming complex ideas into elegant, performant solutions.`}
            </p>
          </div>

          <div
            className={clsx(
              'flex flex-col md:flex-row gap-6 justify-center mb-12 text-sm md:text-base',
              showLaterClass,
            )}
          >
            <a
              href="mailto:levan.tediashvili@outlook.com"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all hover:scale-105"
            >
              <Mail size={20} />
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/levantediashvili"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-cyan-500 hover:bg-cyan-500/10 rounded-lg transition-all hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <div
              onClick={() => setIsModalOpen(true)}
              className="flex cursor-pointer items-center gap-2 px-6 py-3 border border-cyan-500 hover:bg-cyan-500/10 rounded-lg transition-all hover:scale-105"
            >
              <AppWindowMac size={20} />
              Documents
            </div>
          </div>

          <div
            className={clsx(
              'flex gap-6 justify-center text-gray-400 text-sm md:text-base',
              showLaterClass,
            )}
          >
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              Tbilisi, Georgia
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              +995 555 73 73 09
            </div>
            <div className="items-center gap-2 hidden md:flex">
              <Clock size={18} />
              GMT +4
            </div>
          </div>
        </div>

        <button
          onClick={onButtonClick}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ChevronDown size={32} className="text-cyan-400" />
        </button>
      </section>
    </>
  )
}
