import { motion } from 'framer-motion'
import { Sparkles, PenTool, Code2, Rocket } from 'lucide-react'

const steps = [
  { icon: Sparkles, title: 'Discover', desc: 'Workshops to shape goals, audience and success metrics.' },
  { icon: PenTool, title: 'Design', desc: 'Rapid prototyping, brand direction and pixel-perfect UI.' },
  { icon: Code2, title: 'Build', desc: 'Modern stacks, CI/CD and accessibility-first development.' },
  { icon: Rocket, title: 'Launch', desc: 'Optimization, analytics and ongoing iteration for growth.' }
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          How we work
        </motion.h2>
        <p className="mt-4 text-slate-300 max-w-2xl">A transparent, collaborative process that keeps momentum high and outcomes measurable.</p>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-fuchsia-400 mb-4">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="font-semibold">{s.title}</div>
              <div className="text-sm text-slate-300 mt-1">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
