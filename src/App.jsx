import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, ExternalLink, Code2, Cpu, Boxes, Rocket } from 'lucide-react'

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`w-full ${className}`}>
      {children}
    </section>
  )
}

const Button = ({ children, variant = 'primary', href, onClick }) => {
  const base = 'inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const styles = {
    primary: 'bg-[#0EA5E9] hover:bg-[#38BDF8] text-black focus:ring-[#38BDF8] focus:ring-offset-transparent',
    ghost: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20',
    outline: 'border border-white/30 text-white hover:bg-white/10',
  }

  const Comp = href ? 'a' : 'button'
  return (
    <Comp href={href} onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </Comp>
  )
}

const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
)

export default function App() {
  const heroRef = useRef(null)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen w-full bg-[#0B0E13] text-white selection:bg-[#38BDF8]/30 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#38BDF8] shadow-[0_0_20px_5px_rgba(56,189,248,0.6)]" />
              <span className="text-sm uppercase tracking-widest text-white/70">Zayn</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-white/80">
              <button onClick={() => scrollTo('about')} className="hover:text-white transition">About</button>
              <button onClick={() => scrollTo('stack')} className="hover:text-white transition">Tech</button>
              <button onClick={() => scrollTo('projects')} className="hover:text-white transition">Projects</button>
              <button onClick={() => scrollTo('contact')} className="hover:text-white transition">Contact</button>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => scrollTo('projects')}>
                View My Work <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </nav>

      {/* HERO SECTION 3D */}
      <Section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24">
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-10 h-80 w-80 rounded-full bg-[#38BDF8]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        {/* Spline 3D scene */}
        <div ref={heroRef} className="absolute inset-0 md:left-1/2 h-full z-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Content overlay */}
        <Container>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight"
              >
                Zayn
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 text-lg sm:text-xl text-white/70"
              >
                Web Developer — React, Next.js, Three.js
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Button onClick={() => scrollTo('projects')}>
                  View My Work <ExternalLink size={16} />
                </Button>
                <Button variant="ghost" onClick={() => scrollTo('contact')}>
                  Contact Me <Mail size={16} />
                </Button>
              </motion.div>

              <div className="mt-8 flex items-center gap-6 text-white/60">
                <span className="inline-flex items-center gap-2 text-sm"><Cpu size={16}/> Performant</span>
                <span className="inline-flex items-center gap-2 text-sm"><Boxes size={16}/> 3D Interactive</span>
                <span className="inline-flex items-center gap-2 text-sm"><Rocket size={16}/> SEO Ready</span>
              </div>
            </div>
            <div className="h-[60vh] md:h-[70vh]" />
          </div>
        </Container>

        <button onClick={() => scrollTo('about')} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition">
          <ChevronDown className="animate-bounce" />
        </button>
      </Section>

      {/* ABOUT ME */}
      <Section id="about" className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
              <p className="text-white/70 leading-relaxed">
                Saya adalah developer front-end yang fokus pada performa, SEO, dan pengembangan web 3D interaktif. Saya membuat pengalaman web modern dengan React, Next.js, dan Three.js.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10">
                  <Github />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10">
                  <Linkedin />
                </a>
                <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10">
                  <Mail />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-72 w-full rounded-2xl bg-gradient-to-br from-[#0EA5E9]/30 to-white/5 border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_40%)] pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-28 w-28 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center">
                    <Code2 className="text-[#38BDF8]" size={44} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* TECH STACK */}
      <Section id="stack" className="py-24 bg-white/5 border-y border-white/10">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Tech Stack</h2>
            <p className="mt-3 text-white/70">Tools yang saya gunakan untuk membangun website yang cepat, modern, dan mudah di-maintain.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'HTML', icon: '📄' },
              { name: 'CSS', icon: '🎨' },
              { name: 'JavaScript', icon: '⚡' },
              { name: 'React.js', icon: '⚛️' },
              { name: 'Next.js', icon: '⏭️' },
              { name: 'Three.js', icon: '🧊' },
              { name: 'R3F', icon: '🌌' },
              { name: 'Tailwind', icon: '🪶' },
              { name: 'Git', icon: '🔧' },
              { name: 'GitHub', icon: '🐙' },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:shadow-[0_10px_40px_rgba(56,189,248,0.15)] transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{t.icon}</span>
                  <span className="font-semibold text-white/90">{t.name}</span>
                </div>
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#38BDF8]/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" className="py-24">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="mt-3 text-white/70">Beberapa karya terpilih dengan fokus pada performa, interaktivitas, dan pengalaman pengguna.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: 'Neon Interface',
                desc: 'Dashboard futuristik dengan animasi halus dan arsitektur komponen yang skalabel.',
                tags: ['React', 'Tailwind', 'Framer Motion'],
                live: '#',
                src: '#',
              },
              {
                title: '3D Product Viewer',
                desc: 'Visualisasi produk real-time dengan interaksi 3D dan lighting sinematik.',
                tags: ['Three.js', 'React Three Fiber'],
                live: '#',
                src: '#',
              },
              {
                title: 'Portfolio Next',
                desc: 'Situs portfolio Next.js dengan SEO kuat dan skor Lighthouse tinggi.',
                tags: ['Next.js', 'SEO', 'Vercel'],
                live: '#',
                src: '#',
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 backdrop-blur-xl hover:shadow-[0_30px_70px_-15px_rgba(56,189,248,0.3)] transition"
              >
                <div className="relative h-48 rounded-xl overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
                  <div className="absolute inset-0 transform group-hover:rotate-1 group-hover:scale-[1.02] transition will-change-transform" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/80">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <a href={p.live} className="text-sm inline-flex items-center gap-1 text-[#38BDF8] hover:underline">Live Demo <ExternalLink size={14} /></a>
                    <a href={p.src} className="text-sm inline-flex items-center gap-1 text-white/70 hover:text-white transition">Source Code <Github size={14} /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="py-24 bg-white/5 border-t border-white/10">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Let’s Work Together</h2>
            <p className="mt-3 text-white/70">Punya ide menarik? Kirim pesan dan mari diskusikan project Anda.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form
                onSubmit={(e) => { e.preventDefault(); alert('Thanks! I will get back to you.'); }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70">Name</label>
                    <input required type="text" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-[#38BDF8]" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">Email</label>
                    <input required type="email" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-[#38BDF8]" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-sm text-white/70">Message</label>
                  <textarea required rows={5} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#38BDF8]" placeholder="Tell me about your project..." />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-white/70">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition"><Github size={18}/> GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition"><Linkedin size={18}/> LinkedIn</a>
                    <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:text-white transition"><Mail size={18}/> Email</a>
                  </div>
                  <Button>
                    Send Message <ArrowRight size={16} />
                  </Button>
                </div>
              </form>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <h4 className="font-semibold">Availability</h4>
                <p className="mt-1 text-sm text-white/70">Open for freelance and remote opportunities.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <h4 className="font-semibold">Based In</h4>
                <p className="mt-1 text-sm text-white/70">Remote — GMT+7</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="py-10 text-center text-white/50">
        <Container>
          <p className="text-sm">© {new Date().getFullYear()} Zayn — Built with React, Tailwind, and a touch of 3D.</p>
        </Container>
      </footer>
    </div>
  )
}
