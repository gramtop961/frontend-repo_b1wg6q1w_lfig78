import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Image as ImageIcon, Scan, ShieldCheck } from 'lucide-react'

const Step = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    viewport={{ once: true, amount: 0.3 }}
    className="group rounded-2xl bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/10 hover:bg-white/10 transition-colors"
  >
    <div className="mb-4 flex items-center gap-3">
      <div className="rounded-xl bg-gradient-to-br from-sky-500/30 to-fuchsia-500/30 p-2 ring-1 ring-white/10">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="text-sky-100/80">{desc}</p>
  </motion.div>
)

const HowItWorks = () => {
  const steps = [
    { icon: ImageIcon, title: 'Input Image', desc: 'Upload a microscope blood smear image directly from your device or camera.' },
    { icon: Scan, title: 'Preprocessing', desc: 'Automatic normalization and artifact removal for consistent model inputs.' },
    { icon: Cpu, title: 'Deep Learning', desc: 'CNN with VGG16 backbone evaluates infected vs. healthy cells in milliseconds.' },
    { icon: ShieldCheck, title: 'Results', desc: 'Clear prediction with confidence score and optional heatmap visualization.' }
  ]

  return (
    <section id="how" className="relative bg-[#0A0F1A] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="bg-gradient-to-br from-white to-sky-200 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">How It Works</h2>
          <p className="mt-3 text-sky-100/80">A streamlined pipeline from raw images to actionable insights.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Step key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
