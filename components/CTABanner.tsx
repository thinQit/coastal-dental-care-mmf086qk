"use client";

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ButtonPrimary from '@/components/ButtonPrimary'

interface CTABannerProps {
  heading?: string
  subheading?: string
  bullets?: string[]
  ctaText?: string
  ctaHref?: string
}

export default function CTABanner({
  heading = 'Ready to launch your next high-converting page?',
  subheading = 'Join growth teams using GrowthPilot to move faster and convert more traffic.',
  bullets = ['Free 14-day trial', 'No credit card required', 'Cancel anytime'],
  ctaText = 'Start Free Trial',
  ctaHref = '#',
}: Partial<CTABannerProps>) {
  return (
    <section className="bg-[#111827] py-20 md:py-24">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center md:px-10">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">{subheading}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {bullets.map((bullet) => (
            <span key={bullet} className="inline-flex items-center gap-2 text-sm text-white/90">
              <CheckCircle2 className="h-4 w-4 text-[#60A5FA]" />
              {bullet}
            </span>
          ))}
        </div>
        <div className="mt-8 inline-flex">
          <ButtonPrimary text={ctaText} href={ctaHref} icon="ArrowRight" className="bg-[#2563EB] hover:bg-[#1d4ed8]" />
        </div>
        <div className="sr-only">
          <ArrowRight />
        </div>
      </div>
    </section>
  )
}
