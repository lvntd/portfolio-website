import React from 'react'

export const SkillsSection = () => {
  const skills = [
    { name: 'TypeScript', level: 95 },
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'AWS', level: 80 },
    { name: 'MongoDB', level: 80 },
    { name: 'Testing (Jest/Playwright)', level: 85 },
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-200">
                  {skill.name}
                </span>
                <span className="text-cyan-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
