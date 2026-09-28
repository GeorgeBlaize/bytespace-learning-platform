import clsx from 'clsx'

type AvatarStackProps = {
  src: string
  count: string
  size?: 'sm' | 'md'
  className?: string
}

/** Overlapping learner avatars followed by a lime "+N" badge. */
export default function AvatarStack({ src, count, size = 'sm', className }: AvatarStackProps) {
  const sm = size === 'sm'
  return (
    <div className={clsx('flex items-center', className)}>
      <img src={src} alt="" className={sm ? 'h-[30px] w-auto' : 'h-10 w-auto'} />
      <span
        className={clsx(
          'relative flex items-center justify-center rounded-full bg-lime font-medium text-ink ring-2 ring-white',
          sm ? '-ml-1 size-[30px] text-xs' : '-ml-2 size-10 text-sm',
        )}
      >
        {count}
      </span>
    </div>
  )
}
