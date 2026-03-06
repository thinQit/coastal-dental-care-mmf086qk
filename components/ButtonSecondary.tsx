'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ButtonSecondaryProps {
  text?: string
  href?: string
  className?: string
  icon?: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ArrowRight,
  Sparkles,
  ExternalLink,
}

export default function ButtonSecondary({
  text = 'Learn More',
  href = '#',
  className = '',
  icon = '',
}: Partial<ButtonSecondaryProps>) {
  const Icon = iconMap[icon] ?? null

  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        'rounded-lg border-border bg-transparent px-6 py-3 font-semibold text-[#111827] hover:bg-muted focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2',
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
