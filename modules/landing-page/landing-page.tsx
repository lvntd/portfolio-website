'use client'
import React, { useState, useEffect } from 'react'
import { Braces, Github, Linkedin, Mail } from 'lucide-react'
import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from './sections'

export const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = [
        'home',
        'about',
        'experience',
        'skills',
        'projects',
        'education',
      ]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToSection = (id: any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-2">
              <Braces strokeWidth={3} color="#50A2FF" />
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                <p className="hidden md:block">LT</p>
                <p className="md:hidden">Levan Tediashvili</p>
              </div>
            </div>
            <div className="gap-8 hidden md:flex">
              {['About', 'Experience', 'Skills', 'Projects', 'Education'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`hover:text-cyan-400 transition-colors cursor-pointer ${
                      activeSection === item.toLowerCase()
                        ? 'text-cyan-400'
                        : 'text-gray-300'
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>

      <HeroSection onButtonClick={() => scrollToSection('about')} />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            {`Let's build something amazing together`}
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="mailto:levan.tediashvili@outlook.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/levantediashvili"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/lvntd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
          <p className="text-gray-500 mt-6">
            © 2025 Levan Tediashvili. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
