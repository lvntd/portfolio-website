import React from 'react'
import { GraduationCap } from 'lucide-react'
import { ExternalLink } from '@/components'

type Props = {
  degreeName: string
  universityName: string
  universityWebsite: string
  graduationDate: string
}

export const EducationItem = ({
  degreeName,
  universityName,
  universityWebsite,
  graduationDate,
}: Props) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
      <GraduationCap className="text-cyan-400 mb-4" size={32} />
      <h3 className="text-xl font-bold text-gray-200 mb-2">{degreeName}</h3>
      <ExternalLink
        href={universityWebsite}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300"
      >
        {universityName}
      </ExternalLink>
      <p className="text-gray-400">{graduationDate}</p>
    </div>
  )
}
