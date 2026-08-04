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
      <Hero />
      
      {/* Enhanced Visual separator with more space */}
      <div className="h-8 md:h-12" />
      <SectionSeparator />
      <div className="h-8 md:h-12" />
      
      {/* Audience Section with subtle background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
        <SectionDivider label="— The Throne Room —" />
        <div className="h-6 md:h-8" />
        <Audience />
      </div>
      
      <div className="h-8 md:h-12" />
      <SectionSeparator />
      <div className="h-8 md:h-12" />
      
      {/* Services Section with subtle background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-900/5 to-transparent pointer-events-none" />
        <SectionDivider label="— Our Services —" />
        <div className="h-6 md:h-8" />
        <Services />
      </div>
      
      <div className="h-8 md:h-12" />
      <SectionSeparator />
      <div className="h-8 md:h-12" />
      
      {/* Portfolio Section with subtle background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
        <SectionDivider label="— Our Legacy —" />
        <div className="h-6 md:h-8" />
        <Portfolio />
      </div>
      
      <div className="h-8 md:h-12" />
      <SectionSeparator />
      <div className="h-8 md:h-12" />
      
      {/* Contact Section with subtle background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-900/5 to-transparent pointer-events-none" />
        <SectionDivider label="— Join Us —" />
        <div className="h-6 md:h-8" />
        <Contact />
      </div>
      
      <Footer />
    </main>
  )
}