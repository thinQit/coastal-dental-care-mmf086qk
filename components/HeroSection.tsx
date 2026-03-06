"use client";

import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import ButtonPrimary from '@/components/ButtonPrimary'
import ButtonSecondary from '@/components/ButtonSecondary'

interface HeroSectionProps {
  badgeText?: string
  heading?: string
  subheading?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  highlights?: string[]
  imageSrc?: string
  showImage?: boolean
}

export default function HeroSection({
  badgeText = 'Trusted by 2,000+ growth teams',
  heading = 'Turn more visitors into customers with a high-converting landing page system.',
  subheading = 'GrowthPilot helps you launch beautiful, conversion-first pages fast, so your team can focus on scaling campaigns instead of rebuilding sections.',
  primaryCtaText = 'Start Free Trial',
  primaryCtaHref = '#pricing',
  secondaryCtaText = 'Book a Demo',
  secondaryCtaHref = '#',
  highlights = ['No-code editing', 'Built-in A/B testing', 'Real-time conversion analytics'],
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  showImage = true,
}: Partial<HeroSectionProps>) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="inline-flex rounded-full border border-[#2563EB]/20 bg-[#2563EB]/10 px-4 py-1 text-sm font-medium text-[#2563EB]">
            {badgeText}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-[#111827] md:text-5xl lg:text-6xl">{heading}</h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">{subheading}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonPrimary text={primaryCtaText} href={primaryCtaHref} />
            <ButtonSecondary text={secondaryCtaText} href={secondaryCtaHref} />
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2 text-sm text-[#111827]">
                <CheckCircle2 className="h-4 w-4 text-[#2563EB]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {showImage ? (
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <Image
              src={imageSrc}
              alt="Hero visual"
              width={1600}
              height={900}
              unoptimized
              className="h-auto w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  )
}
