export const dynamic = 'force-dynamic';

import HeroAurora from '@/components/HeroAurora'
import FeaturesCards3D from '@/components/FeaturesCards3D'
import CTAVortex from '@/components/CTAVortex'

export default function AboutPage() {
  return (
    <div className="pt-20">
      <HeroAurora
        badge="About Convertly"
        title="A landing page system built for clarity and speed."
        subtitle="Convertly was created to help teams launch without design debt—clean sections, strong hierarchy, and copy that stays focused on outcomes."
        primaryCta={{ label: 'See pricing', href: '/pricing' }}
        secondaryCta={{ label: 'Contact', href: '/contact' }}
      />

      <FeaturesCards3D
        badge="Our team"
        title="Small team, strong opinions"
        subtitle="We build templates the way we build landing pages for clients: structured, measurable, and easy to customize."
        features={[
          {
            icon: 'UserRound',
            title: 'Avery Patel — Product & UX',
            description: 'Focuses on conversion patterns, information hierarchy, and accessibility.',
          },
          {
            icon: 'Palette',
            title: 'Samira Nguyen — Design Systems',
            description: 'Builds token-based UI systems with Tailwind and shadcn/ui.',
          },
          {
            icon: 'Code2',
            title: 'Noah Brooks — Frontend Engineering',
            description: 'Optimizes performance, SEO, and responsive behavior in Next.js.',
          },
        ]}
      />

      <CTAVortex
        title="Want a page review before you launch?"
        subtitle="Send your draft and we’ll reply with 3–5 high-impact improvements for clarity and conversion."
        ctaLabel="Contact us"
        ctaHref="/contact"
        secondaryCtaLabel="View pricing"
        secondaryCtaHref="/pricing"
      />
    </div>
  )
}
