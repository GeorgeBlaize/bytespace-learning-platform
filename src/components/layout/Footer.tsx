import { type FormEvent, useState } from 'react'
import { footerColumns, legalLinks } from '../../data/content'
import { Button } from '../ui/Button'
import Logo from '../ui/Logo'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubscribed(true)
    e.currentTarget.reset()
  }

  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page grid gap-12 pt-16 pb-16 lg:grid-cols-[1fr_580px] lg:pt-[68px] lg:pb-[140px]">
        <div className="max-w-[504px]">
          <Logo tone="dark" />
          <p className="mt-4 text-sm text-ink">Stay Up to date with our latest features and releases by joining our newsletter.</p>
          <form onSubmit={handleSubmit} className="mt-12 flex gap-6">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              className="h-[52px] min-w-0 flex-1 rounded-full border border-line px-6 text-base outline-none placeholder:text-ink/80 focus:border-brand"
            />
            <Button type="submit" className="h-[46px] self-center">
              Search
            </Button>
          </form>
          <p className="mt-6 text-xs leading-relaxed text-ink" aria-live="polite">
            {subscribed
              ? 'Thanks for subscribing! Check your inbox for a confirmation email.'
              : 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.'}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3">
          {footerColumns.map((column, i) => (
            <ul key={i} className="flex flex-col gap-4 text-sm lg:gap-5">
              {column.map((item) => (
                <li key={item}>
                  <a href="#" className="text-ink hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-4 border-t border-line py-8 text-xs text-ink sm:flex-row sm:items-center sm:justify-between">
          <p>@ {YEAR} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
