import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#06080F] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays - allow pointer events to pass through */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#06080F]/40 via-[#06080F]/20 to-[#06080F]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#06080F] to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-xl"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
          Live AI Demo
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance bg-gradient-to-br from-sky-200 via-white to-fuchsia-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Revolutionize Malaria Diagnosis with AI Precision
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-5 max-w-2xl text-lg text-sky-100/90 md:text-xl"
        >
          Instant analysis of blood smears using deep learning — faster triage, higher confidence, and scalable screening.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#demo" className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-sky-500 to-fuchsia-600 px-6 py-3 text-white shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
            <span className="relative z-10 font-semibold">Try Live Detection</span>
            <span className="absolute inset-0 -translate-x-full bg-white/30 blur-2xl transition group-hover:translate-x-0" />
          </a>
          <a href="#how" className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-xl transition-colors hover:bg-white/20">
            How it works
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
