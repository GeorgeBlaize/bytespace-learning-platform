import clsx from 'clsx'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9" aria-hidden>
      <path
        fill="currentColor"
        d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"
      />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9" aria-hidden>
      <path
        fill="currentColor"
        d="M12.24 10.29v3.9h5.45c-.24 1.4-1.66 4.1-5.45 4.1-3.28 0-5.95-2.72-5.95-6.07s2.67-6.07 5.95-6.07c1.87 0 3.12.8 3.83 1.48l2.61-2.52C17.01 3.56 14.85 2.6 12.24 2.6 6.9 2.6 2.6 6.9 2.6 12.22s4.3 9.62 9.64 9.62c5.56 0 9.25-3.91 9.25-9.42 0-.63-.07-1.12-.15-1.6z"
      />
    </svg>
  )
}

const providers = [
  { name: 'Facebook', icon: FacebookIcon },
  { name: 'Google', icon: GoogleIcon },
]

export default function SocialButtons({ className }: { className?: string }) {
  return (
    <div className={clsx('flex justify-center gap-4', className)}>
      {providers.map(({ name, icon: Icon }) => (
        <button
          key={name}
          type="button"
          aria-label={`Continue with ${name}`}
          className="flex size-[72px] cursor-pointer items-center justify-center rounded-[20px] border border-line text-ink transition-colors hover:border-ink/40 hover:bg-soft"
        >
          <Icon />
        </button>
      ))}
    </div>
  )
}
