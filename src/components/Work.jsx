import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Cybernetic SaaS',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    tags: ['Brand', 'Web', '3D']
  },
  {
    title: 'AI Retail Assistant',
    img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1400&auto=format&fit=crop',
    tags: ['Product', 'AI', 'E‑commerce']
  },
  {
    title: 'Fintech Reimagined',
    img: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1400&auto=format&fit=crop',
    tags: ['Design', 'Web']
  }
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Selected work
        </motion.h2>
        <p className="mt-4 text-slate-300 max-w-2xl">A snapshot of projects where strategy, aesthetics and performance align.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <img src={p.img} alt="" className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white font-semibold">{p.title}</div>
                <div className="text-xs text-slate-300 mt-1">{p.tags.join(' • ')}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
