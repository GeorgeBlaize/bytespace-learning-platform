import clsx from 'clsx'
import { Link } from 'react-router-dom'

type LogoProps = { tone?: 'light' | 'dark'; markOnly?: boolean; className?: string }

export default function Logo({ tone = 'light', markOnly, className }: LogoProps) {
  return (
    <Link to="/" aria-label="ByteSpace home" className={clsx('inline-flex shrink-0', className)}>
      {markOnly ? (
        <img src="/images/logo-mark.png" alt="ByteSpace" width={36} height={42} />
      ) : (
        <img src={`/images/logo-${tone}.png`} alt="ByteSpace" width={180} height={46} className="h-auto w-[150px] sm:w-[180px]" />
      )}
    </Link>
  )
}
