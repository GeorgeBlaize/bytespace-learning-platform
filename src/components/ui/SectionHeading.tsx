import clsx from 'clsx'
import type { ReactNode } from 'react'

type SectionHeadingProps = {
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  size?: 'lg' | 'md'
  className?: string
}

export default function SectionHeading({ title, description, align = 'center', size = 'lg', className }: SectionHeadingProps) {
  return (
    <div className={clsx(align === 'center' && 'mx-auto text-center', className)}>
      <h2
        className={clsx(
          'font-semibold tracking-tight text-ink',
          size === 'lg' ? 'text-[32px] leading-tight sm:text-5xl sm:leading-[1.15]' : 'text-[28px] leading-tight sm:text-[40px]',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            'mt-5 text-base leading-relaxed font-light text-muted sm:text-lg',
            align === 'center' && 'mx-auto max-w-[920px]',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
