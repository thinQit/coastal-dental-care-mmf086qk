export const dynamic = 'force-dynamic';

import HeroAurora from '@/components/HeroAurora'
import FAQAccordion from '@/components/FAQAccordion'

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <HeroAurora
        badge="Effective date: March 6, 2026"
        title="Privacy Policy"
        subtitle="A plain-language overview of how we handle contact requests and basic site analytics."
        primaryCta={{ label: 'Contact', href: '/contact' }}
        secondaryCta={{ label: 'Back to home', href: '/' }}
      />

      <FAQAccordion
        headline="What we collect"
        subheadline="Only what we need to respond and improve the site."
        items={[
          {
            question: 'Contact information',
            answer:
              'If you email us or submit the contact form, we collect the information you provide (such as name, email, and message) to respond to your request.',
          },
          {
            question: 'Basic analytics',
            answer:
              'We may use privacy-friendly analytics to understand page performance (e.g., page views and referrers) to improve content and usability.',
          },
          {
            question: 'Data retention',
            answer: 'We keep messages as long as needed to provide support and maintain business records.',
          },
        ]}
      />
    </div>
  )
}
