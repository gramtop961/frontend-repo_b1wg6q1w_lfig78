import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.nav
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
        >
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-sky-500 to-fuchsia-600" />
            <span className="bg-gradient-to-r from-white to-sky-200 bg-clip-text text-lg font-semibold text-transparent">MalariaAI</span>
          </a>
          <div className="hidden items-center gap-6 text-sky-100/90 md:flex">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#demo" className="hover:text-white">Live Demo</a>
            <a href="#research" className="hover:text-white">Research</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a href="#demo" className="rounded-xl bg-gradient-to-br from-sky-500 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">Try Now</a>
        </motion.nav>
      </div>
    </header>
  )
}

export default Navbar
