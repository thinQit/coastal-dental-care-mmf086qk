"use client";

import Link from 'next/link'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  brandName?: string
  description?: string
  columns?: FooterColumn[]
  email?: string
  phone?: string
  address?: string
  copyright?: string
}

export default function Footer({
  brandName = 'GrowthPilot',
  description = 'Conversion-focused growth platform helping teams launch high-performing landing pages in minutes.',
  columns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Integrations', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ],
  email = 'hello@growthpilot.com',
  phone = '+1 (555) 123-9876',
  address = '450 Market Street, San Francisco, CA',
  copyright = '© 2026 GrowthPilot. All rights reserved.',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-[#111827]">{brandName}</h3>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">{description}</p>
          <div className="mt-6 space-y-2 text-sm text-[#111827]">
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#111827]">{column.title}</h4>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-[#2563EB]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
          <p className="text-xs text-muted-foreground">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}
