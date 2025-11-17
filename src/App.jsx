import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import LiveDemo from './components/LiveDemo'
import ResearchTech from './components/ResearchTech'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#06080F]">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <LiveDemo />
        <section id="research"><ResearchTech /></section>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
