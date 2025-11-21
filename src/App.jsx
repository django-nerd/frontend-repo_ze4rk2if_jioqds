import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Process />
      <Contact />

      <footer id="about" className="border-t border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="text-lg font-semibold">Aurexis Solution</div>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              We craft bold digital experiences for teams who want to move faster. Parallax, 3D, and interactions included.
            </p>
          </div>
          <div className="md:text-right text-slate-400 text-sm">© {new Date().getFullYear()} Aurexis Solution. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
