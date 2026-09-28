import clsx from 'clsx'
import type { ComponentProps } from 'react'

type ChipProps = ComponentProps<'button'> & { active?: boolean }

export default function Chip({ active, className, ...props }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={clsx(
        'h-[42px] cursor-pointer rounded-full px-4 text-base whitespace-nowrap transition-colors',
        active ? 'bg-lime text-ink' : 'bg-soft text-ink/80 hover:bg-line',
        className,
      )}
      {...props}
    />
  )
}
