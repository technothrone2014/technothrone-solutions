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
      
      {/* Visual separator */}
      <SectionSeparator />
      
      <SectionDivider label="— The Throne Room —" />
      
      {/* Visual spacer */}
      <div className="h-8 md:h-12" />
      
      <Audience />
      
      {/* Visual separator */}
      <SectionSeparator />
      
      <SectionDivider label="— Our Services —" />
      
      {/* Visual spacer */}
      <div className="h-8 md:h-12" />
      
      <Services />
      
      {/* Visual separator */}
      <SectionSeparator />
      
      <SectionDivider label="— Our Legacy —" />
      
      {/* Visual spacer */}
      <div className="h-8 md:h-12" />
      
      <Portfolio />
      
      {/* Visual separator */}
      <SectionSeparator />
      
      <SectionDivider label="— Join Us —" />
      
      {/* Visual spacer */}
      <div className="h-8 md:h-12" />
      
      <Contact />
      <Footer />
    </main>
  )
}