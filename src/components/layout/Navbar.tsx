import clsx from 'clsx'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/content'
import Logo from '../ui/Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const current = pathname + hash

  return (
    <header className="relative z-30">
      <nav aria-label="Main" className="container-page flex h-[88px] items-center justify-between lg:h-[118px]">
        <Logo />

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                aria-current={current === link.to ? 'page' : undefined}
                className={clsx(
                  'text-lg transition-colors hover:text-white',
                  current === link.to ? 'font-medium text-white' : 'text-white/85',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-white">
          <div className="hidden items-center gap-6 text-lg md:flex">
            <Link to="/sign-in" className="text-white/85 hover:text-white">
              Sign In
            </Link>
            <Link to="/sign-up" className="text-white/85 hover:text-white">
              Join Us
            </Link>
          </div>
          <Link to="/" aria-label="Cart" className="p-1 md:ml-4">
            <ShoppingBag className="size-6" strokeWidth={1.75} />
          </Link>
          <button
            type="button"
            className="-mr-1 cursor-pointer p-1 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-4 top-full rounded-2xl bg-white p-4 shadow-xl md:hidden">
          <ul className="flex flex-col">
            {[...navLinks, { label: 'Sign In', to: '/sign-in' }, { label: 'Join Us', to: '/sign-up' }].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-lg text-ink hover:bg-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
