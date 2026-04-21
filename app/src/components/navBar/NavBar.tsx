import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

type NavItem = {
  to: string
  label: string
}

const navItems: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/stylists', label: 'Stylists' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/book', label: 'Book' },
  { to: '/contact', label: 'Contact' },
]

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center justify-between gap-4 md:justify-start">
        <div>
          <h1 className="text-(--charcoal-ink) m-0 text-[20px] font-[540] leading-[1.1] tracking-tight">
            7TH STREET SALON
          </h1>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="text-(--charcoal-ink) inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--parchment-border) md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="sr-only">Open menu</span>
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d={isMenuOpen ? 'M6 6 18 18' : 'M4 7h16'} />
            <path d={isMenuOpen ? 'M18 6 6 18' : 'M4 12h16'} />
            {!isMenuOpen ? <path d="M4 17h16" /> : null}
          </svg>
        </button>

      </div>

      <div className="hidden flex-wrap gap-1 md:flex md:justify-end">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="text-(--charcoal-ink) rounded-lg px-3 py-2 text-[15px] font-[460] transition hover:bg-(--warm-cream)"
            activeProps={{
              className:
                'bg-[var(--warm-cream)] text-[var(--charcoal-ink)]',
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <button
        type="button"
        aria-label="Close menu"
        className={`fixed inset-0 z-40 bg-black/35 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[82vw] max-w-[320px] border-l border-(--parchment-border) bg-(--pure-white) p-5 shadow-[-10px_0_30px_-20px_rgba(0,0,0,0.45)] transition-[transform,opacity] duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[110%] opacity-0'
        }`}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="m-0 text-[16px] font-semibold tracking-[0.02em]">Menu</h2>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="text-(--charcoal-ink) inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--parchment-border)"
            onClick={closeMenu}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6 18 18" />
              <path d="M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-(--charcoal-ink) rounded-lg px-3 py-3 text-[16px] font-[460] transition-[transform,opacity,background-color] duration-300 hover:bg-(--warm-cream) ${
                isMenuOpen
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-3 opacity-0'
              }`}
              activeProps={{
                className: 'bg-[var(--warm-cream)] text-[var(--charcoal-ink)]',
              }}
              style={{ transitionDelay: `${index * 55}ms` }}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </aside>
    </nav>
  )
}