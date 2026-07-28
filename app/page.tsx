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
      <SectionDivider label="— The Throne Room —" />
      <Audience />
      <SectionDivider label="— Our Services —" />
      <Services />
      <SectionDivider label="— Our Legacy —" />
      <Portfolio />
      <SectionDivider label="— Join Us —" />
      <Contact />
      <Footer />
    </main>
  )
}