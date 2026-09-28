import type { ReactNode } from 'react'
import Logo from '../ui/Logo'

type AuthLayoutProps = {
  heading: string
  intro: string
  eyebrow: string
  title: ReactNode
  children: ReactNode
  footer: ReactNode
}

/** Shared split layout for the Sign In / Sign Up screens. */
export default function AuthLayout({ heading, intro, eyebrow, title, children, footer }: AuthLayoutProps) {
  return (
    <main className="bg-grid min-h-screen">
      <div className="mx-auto grid w-full max-w-[1232px] gap-10 px-4 pt-8 pb-12 sm:px-6 lg:grid-cols-[500px_1fr] lg:gap-[120px] lg:pt-[35px] lg:pb-[120px]">
        <div className="text-white">
          <Logo markOnly />
          <h1 className="mt-10 text-[22px] font-semibold lg:mt-[45px]">{heading}</h1>
          <p className="mt-4 max-w-[480px] text-lg leading-relaxed font-light">{intro}</p>
          <img
            src="/images/auth-illustration.png"
            alt=""
            width={560}
            height={620}
            className="mt-[18px] -ml-5 hidden w-[560px] max-w-none lg:block"
          />
        </div>

        <section className="flex flex-col rounded-3xl bg-white px-6 py-10 sm:px-[63px] sm:pt-[64px] sm:pb-[52px] lg:mt-[85px] lg:min-h-[784px]">
          <p className="text-lg text-brand">{eyebrow}</p>
          <h2 className="mt-1 text-4xl leading-[1.2] font-semibold tracking-tight text-ink sm:text-5xl">{title}</h2>
          <div className="mt-10 flex-1">{children}</div>
          <p className="mt-10 text-center text-base text-muted">{footer}</p>
        </section>
      </div>
    </main>
  )
}
