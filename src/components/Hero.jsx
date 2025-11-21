import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Background gradient + subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            We design futuristic web experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl"
          >
            From concept to code: immersive sites, blazing-fast apps, and interactive 3D that turns visitors into customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#contact" className="px-5 py-3 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-medium transition shadow-lg shadow-fuchsia-500/20">Start a project</a>
            <a href="#work" className="px-5 py-3 rounded-lg border border-white/15 text-white/90 hover:bg-white/5 transition">See our work</a>
          </motion.div>
        </div>

        {/* Floating stat cards with parallax feel */}
        <div className="relative h-[420px] md:h-[520px]">
          <ParallaxCard className="top-6 left-6" title="98%" subtitle="Client satisfaction" />
          <ParallaxCard className="top-48 right-4" title="3D/AI" subtitle="Next-gen UI" delay={0.15} />
          <ParallaxCard className="bottom-10 left-1/3" title="<1s" subtitle="TTI on landing" delay={0.25} />
        </div>
      </div>

      {/* gradient overlay for contrast (doesn't block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
    </section>
  )
}

function ParallaxCard({ className = '', title, subtitle, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`absolute ${className} w-44 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-white shadow-2xl shadow-fuchsia-500/10`}
    >
      <div className="text-2xl font-bold leading-none">{title}</div>
      <div className="text-xs text-slate-300 mt-1">{subtitle}</div>
    </motion.div>
  )
}
