import { Server, Database, Brain, Shield } from 'lucide-react'

const services = [
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Full-Stack Development',
    desc: 'Next.js, Node.js, TypeScript, Python — production-grade systems that scale.'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data Engineering',
    desc: 'Complex SQL, ETL pipelines, migration, and validation automation for government agencies.'
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI Integration',
    desc: 'Custom chatbots, NLP, intelligent reporting, and AI-powered dashboards.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Legacy Migration',
    desc: 'Zero-downtime migration from outdated systems to modern, scalable architectures.'
  }
]

export default function Services() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What I Deliver</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition hover:border-emerald-500/30">
              <div className="text-emerald-400 mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}