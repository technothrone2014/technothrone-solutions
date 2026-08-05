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
      <div className="h-16 md:h-24" />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
      <div className="h-16 md:h-24" />
      
      {/* Trust Badges */}
      <TrustBadges />

      {/* ===== SEPARATOR 2: TrustBadges → Audience ===== */}
      <div className="h-16 md:h-24" />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
      <div className="h-16 md:h-24" />
      <SectionSeparator />
      <div className="h-16 md:h-24" />
      
      {/* Audience Section */}
      <div className="relative bg-purple-900/30 backdrop-blur-sm border-2 border-gold-500/30 rounded-2xl p-8 shadow-[0_0_60px_rgba(124,58,237,0.1)]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent pointer-events-none rounded-2xl" />
        <div className="relative z-10">
          <SectionDivider label="— The Throne Room —" />
          <div className="h-6 md:h-8" />
          <Audience />
        </div>
      </div>
      
      {/* ===== SEPARATOR 3: Audience → Services ===== */}
      <div className="h-16 md:h-24" />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
      <div className="h-16 md:h-24" />
      <SectionSeparator />
      <div className="h-16 md:h-24" />
      
      {/* Services Section */}
      <div className="relative bg-purple-900/20 backdrop-blur-sm border-y border-gold-500/20 py-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <SectionDivider label="— Our Services —" />
          <div className="h-8 md:h-12" />
          <Services />
        </div>
      </div>
      
      {/* ===== SEPARATOR 4: Services → Portfolio ===== */}
      <div className="h-16 md:h-24" />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
      <div className="h-16 md:h-24" />
      <SectionSeparator />
      <div className="h-16 md:h-24" />
      
      {/* Portfolio Section */}
      <div className="relative bg-purple-900/20 backdrop-blur-sm border-y border-gold-500/20 py-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <SectionDivider label="— Our Legacy —" />
          <div className="h-8 md:h-12" />
          <Portfolio />
        </div>
      </div>
      
      {/* ===== SEPARATOR 5: Portfolio → Contact ===== */}
      <div className="h-16 md:h-24" />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
      <div className="h-16 md:h-24" />
      <SectionSeparator />
      <div className="h-16 md:h-24" />
      
      {/* Contact Section */}
      <div className="relative bg-purple-900/20 backdrop-blur-sm border-y border-gold-500/20 py-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <SectionDivider label="— Join Us —" />
          <div className="h-8 md:h-12" />
          <Contact />
        </div>
      </div>
      
      <Footer />
    </main>
  )
}