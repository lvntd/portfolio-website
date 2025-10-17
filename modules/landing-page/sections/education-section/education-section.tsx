import { Award, GraduationCap } from 'lucide-react'
import React from 'react'

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <GraduationCap className="text-cyan-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-200 mb-2">
              {`Master's Degree`}
            </h3>
            <p className="text-gray-300">IBSU</p>
            <p className="text-gray-400">2016</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <GraduationCap className="text-cyan-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-200 mb-2">
              {`Bachelor's Degree`}
            </h3>
            <p className="text-gray-300">Tbilisi State University</p>
            <p className="text-gray-400">2013</p>
          </div>
        </div>

        <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <Award className="text-cyan-400 mb-4" size={32} />
          <h3 className="text-xl font-bold text-gray-200 mb-2">
            Guest Lecturer
          </h3>
          <p className="text-gray-300">Caucasus University, Georgia</p>
          <p className="text-gray-400 mb-3">2017 – 2020</p>
          <p className="text-gray-300">
            Developed and delivered comprehensive curriculum on Georgian Tax
            Legislation
          </p>
        </div>
      </div>
    </section>
  )
}
