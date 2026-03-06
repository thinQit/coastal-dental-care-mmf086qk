'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Rocket, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ButtonPrimaryProps {
  text?: string
  href?: string
  className?: string
  icon?: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ArrowRight,
  Sparkles,
  Rocket,
  CheckCircle2,
}

export default function ButtonPrimary({
  text = 'Get Started',
  href = '#',
  className = '',
  icon = '',
}: Partial<ButtonPrimaryProps>) {
  const Icon = iconMap[icon] ?? null

  return (
    <Button
      asChild
      className={cn(
        'rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1d4ed8] focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2',
        className
      )}
    >
      <Link href={href} className="inline-flex items-center gap-2">
        <span>{text}</span>
        {Icon ? <Icon className="h-4 w-4" /> : null}
      </Link>
    </Button>
  )
}
