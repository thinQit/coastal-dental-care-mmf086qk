"use client";

import { Card } from '@/components/ui/card'
import { Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  title: string
  result: string
}

interface TestimonialCardsProps {
  heading?: string
  testimonials?: Testimonial[]
}

export default function TestimonialCards({
  heading = 'Teams are seeing measurable growth in weeks, not months',
  testimonials = [
    {
      quote: 'We increased demo signups by 42% in the first month after switching to GrowthPilot.',
      name: 'Ariana Chen',
      title: 'Head of Growth, NovaTech',
      result: 'Result: +42% demo conversions',
    },
    {
      quote: 'Our campaign launch cycle dropped from 10 days to 2 days without sacrificing quality.',
      name: 'Marcus Reed',
      title: 'Marketing Director, Launchly',
      result: 'Result: 80% faster launches',
    },
    {
      quote: 'The built-in experiments helped us find a winning headline that lifted paid traffic ROI.',
      name: 'Priya Nair',
      title: 'Performance Lead, OrbitLabs',
      result: 'Result: +29% paid ROI',
    },
  ],
}: Partial<TestimonialCardsProps>) {
  return (
    <section id="testimonials" className="bg-muted/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="max-w-3xl text-3xl font-bold text-[#111827] md:text-4xl">{heading}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <Quote className="h-5 w-5 text-[#2563EB]" />
              <p className="mt-4 text-sm leading-relaxed text-[#111827]">“{item.quote}”</p>
              <p className="mt-5 text-sm font-semibold text-[#111827]">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.title}</p>
              <p className="mt-3 text-xs font-medium text-[#2563EB]">{item.result}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
