"use client";
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";
import { Sparkles, Globe, Shield, Star, Zap, Heart, ShieldCheck, CreditCard, Smartphone, Palette } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { ShieldCheck, CreditCard, Smartphone, Palette, 
  Sparkles,
  Globe,
  Shield,
  Star,
  Zap,
  Heart,
};

export default function FeaturesCards3D({
  badge = 'Why teams choose us',
  headline = 'Everything you need to scale conversion',
  subheadline = 'A focused toolkit designed to help you capture more demand, qualify leads faster, and grow predictably.',
  features = [],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="relative group/card w-auto h-auto rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-black dark:border-white/[0.2] border-black/[0.1]">
                  <CardItem translateZ="50" className="mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
