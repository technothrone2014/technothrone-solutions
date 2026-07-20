export default function TrustedBy() {
  return (
    <section className="py-12 border-t border-b border-white/5 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-gray-400 text-sm uppercase tracking-wider mb-6">
          Trusted by Government Agencies & Enterprises
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-2xl font-bold text-emerald-400/70">KRA</div>
          <div className="text-2xl font-bold text-cyan-400/70">KPA</div>
          <div className="text-xl font-bold text-gray-400/70">Enterprise Fintech</div>
          <div className="text-xl font-bold text-gray-400/70">Agritech Platforms</div>
        </div>
        <p className="text-center text-gray-500 text-xs mt-6">
          * Production systems serving millions of users
        </p>
      </div>
    </section>
  )
}