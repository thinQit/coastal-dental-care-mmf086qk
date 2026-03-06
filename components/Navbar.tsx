'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import ButtonPrimary from '@/components/ButtonPrimary'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  logoText?: string
  logoHref?: string
  ctaText?: string
  ctaHref?: string
  items?: NavItem[]
}

export default function Navbar({
  logoText = 'GrowthPilot',
  logoHref = '#',
  ctaText = 'Start Free Trial',
  ctaHref = '#pricing',
  items = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href={logoHref} className="inline-flex items-center gap-2 font-semibold text-[#111827]">
          <Sparkles className="h-5 w-5 text-[#2563EB]" />
          <span>{logoText}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-[#111827] hover:text-[#2563EB]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonPrimary text={ctaText} href={ctaHref} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5 text-[#111827]" /> : <Menu className="h-5 w-5 text-[#111827]" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border bg-white transition-all duration-300 md:hidden',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#111827] hover:text-[#2563EB]"
            >
              {item.label}
            </Link>
          ))}
          <ButtonPrimary text={ctaText} href={ctaHref} className="w-full justify-center" />
        </nav>
      </div>
    </header>
  )
}
