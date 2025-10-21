import { useEffect, useState } from 'react'

export function useTypingEffect(text: string, speed = 50) {
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
