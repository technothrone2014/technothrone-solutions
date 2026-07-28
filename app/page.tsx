import Hero from '@/components/Hero'
import Audience from '@/components/Audience'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <Hero />
      
      {/* Visual spacer */}
      <div className="h-16 md:h-24" />
      
      <SectionDivider label="— The Throne Room —" />
      
      {/* Visual spacer */}
      <div className="h-8 md:h-12" />
      
      <Audience />
      
      {/* Visual spacer */}
      <div className="h-16 md:h-24" />
      
      <SectionDivider label="— Our Services —" />
      
      {/* Visual spacer */}
      <div className="h-8 md:h-12" />
      
      <Services />
      
      {/* Visual spacer */}
      <div className="h-16 md:h-24" />
      
      <SectionDivider label="— Our Legacy —" />
      
      {/* Visual spacer */}
      <div className="h-8 md:h-12" />
      
      <Portfolio />
      
      {/* Visual spacer */}
      <div className="h-16 md:h-24" />
      
      <SectionDivider label="— Join Us —" />
      
      {/* Visual spacer */}
      <div className="h-8 md:h-12" />
      
      <Contact />
      <Footer />
    </main>
  )
}