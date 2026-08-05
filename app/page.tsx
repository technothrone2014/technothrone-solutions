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
      
      {/* DIVIDER 1 */}
      <div className="h-8 md:h-12" />
      <div className="w-full h-[2px] bg-royal-gold/40" />
      <div className="h-8 md:h-12" />
      
      <div className="bg-purple-900/20 py-8 rounded-2xl border border-gold-500/20">
        <TrustBadges />
      </div>

      {/* DIVIDER 2 */}
      <div className="h-8 md:h-12" />
      <div className="w-full h-[2px] bg-royal-gold/40" />
      <div className="h-8 md:h-12" />
      <SectionSeparator />
      <div className="h-8 md:h-12" />
      
      {/* Audience Section - WITH VISIBLE BACKGROUND */}
      <div className="bg-purple-900/30 backdrop-blur-sm border-2 border-gold-500/30 rounded-2xl p-8 shadow-[0_0_60px_rgba(124,58,237,0.1)]">
        <SectionDivider label="— The Throne Room —" />
        <div className="h-6 md:h-8" />
        <Audience />
      </div>
      
      {/* DIVIDER 3 */}
      <div className="h-8 md:h-12" />
      <div className="w-full h-[2px] bg-royal-gold/40" />
      <div className="h-8 md:h-12" />
      <SectionSeparator />
      <div className="h-8 md:h-12" />
      
      {/* Services Section - WITH VISIBLE BACKGROUND */}
      <div className="bg-purple-900/30 backdrop-blur-sm border-2 border-gold-500/30 rounded-2xl p-8 shadow-[0_0_60px_rgba(124,58,237,0.1)]">
        <SectionDivider label="— Our Services —" />
        <div className="h-8 md:h-12" />
        <Services />
      </div>
      
      {/* DIVIDER 4 */}
      <div className="h-8 md:h-12" />
      <div className="w-full h-[2px] bg-royal-gold/40" />
      <div className="h-8 md:h-12" />
      <SectionSeparator />
      <div className="h-8 md:h-12" />
      
      {/* Portfolio Section - WITH VISIBLE BACKGROUND */}
      <div className="bg-purple-900/30 backdrop-blur-sm border-2 border-gold-500/30 rounded-2xl p-8 shadow-[0_0_60px_rgba(124,58,237,0.1)]">
        <SectionDivider label="— Our Legacy —" />
        <div className="h-8 md:h-12" />
        <Portfolio />
      </div>
      
      {/* DIVIDER 5 */}
      <div className="h-8 md:h-12" />
      <div className="w-full h-[2px] bg-royal-gold/40" />
      <div className="h-8 md:h-12" />
      <SectionSeparator />
      <div className="h-8 md:h-12" />
      
      {/* Contact Section - WITH VISIBLE BACKGROUND */}
      <div className="bg-purple-900/30 backdrop-blur-sm border-2 border-gold-500/30 rounded-2xl p-8 shadow-[0_0_60px_rgba(124,58,237,0.1)]">
        <SectionDivider label="— Join Us —" />
        <div className="h-8 md:h-12" />
        <Contact />
      </div>
      
      <Footer />
    </main>
  )
}