import clsx from 'clsx'
import { Star } from 'lucide-react'

type RatingProps = { value: number; count?: number; starClassName?: string; className?: string }

export default function Rating({ value, count, starClassName = 'fill-lime text-lime', className }: RatingProps) {
  return (
    <span className={clsx('inline-flex items-center gap-1', className)}>
      <span>{value}</span>
      {count !== undefined && <span className="text-muted">({count})</span>}
      <Star aria-hidden className={clsx('size-[1.1em]', starClassName)} strokeWidth={1.5} />
    </span>
  )
}
