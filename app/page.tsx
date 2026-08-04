import Hero from '@/components/Hero'
import Audience from '@/components/Audience'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SectionDivider from '@/components/SectionDivider'
import SectionSeparator from '@/components/SectionSeparator'

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      {/* Hero - Full viewport with no background block */}
      <Hero />
      
      {/* Visual spacer */}
      <div className="h-8 md:h-12" />
      <SectionSeparator />
      <div className="h-8 md:h-12" />
      
      {/* Audience Section - DARKER BACKGROUND */}
      <div className="relative bg-purple-900/20 backdrop-blur-sm border-y border-gold-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <SectionDivider label="— The Throne Room —" />
          <div className="h-6 md:h-8" />
          <Audience />
        </div>
      </div>
      
      {/* Visual spacer */}
      <div className="h-8 md:h-12" />
      <SectionSeparator />
      <div className="h-8 md:h-12" />
      
      {/* Services Section - DARKER BACKGROUND */}
      <div className="relative bg-purple-900/20 backdrop-blur-sm border-y border-gold-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <SectionDivider label="— Our Services —" />
          <div className="h-6 md:h-8" />
          <Services />
        </div>
      </div>
      
      {/* Visual spacer */}
      <div className="h-8 md:h-12" />
      <SectionSeparator />
      <div className="h-8 md:h-12" />
      
      {/* Portfolio Section - DARKER BACKGROUND */}
      <div className="relative bg-purple-900/20 backdrop-blur-sm border-y border-gold-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <SectionDivider label="— Our Legacy —" />
          <div className="h-6 md:h-8" />
          <Portfolio />
        </div>
      </div>
      
      {/* Visual spacer */}
      <div className="h-8 md:h-12" />
      <SectionSeparator />
      <div className="h-8 md:h-12" />
      
      {/* Contact Section - DARKER BACKGROUND */}
      <div className="relative bg-purple-900/20 backdrop-blur-sm border-y border-gold-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <SectionDivider label="— Join Us —" />
          <div className="h-6 md:h-8" />
          <Contact />
        </div>
      </div>
      
      <Footer />
    </main>
  )
}