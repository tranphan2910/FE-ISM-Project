import { HeroSection } from './landing/HeroSection'
import { NetworkStatsSection } from './landing/NetworkStatsSection'
import { FeaturedOpportunitiesSection } from './landing/FeaturedOpportunitiesSection'
import { TalentEmployersSection } from './landing/TalentEmployersSection'
import { CompanyMarqueeSection } from './landing/CompanyMarqueeSection'
import { CtaSection } from './landing/CtaSection'

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <NetworkStatsSection />
      <FeaturedOpportunitiesSection />
      <TalentEmployersSection />
      <CompanyMarqueeSection />
      <CtaSection />
    </>
  )
}

