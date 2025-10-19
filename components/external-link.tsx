import React from 'react'
import { ExternalLink as ExternalLinkIcon } from 'lucide-react'
import clsx from 'clsx'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>

export const ExternalLink = ({ children, className, ...props }: Props) => {
  return (
    <a className={clsx(className, 'group flex items-center gap-1')} {...props}>
      {children}{' '}
      <ExternalLinkIcon
        size={16}
        className="opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out"
      />
    </a>
  )
}
