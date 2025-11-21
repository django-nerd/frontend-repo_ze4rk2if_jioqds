import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 md:p-12 backdrop-blur-xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Let’s build something extraordinary</h2>
              <p className="mt-4 text-slate-300 max-w-xl">Tell us about your project goals, timelines and any inspiration. We’ll reply within 24 hours.</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4">
              <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400" placeholder="Your name" />
              <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400" placeholder="Email" type="email" />
              <textarea rows="4" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400" placeholder="Project details"></textarea>
              <button className="mt-2 px-5 py-3 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-medium transition">Send message</button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
