import { SectionTitle } from '@/components'
import { ExternalLink } from 'lucide-react'
import React from 'react'

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>Featured Project</SectionTitle>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl md:text-3xl font-bold text-cyan-400">
              Prive AI
            </h3>
            <a
              href="https://priveai.ge/en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <ExternalLink size={20} />
              Visit Site
            </a>
          </div>
          <p className="text-sm md:text-base text-gray-300 mb-4">
            The first AI tax assistant in Georgia
          </p>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Launched March 2025
          </p>

          <div className="mb-6 text-sm md:text-base">
            <h4 className="font-semibold text-gray-200 mb-3">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Next.js 14',
                'TypeScript',
                'Tailwind',
                'Express.js',
                'Node.js',
                'AWS',
                'Anthropic Claude API',
                'Google GenAI',
                'LangChain',
                'AI-SDK',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
