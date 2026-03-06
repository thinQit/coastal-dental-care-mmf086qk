export const dynamic = 'force-dynamic';

import HeroAurora from '@/components/HeroAurora'
import ContactForm from '@/components/ContactForm'
import CTAVortex from '@/components/CTAVortex'

export default function ContactPage() {
  return (
    <div className="pt-20">
      <HeroAurora
        badge="Contact"
        title="Questions before you launch?"
        subtitle="Tell us what you’re building and we’ll point you to the right plan—or suggest improvements to your page structure."
        primaryCta={{ label: 'Email us', href: 'mailto:hello@convertly.page' }}
        secondaryCta={{ label: 'View pricing', href: '/pricing' }}
      />

      <ContactForm
        headline="Send a message"
        subheadline="We typically reply within 1 business day."
        contactInfo={[
          { icon: 'Mail', label: 'Email', value: 'hello@convertly.page' },
          { icon: 'Clock3', label: 'Sales hours', value: 'Mon–Fri, 9:00am–5:00pm PT' },
          { icon: 'MapPin', label: 'Address', value: '55 Market Street, Suite 1200, San Francisco, CA 94105' },
        ]}
      />

      <CTAVortex
        title="Prefer to start now?"
        subtitle="Pick a plan and publish your first version today."
        ctaLabel="View pricing"
        ctaHref="/pricing"
        secondaryCtaLabel="Back to home"
        secondaryCtaHref="/"
      />
    </div>
  )
}
