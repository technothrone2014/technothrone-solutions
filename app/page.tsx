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
      
      {/* Large spacer after Hero */}
      <div className="h-12 md:h-20" />
      <SectionSeparator />
      <div className="h-12 md:h-20" />
      
      {/* Audience Section */}
      <div className="relative bg-purple-900/20 backdrop-blur-sm border-y border-gold-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <SectionDivider label="— The Throne Room —" />
          <div className="h-8 md:h-12" />
          <Audience />
        </div>
      </div>
      
      {/* Large spacer after Audience */}
      <div className="h-12 md:h-20" />
      <SectionSeparator />
      <div className="h-12 md:h-20" />
      
      {/* Services Section */}
      <div className="relative bg-purple-900/20 backdrop-blur-sm border-y border-gold-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <SectionDivider label="— Our Services —" />
          <div className="h-8 md:h-12" />
          <Services />
        </div>
      </div>
      
      {/* Large spacer after Services */}
      <div className="h-12 md:h-20" />
      <SectionSeparator />
      <div className="h-12 md:h-20" />
      
      {/* Portfolio Section */}
      <div className="relative bg-purple-900/20 backdrop-blur-sm border-y border-gold-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <SectionDivider label="— Our Legacy —" />
          <div className="h-8 md:h-12" />
          <Portfolio />
        </div>
      </div>
      
      {/* Large spacer after Portfolio */}
      <div className="h-12 md:h-20" />
      <SectionSeparator />
      <div className="h-12 md:h-20" />
      
      {/* Contact Section */}
      <div className="relative bg-purple-900/20 backdrop-blur-sm border-y border-gold-500/20">
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