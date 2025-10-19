import React from 'react'

type Props = { children: React.ReactNode }

export const SectionTitle = ({ children }: Props) => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
      {children}
    </h2>
  )
}
