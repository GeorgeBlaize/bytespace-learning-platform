import clsx from 'clsx'
import AvatarStack from '../ui/AvatarStack'
import ProgressBar from '../ui/ProgressBar'
import Rating from '../ui/Rating'

/** Small white "glass" cards that float over the hero artwork. */

type CardProps = { className?: string }

const base = 'rounded-xl bg-white shadow-[0_10px_30px_-10px_rgb(0_0_0/0.25)]'

export function TopicCard({ className }: CardProps) {
  return (
    <div className={clsx(base, 'px-4 py-3.5', className)}>
      <p className="text-base text-ink">UI/UX Design</p>
      <p className="mt-0.5 text-xs text-muted">200 Courses &nbsp;•&nbsp; 1000+ Students</p>
    </div>
  )
}

export function LearningProgressCard({ value = 55, className }: CardProps & { value?: number }) {
  return (
    <div className={clsx(base, 'p-4', className)}>
      <p className="text-sm text-ink">Learning Progress</p>
      <p className="mt-2 font-display text-5xl leading-none font-semibold text-ink">{value}%</p>
      <div className="mt-4">
        <ProgressBar value={value} label="Learning progress" />
      </div>
    </div>
  )
}

export function HappyStudentsCard({ className }: CardProps) {
  return (
    <div className={clsx(base, 'p-4', className)}>
      <p className="text-base text-ink">Happy Students</p>
      <Rating value={4.5} count={240} className="text-xs text-ink" />
      <AvatarStack src="/images/avatars-happy.png" count="2K+" size="md" className="mt-2" />
    </div>
  )
}
