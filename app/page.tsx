// page.tsx
import Hero from '@/components/Hero'
import Audience from '@/components/Audience'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SectionDivider from '@/components/SectionDivider'
import SectionSeparator from '@/components/SectionSeparator'
import TrustBadges from '@/components/TrustBadges'

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Hero />
      
      {/* ===== SEPARATOR 1: Hero → TrustBadges ===== */}
      <div className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent" />
        </div>
      </div>
      
      {/* Trust Badges */}
      <div className="relative z-10">
        <TrustBadges />
      </div>

      {/* ===== SEPARATOR 2: TrustBadges → Audience ===== */}
      <div className="relative py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/15 to-transparent" />
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent" />
          <div className="mt-8">
            <SectionSeparator />
          </div>
        </div>
      </div>
      
      {/* Audience Section - STRONGER BACKGROUND */}
      <div className="relative">
        <div className="absolute inset-0 bg-purple-900/40 backdrop-blur-sm border-y border-gold-500/20" />
        <div className="relative z-10 py-8">
          <SectionDivider label="— The Throne Room —" />
          <div className="h-6 md:h-8" />
          <Audience />
        </div>
      </div>
      
      {/* ===== SEPARATOR 3: Audience → Services ===== */}
      <div className="relative py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
          <div className="mt-8">
            <SectionSeparator />
          </div>
        </div>
      </div>
      
      {/* Services Section - STRONGER BACKGROUND */}
      <div className="relative">
        <div className="absolute inset-0 bg-purple-900/40 backdrop-blur-sm border-y border-gold-500/20" />
        <div className="relative z-10 py-8">
          <SectionDivider label="— Our Services —" />
          <div className="h-8 md:h-12" />
          <Services />
        </div>
      </div>
      
      {/* ===== SEPARATOR 4: Services → Portfolio ===== */}
      <div className="relative py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
          <div className="mt-8">
            <SectionSeparator />
          </div>
        </div>
      </div>
      
      {/* Portfolio Section - STRONGER BACKGROUND */}
      <div className="relative">
        <div className="absolute inset-0 bg-purple-900/40 backdrop-blur-sm border-y border-gold-500/20" />
        <div className="relative z-10 py-8">
          <SectionDivider label="— Our Legacy —" />
          <div className="h-8 md:h-12" />
          <Portfolio />
        </div>
      </div>
      
      {/* ===== SEPARATOR 5: Portfolio → Contact ===== */}
      <div className="relative py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
          <div className="mt-8">
            <SectionSeparator />
          </div>
        </div>
      </div>
      
      {/* Contact Section - STRONGER BACKGROUND */}
      <div className="relative">
        <div className="absolute inset-0 bg-purple-900/40 backdrop-blur-sm border-y border-gold-500/20" />
        <div className="relative z-10 py-8">
          <SectionDivider label="— Join Us —" />
          <div className="h-8 md:h-12" />
          <Contact />
        </div>
      </div>
      
      <Footer />
    </main>
  )
}