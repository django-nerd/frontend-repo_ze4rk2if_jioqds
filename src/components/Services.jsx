import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Palette, Layers3, Cpu, Move3D, Rows3 } from 'lucide-react'

const items = [
  { icon: Palette, title: 'Brand & UI', desc: 'Design systems, style guides, and high-converting interfaces.' },
  { icon: Code2, title: 'Web & Apps', desc: 'React, Next.js, and PWAs engineered for speed and SEO.' },
  { icon: Move3D, title: '3D & Motion', desc: 'Spline, WebGL and motion design for immersive storytelling.' },
  { icon: Cpu, title: 'AI Integrations', desc: 'Chatbots, personalization, and automation that drive ROI.' },
  { icon: Layers3, title: 'Headless CMS', desc: 'Sanity, Contentful, and custom backends you control.' },
  { icon: Rows3, title: 'E-commerce', desc: 'Headless commerce with smooth checkout and analytics.' },
]

export default function Services() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8])

  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_20%,rgba(217,70,239,0.12),transparent),radial-gradient(400px_200px_at_10%_80%,rgba(59,130,246,0.15),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2 style={{ rotate }} className="text-3xl md:text-5xl font-bold text-white">
          Services for ambitious brands
        </motion.h2>
        <p className="mt-4 text-slate-300 max-w-2xl">
          We blend strategy, design, and engineering to build products that feel effortless and look unforgettable.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-xl hover:from-white/10 hover:to-white/5 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-fuchsia-400 mb-4">
                <it.icon className="w-6 h-6" />
              </div>
              <div className="text-white font-semibold text-lg">{it.title}</div>
              <div className="text-slate-300 text-sm mt-1">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
