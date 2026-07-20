import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import TrustedBy from '../components/TrustedBy'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <Hero />
      <TrustedBy />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}