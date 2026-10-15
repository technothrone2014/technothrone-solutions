import Hero from '@/components/Hero'
import Audience from '@/components/Audience'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import TrustBadges from '@/components/TrustBadges'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBadges />
      <Portfolio />
      <Services />
      <Audience />
      <Contact />
      <Footer />
    </main>
  )
}
