import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Aurora background orbs */}
      <div className="aurora-orb aurora-1" aria-hidden="true" />
      <div className="aurora-orb aurora-2" aria-hidden="true" />
      <div className="aurora-orb aurora-3" aria-hidden="true" />
      {/* Noise grain */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
