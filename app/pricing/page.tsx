export const dynamic = 'force-dynamic';

import HeroAurora from '@/components/HeroAurora'
import PricingTable from '@/components/PricingTable'
import CTAVortex from '@/components/CTAVortex'

export default function PricingPage() {
  return (
    <div className="pt-20">
      <HeroAurora
        badge="Pricing"
        title="Pricing that matches how you launch"
        subtitle="Choose a plan and publish a conversion-first landing page today. Upgrade as your needs grow."
        primaryCta={{ label: 'Get Pro', href: '/contact' }}
        secondaryCta={{ label: 'Compare plans', href: '#plans' }}
      />

      <section id="plans">
        <PricingTable
          headline="Plans"
          subheadline="Transparent tiers with the essentials included."
          tiers={[
            {
              name: 'Starter',
              price: '$19',
              period: '/month',
              description: 'Launch one product with confidence.',
              features: ['8-section landing page', 'Feature grid + testimonials', 'SEO meta defaults'],
              ctaLabel: 'Choose Starter',
              ctaHref: '/contact',
            },
            {
              name: 'Pro',
              price: '$39',
              period: '/month',
              description: 'Best for teams and repeat launches.',
              features: ['Everything in Starter', 'Pricing page variants', 'FAQ + objection handling', 'Brand tokens setup'],
              ctaLabel: 'Choose Pro',
              ctaHref: '/contact',
              highlighted: true,
            },
            {
              name: 'Agency',
              price: '$99',
              period: '/month',
              description: 'For agencies shipping multiple brands.',
              features: ['Everything in Pro', 'Multi-brand presets', 'White-label footer option', 'Client handoff checklist'],
              ctaLabel: 'Choose Agency',
              ctaHref: '/contact',
            },
          ]}
        />
      </section>

      <CTAVortex
        title="Ship your next launch with a proven structure"
        subtitle="Stop reinventing layout and start improving your offer and copy."
        ctaLabel="Contact us to start"
        ctaHref="/contact"
        secondaryCtaLabel="Back to home"
        secondaryCtaHref="/"
      />
    </div>
  )
}
