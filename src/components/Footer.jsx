import React from 'react'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#06080F] py-12 text-sky-100/80">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_120%,rgba(56,189,248,0.25)_0%,rgba(217,70,239,0.15)_42%,transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} MalariaAI. All rights reserved.</p>
          <a href="#demo" className="rounded-xl bg-gradient-to-br from-sky-500 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">Start Free Trial</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
