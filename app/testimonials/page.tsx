export const dynamic = 'force-dynamic';

import HeroAurora from '@/components/HeroAurora'
import TestimonialsAnimated from '@/components/TestimonialsAnimated'
import CTAVortex from '@/components/CTAVortex'

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <HeroAurora
        badge="Customer stories"
        title="Proof that a clean structure wins"
        subtitle="A few notes from teams who shipped faster and improved conversion with a clearer landing page flow."
        primaryCta={{ label: 'See pricing', href: '/pricing' }}
        secondaryCta={{ label: 'Contact', href: '/contact' }}
      />

      <TestimonialsAnimated
        title="Customer quotes"
        subtitle="Specific outcomes, not vague praise."
        testimonials={[
          {
            quote:
              'We finally had a page where the CTA was obvious and the story made sense. Less explaining on calls, more signups.',
            name: 'Priya Shah',
            designation: 'Marketing Manager, CloudHarbor',
            src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
          },
          {
            quote:
              'The pricing section is laid out exactly how we sell—simple tiers, clear value, and fewer objections.',
            name: 'Dylan Kim',
            designation: 'COO, Finch & Co.',
            src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
          },
          {
            quote:
              'We used Convertly as a base and swapped brand tokens. It looked custom without the custom timeline.',
            name: 'Renee Wallace',
            designation: 'Founder, LaunchPad Labs',
            src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
          },
          {
            quote:
              'The FAQ accordion is underrated. It helped us address setup concerns right where people hesitate.',
            name: 'Omar Haddad',
            designation: 'Product Lead, MetricForge',
            src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
          },
        ]}
      />

      <CTAVortex
        title="Want results like these?"
        subtitle="Start with a conversion-first structure and focus your energy on your offer."
        ctaLabel="View pricing"
        ctaHref="/pricing"
        secondaryCtaLabel="Contact sales"
        secondaryCtaHref="/contact"
      />
    </div>
  )
}
