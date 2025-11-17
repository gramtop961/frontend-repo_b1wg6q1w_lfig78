import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!name || !email || !message) return
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setName(''); setEmail(''); setMessage('')
  }

  return (
    <section id="contact" className="relative bg-[#0A0F1A] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="bg-gradient-to-br from-white to-sky-200 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">Get in Touch</h2>
          <p className="mt-3 text-sky-100/80">Request a demo, research partnership, or integration details.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6 text-sky-100/90 backdrop-blur-xl ring-1 ring-white/10">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-sky-100">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-sky-400/50" required />
              </div>
              <div>
                <label className="mb-1 block text-sm text-sky-100">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-sky-400/50" required />
              </div>
              <div>
                <label className="mb-1 block text-sm text-sky-100">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-sky-400/50" required />
              </div>
              <button className="w-full rounded-lg bg-gradient-to-br from-sky-500 to-fuchsia-600 px-5 py-2 font-semibold text-white shadow-lg transition-transform hover:scale-[1.01]">Send</button>
            </form>
            {sent && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-emerald-300">Thanks! We’ll be in touch shortly.</motion.p>
            )}
          </div>

          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/10">
            <h3 className="text-lg font-semibold text-white">Why MalariaAI?</h3>
            <ul className="mt-4 space-y-3 text-sky-100/80">
              <li>• Clinical-grade predictions with calibrated confidence.</li>
              <li>• Secure by design, privacy-first data handling.</li>
              <li>• API-first platform for seamless integrations.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
