"use client";

interface StatItem {
  label: string
  value: string
}

interface StatsRowProps {
  stats?: StatItem[]
}

export default function StatsRow({
  stats = [
    { label: 'Revenue influenced', value: '$24.6M' },
    { label: 'Average setup time', value: '45 min' },
    { label: 'Campaigns launched', value: '8,400+' },
    { label: 'Customer satisfaction', value: '98%' },
  ],
}: Partial<StatsRowProps>) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-border bg-card p-5 text-center shadow-sm">
          <p className="text-2xl font-bold text-[#111827]">{stat.value}</p>
          <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
