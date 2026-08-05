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
      
      {/* Trust Badges - Now a separate component */}
      <div className="py-8 mt-16">
        <TrustBadges />
      </div>

      {/* MASSIVE spacer after Trust Badges */}
      <div className="h-24 md:h-32" />
      <SectionSeparator />
      <div className="h-24 md:h-32" />
      
      {/* Audience Section */}
      <div className="relative bg-purple-900/20 backdrop-blur-sm border-y border-gold-500/20 py-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <SectionDivider label="— The Throne Room —" />
          <div className="h-8 md:h-12" />
          <Audience />
        </div>
      </div>
      
      {/* Large spacer after Audience */}
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
      
      {/* Large spacer after Services */}
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
      
      {/* Large spacer after Portfolio */}
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