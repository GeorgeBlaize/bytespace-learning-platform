import clsx from 'clsx'
import type { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'lime' | 'outline'
type Size = 'sm' | 'md'

const variants: Record<Variant, string> = {
  lime: 'bg-lime text-ink hover:bg-lime-dark',
  outline: 'border border-line bg-white text-ink hover:border-ink/40',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-5 text-base',
  md: 'h-[46px] px-6 text-lg',
}

type BaseProps = { variant?: Variant; size?: Size; className?: string }

function buttonClasses({ variant = 'lime', size = 'md', className }: BaseProps = {}) {
  return clsx(
    'inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full font-normal whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  )
}

export function Button({ variant, size, className, ...props }: BaseProps & ComponentProps<'button'>) {
  return <button className={buttonClasses({ variant, size, className })} {...props} />
}

export function ButtonLink({ variant, size, className, ...props }: BaseProps & ComponentProps<typeof Link>) {
  return <Link className={buttonClasses({ variant, size, className })} {...props} />
}
