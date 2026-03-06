"use client";

import { CheckCircle2, Layers, Gauge, Wand2, Sparkles, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

interface FeatureItem {
  title: string
  description: string
  bullets: string[]
  icon: string
}

interface FeatureGridProps {
  heading?: string
  subheading?: string
  features?: FeatureItem[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Gauge,
  Wand2,
  Sparkles,
  ShieldCheck,
}

export default function FeatureGrid({
  heading = 'Everything your team needs to ship pages that convert',
  subheading = 'Built for marketers and product teams who move quickly and care about measurable impact.',
  features = [
    {
      title: 'Modular page sections',
      description: 'Mix and match conversion-focused blocks to build pages in minutes.',
      bullets: ['Drag-and-drop layout', 'Saved section library', 'Version history'],
      icon: 'Layers',
    },
    {
      title: 'Performance analytics',
      description: 'Track CTR, scroll depth, and conversion events in one dashboard.',
      bullets: ['Live funnel view', 'Traffic source breakdown', 'Weekly insight digest'],
      icon: 'Gauge',
    },
    {
      title: 'AI copy assistant',
      description: 'Generate headlines and CTA variations optimized for your audience.',
      bullets: ['Brand voice presets', 'Instant variants', 'Built-in readability scoring'],
      icon: 'Wand2',
    },
  ],
}: Partial<FeatureGridProps>) {
  return (
    <section id="features" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-[#111827] md:text-4xl">{heading}</h2>
          <p className="mt-4 text-muted-foreground">{subheading}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Sparkles
            return (
              <Card
                key={feature.title}
                className={cn('rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md')}
              >
                <Icon className="h-6 w-6 text-[#2563EB]" />
                <h3 className="mt-4 text-xl font-semibold text-[#111827]">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                <ul className="mt-4 space-y-2">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="inline-flex items-center gap-2 text-sm text-[#111827]">
                      <CheckCircle2 className="h-4 w-4 text-[#2563EB]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
