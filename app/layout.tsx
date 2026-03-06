import './globals.css'
import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import NavbarSticky from '@/components/NavbarSticky'
import FooterMultiColumn from '@/components/FooterMultiColumn'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta-sans' })

export const metadata: Metadata = {
  title: 'Convertly — Conversion-Driven Landing Page Template',
  description:
    'Launch a clean, high-contrast landing page built to convert. Includes social proof, features, testimonials, pricing, FAQ, and strong CTAs. Next.js + Tailwind + shadcn/ui.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen bg-white text-gray-900">
        <NavbarSticky
          logo="Convertly"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Features', href: '/#features' },
            { label: 'Testimonials', href: '/testimonials' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'FAQ', href: '/#faq' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Get Template"
          ctaHref="/pricing"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="Convertly"
          description="A clean, conversion-driven landing page template for modern launches."
          columns={[
            {
              title: 'Product',
              links: [
                { label: 'Features', href: '/#features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Testimonials', href: '/testimonials' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ],
            },
            {
              title: 'Legal',
              links: [
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
              ],
            },
          ]}
          copyright="© 2026 Convertly. All rights reserved."
        />
      </body>
    </html>
  )
}
