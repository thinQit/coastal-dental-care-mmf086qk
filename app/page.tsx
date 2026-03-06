export const dynamic = 'force-dynamic';

import HeroAurora from '@/components/HeroAurora'
import LogoCloud from '@/components/LogoCloud'
import StatsRow from '@/components/StatsRow'
import FeaturesCards3D from '@/components/FeaturesCards3D'
import TestimonialsAnimated from '@/components/TestimonialsAnimated'
import PricingTable from '@/components/PricingTable'
import FAQAccordion from '@/components/FAQAccordion'
import CTAVortex from '@/components/CTAVortex'

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroAurora
        badge="Next.js + Tailwind + shadcn/ui"
        title="Turn more clicks into customers with a landing page built to convert."
        subtitle="Convertly is a clean, high-contrast landing page template with pricing, testimonials, and FAQ—ready for your next launch."
        primaryCta={{ label: 'Get the template', href: '/pricing' }}
        secondaryCta={{ label: 'See how it works', href: '#features' }}
      />

      <section id="social-proof" className="py-20 md:py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6 space-y-10">
          <LogoCloud
            headline="Trusted by teams shipping faster launches"
            subheadline="Used by founders, marketers, and agencies to publish polished pages without custom design cycles."
            logos={[
              { name: 'Northpeak Studio', imageUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
              { name: 'MetricForge', imageUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
              { name: 'LaunchPad Labs', imageUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg' },
              { name: 'BrightCart', imageUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg' },
            ]}
          />
          <StatsRow
            stats={[
              { value: '2–4 hours', label: 'Avg. time to publish' },
              { value: '90+ (typical)', label: 'Mobile Lighthouse score' },
              { value: '8 core blocks', label: 'Sections included' },
            ]}
          />
        </div>
      </section>

      <section id="features">
        <FeaturesCards3D
          badge="Why Convertly"
          title="Everything you need for a conversion-focused launch"
          subtitle="A simple, opinionated structure that keeps attention on the offer and the next step."
          features={[
            { icon: 'MousePointerClick', title: 'High-contrast CTA system', description: 'One primary CTA per section with consistent emphasis.' },
            { icon: 'ShieldCheck', title: 'Social proof that feels credible', description: 'Logos, quantified stats, and testimonials that build trust quickly.' },
            { icon: 'CreditCard', title: 'Pricing that answers objections', description: 'Three clear tiers with a highlighted plan and value-forward copy.' },
            { icon: 'CircleHelp', title: 'FAQ designed for speed', description: 'Scannable questions and concise answers for common blockers.' },
            { icon: 'SearchCheck', title: 'SEO-ready structure', description: 'Semantic sections, clean metadata, and performance-minded layout.' },
            { icon: 'Smartphone', title: 'Responsive by default', description: 'Mobile-first spacing and thumb-friendly CTA placement.' },
          ]}
        />
      </section>

      <section id="testimonials">
        <TestimonialsAnimated
          title="What customers say after switching to Convertly"
          subtitle="Short, specific feedback that mirrors the outcomes you’re selling."
          testimonials={[
            {
              quote:
                'We replaced a messy page with Convertly and shipped a clean launch in one afternoon. Our signup rate improved within the first week.',
              name: 'Maya Chen',
              designation: 'Founder, MetricForge',
              src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
            },
            {
              quote:
                'The layout is opinionated in the best way—every section pushes toward the CTA without feeling salesy.',
              name: 'Jordan Alvarez',
              designation: 'Growth Lead, BrightCart',
              src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
            },
            {
              quote:
                'As an agency, we need repeatable structure. Convertly gives us a strong baseline and we customize the brand in minutes.',
              name: 'Elena Rossi',
              designation: 'Creative Director, Northpeak Studio',
              src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
            },
          ]}
          autoplay
        />
      </section>

      <section id="pricing">
        <PricingTable
          headline="Simple pricing for fast launches"
          subheadline="Pick a plan based on how many brands you ship. Upgrade anytime."
          tiers={[
            {
              name: 'Starter',
              price: '$19',
              period: '/month',
              description: 'For solo founders launching one product.',
              features: ['Full landing page (8 sections)', 'SEO meta defaults', 'Responsive layout', 'Basic customization guide'],
              ctaLabel: 'Get Starter',
              ctaHref: '/contact',
            },
            {
              name: 'Pro',
              price: '$39',
              period: '/month',
              description: 'For teams that want a polished, repeatable launch system.',
              features: ['Everything in Starter', 'Pricing + FAQ page variants', 'Testimonial library section', 'Brand tokens setup', 'Priority updates'],
              ctaLabel: 'Get Pro',
              ctaHref: '/contact',
              highlighted: true,
            },
            {
              name: 'Agency',
              price: '$99',
              period: '/month',
              description: 'For agencies shipping multiple client pages.',
              features: ['Everything in Pro', 'Multi-brand presets', 'Reusable section blocks', 'Client handoff checklist', 'White-label footer option'],
              ctaLabel: 'Get Agency',
              ctaHref: '/contact',
            },
          ]}
        />
      </section>

      <section id="faq">
        <FAQAccordion
          headline="FAQ"
          subheadline="Quick answers to the most common questions before you buy."
          items={[
            {
              question: 'Do I need a backend or database?',
              answer: 'No. Convertly is a static marketing site. You can connect CTA buttons to your checkout or email tool.',
            },
            {
              question: 'Can I customize colors and fonts?',
              answer: 'Yes. The design system is token-based, so swapping brand colors and typography is straightforward.',
            },
            {
              question: 'How fast can I launch?',
              answer: 'Most teams publish a first version in 2–4 hours, then iterate copy and visuals over the next day.',
            },
            {
              question: 'Is it accessible and mobile-friendly?',
              answer: 'Yes. Components follow accessible patterns and the layout is optimized for mobile reading and thumb-friendly CTAs.',
            },
            {
              question: 'What if I need help tailoring the copy?',
              answer: 'Contact us for a copy + design review and we’ll suggest high-impact improvements.',
            },
          ]}
        />
      </section>

      <CTAVortex
        title="Ready to ship a landing page that converts?"
        subtitle="Start with a proven structure, then make it yours. Publish today and iterate with confidence."
        ctaLabel="Get Convertly"
        ctaHref="/pricing"
        secondaryCtaLabel="Contact sales"
        secondaryCtaHref="/contact"
      />
    </div>
  )
}
