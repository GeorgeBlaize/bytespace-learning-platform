type ProgressBarProps = { value: number; label?: string }

export default function ProgressBar({ value, label = 'Progress' }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-2 w-full overflow-hidden rounded-full bg-soft"
    >
      <div className="h-full rounded-full bg-lime" style={{ width: `${value}%` }} />
    </div>
  )
}
