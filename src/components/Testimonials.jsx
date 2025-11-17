import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'Cut our screening time by over 60% while improving confidence in borderline cases.',
    author: 'Dr. Aisha Karim',
    role: 'Head of Pathology, Delta Health'
  },
  {
    quote: 'Intuitive and reliable. The audit trail and confidence scores are a game changer.',
    author: 'Samuel Lee, MPH',
    role: 'Global Health Program Manager'
  },
  {
    quote: 'Seamless integration into our workflow. The live preview helps with clinician trust.',
    author: 'Prof. Elena Novak',
    role: 'Medical Imaging Researcher'
  }
]

const Testimonials = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative bg-[#0E1526] py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-8 bg-gradient-to-br from-white to-sky-200 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">Testimonials & Use Cases</h2>
        <div className="relative min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-sky-100/90 backdrop-blur-xl"
            >
              <p className="text-lg leading-relaxed text-white">“{testimonials[index].quote}”</p>
              <div className="mt-4 text-sm">
                <p className="font-semibold text-white">{testimonials[index].author}</p>
                <p className="text-sky-200/80">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
