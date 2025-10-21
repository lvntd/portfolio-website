import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'

const firaCode = Fira_Code({ weight: '500' })

export const metadata: Metadata = {
  title: 'Levan Tediashvili',
  description:
    'Software Engineer - JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, AWS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className}  antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
