"use client";

import { cn } from '@/lib/utils'

interface LogoCloudProps {
  title?: string
  logos?: string[]
  stats?: { label: string; value: string }[]
  showStats?: boolean
}

export default function LogoCloud({
  title = 'Trusted by fast-growing teams',
  logos = ['NovaTech', 'ScaleOps', 'MetricFlow', 'Launchly', 'OrbitLabs', 'PeakCommerce'],
  stats = [
    { label: 'Avg. CVR lift', value: '38%' },
    { label: 'Pages launched', value: '12k+' },
    { label: 'Monthly visitors', value: '48M' },
  ],
  showStats = true,
}: Partial<LogoCloudProps>) {
  return (
    <section className="bg-muted/40 py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground">{title}</p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-14 items-center justify-center rounded-lg border border-border bg-white px-4 text-sm font-semibold text-[#111827]"
            >
              {logo}
            </div>
          ))}
        </div>

        {showStats ? (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className={cn('rounded-lg border border-border bg-white p-4 text-center')}>
                <p className="text-2xl font-bold text-[#111827]">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
