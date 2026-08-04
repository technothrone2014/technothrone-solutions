export default function TrustedBy() {
  return (
    <section className="py-12 border-t border-b border-gold-500/20 bg-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-gold-400/70 text-sm uppercase tracking-wider mb-6 font-space">
          Trusted by Government Agencies & Enterprises
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-2xl font-bold text-royal-gold/70 font-playfair">KRA</div>
          <div className="text-2xl font-bold text-royal-gold/70 font-playfair">KPA</div>
          <div className="text-xl font-bold text-gold-warm/60 font-space">Enterprise Fintech</div>
          <div className="text-xl font-bold text-gold-warm/60 font-space">Agritech Platforms</div>
        </div>
        <p className="text-center text-gold-muted/50 text-xs mt-6 font-inter">
          * Production systems serving millions of users
        </p>
      </div>
    </section>
  )
}