export const dynamic = 'force-dynamic';

import HeroAurora from '@/components/HeroAurora'
import FAQAccordion from '@/components/FAQAccordion'

export default function TermsPage() {
  return (
    <div className="pt-20">
      <HeroAurora
        badge="Effective date: March 6, 2026"
        title="Terms of Service"
        subtitle="Simple terms for using the Convertly website and purchasing plans."
        primaryCta={{ label: 'Contact', href: '/contact' }}
        secondaryCta={{ label: 'Back to home', href: '/' }}
      />

      <FAQAccordion
        headline="Key terms"
        subheadline="A brief summary of the basics."
        items={[
          {
            question: 'Use of the site',
            answer: 'You may use the site for lawful purposes and to evaluate Convertly plans and content.',
          },
          {
            question: 'Purchases and refunds',
            answer:
              'If you purchase a plan, you agree to the listed pricing and billing terms. Refunds are available within 14 days as described on the pricing page.',
          },
          {
            question: 'Limitation of liability',
            answer:
              'Convertly is provided as-is. We are not liable for indirect or consequential damages related to your use of the site.',
          },
        ]}
      />
    </div>
  )
}
