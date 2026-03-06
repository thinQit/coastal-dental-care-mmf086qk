"use client";

import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import ButtonPrimary from '@/components/ButtonPrimary'
import ButtonSecondary from '@/components/ButtonSecondary'

interface Plan {
  name: string
  price: string
  billing: string
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
  highlighted?: boolean
}

interface PricingCardsProps {
  heading?: string
  plans?: Plan[]
}

export default function PricingCards({
  heading = 'Simple pricing built for growth at every stage',
  plans = [
    {
      name: 'Starter',
      price: '$29',
      billing: '/month',
      description: 'Perfect for solo founders validating a new offer.',
      features: ['3 published pages', 'Basic analytics', 'Email support'],
      ctaText: 'Get Started',
      ctaHref: '#',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$99',
      billing: '/month',
      description: 'Best for teams scaling acquisition with experiments.',
      features: ['Unlimited pages', 'A/B testing suite', 'Team collaboration', 'Priority support'],
      ctaText: 'Start Free Trial',
      ctaHref: '#',
      highlighted: true,
    },
    {
      name: 'Scale',
      price: '$249',
      billing: '/month',
      description: 'Advanced controls for high-volume campaigns.',
      features: ['Advanced segmentation', 'Custom domains', 'SLA + onboarding'],
      ctaText: 'Talk to Sales',
      ctaHref: '#',
      highlighted: false,
    },
  ],
}: Partial<PricingCardsProps>) {
  return (
    <section id="pricing" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold text-[#111827] md:text-4xl">{heading}</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'rounded-xl border border-border bg-card p-6 shadow-sm',
                plan.highlighted ? 'border-[#2563EB] ring-2 ring-[#2563EB]/20' : ''
              )}
            >
              <h3 className="text-xl font-semibold text-[#111827]">{plan.name}</h3>
              <p className="mt-3 text-4xl font-bold text-[#111827]">
                {plan.price}
                <span className="text-base font-medium text-muted-foreground">{plan.billing}</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="inline-flex items-center gap-2 text-sm text-[#111827]">
                    <CheckCircle2 className="h-4 w-4 text-[#2563EB]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {plan.highlighted ? (
                  <ButtonPrimary text={plan.ctaText} href={plan.ctaHref} className="w-full justify-center" />
                ) : (
                  <ButtonSecondary text={plan.ctaText} href={plan.ctaHref} className="w-full justify-center" />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
