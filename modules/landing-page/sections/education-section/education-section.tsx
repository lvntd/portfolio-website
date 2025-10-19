import React from 'react'
import { SectionTitle } from '@/components'
import { EducationItem } from './education-item'

export const EducationSection = () => {
  const educationList = [
    {
      degreeName: "Master's Degree",
      universityName: 'International Black Sea University',
      universityWebsite: 'https://ibsu.edu.ge/en/',
      graduationDate: '2016',
    },
    {
      degreeName: "Bachelor's Degree",
      universityName: 'Tbilisi State University',
      universityWebsite: 'https://www.tsu.ge/en',
      graduationDate: '2013',
    },
  ]
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>University</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {educationList.map((item) => (
            <EducationItem key={item.universityName} {...item} />
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-12">
          <h3 className="text-xl md:text-2xl font-bold  text-center">
            Teaching Experience
          </h3>
          <EducationItem
            degreeName="Guest Lecturer"
            universityName="Caucasus University"
            universityWebsite="https://cu.edu.ge/en"
            graduationDate="2017 - 2022"
          />
        </div>
      </div>
    </section>
  )
}
