import { ExternalLink, SectionTitle } from '@/components'
import React from 'react'

export const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'TNET LLC',
      companyWebsite: 'https://tnet.ge/en',
      location: 'Georgia',
      period: '2023 – Present',
      project: 'myhome.ge',
      description: 'The largest real estate platform in Georgia',
      achievements: [
        'Design frontend architecture using Next.js with server components',
        'Mentor team of 3 frontend developers and conduct code reviews',
        'Improved website performance by 35% (Lighthouse score)',
        'Improved SEO resulting in 10% increase in unique visitors',
        'Led migration from jQuery to Next.js, reducing page load time by 60%',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Axon Development Group LLC',
      companyWebsite: 'https://www.axon.dev',
      location: 'Ukraine',
      period: '2022 – 2023',
      project: 'fabnite.com',
      description: 'Enterprise event management platform (Norway)',
      achievements: [
        'Architected event-creation workflow with complex multi-step forms',
        'Developed comprehensive inventory management system',
        'Collaborated with UX team for responsive design patterns',
        'Optimized component rendering, reducing load time by 25%',
      ],
    },
    {
      title: 'Junior Software Engineer',
      company: 'EPAM Systems Inc.',
      companyWebsite: 'https://www.epam.com',
      location: 'Georgia',
      period: '2020 – 2022',
      project: 'Project',
      description: 'Enterprise event management platform (USA)',
      achievements: [
        'Implemented responsive design patterns with UX team',
        'Worked on bugfixes and comprehensive unit tests',
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-cyan-400">
                    {exp.title}
                  </h3>
                  <ExternalLink
                    href={exp.companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300"
                  >
                    {exp.company}
                  </ExternalLink>
                  <p className="text-gray-400 text-sm md:text-base">
                    {exp.project} - {exp.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-cyan-400 text-sm md:text-base">
                    {exp.period}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base">
                    {exp.location}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 mt-4 text-sm md:text-base">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-cyan-400 mr-2">▹</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
