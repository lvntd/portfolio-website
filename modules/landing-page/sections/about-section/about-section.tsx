import React from 'react'
import { SectionTitle } from '@/components'

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>About Me</SectionTitle>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
            Software engineer with 5+ years of experience building complex web
            applications and a unique background in finance. Expert in React,
            TypeScript, and Next.js with proven success migrating legacy systems
            to modern frameworks and implementing complex UI components,
            interactive maps, and payment systems.
          </p>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Experienced in backend technologies such as Node.js, databases, and
            AWS. I have a proven ability to improve metrics and product
            performance while delivering intuitive user experiences. Passionate
            about creating unique, memorable web apps that drive measurable
            business results.
          </p>
        </div>
      </div>
    </section>
  )
}
