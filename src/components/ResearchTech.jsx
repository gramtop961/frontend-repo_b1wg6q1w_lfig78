import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, BarChart3, Layers } from 'lucide-react'

const Card = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: index * 0.06 }}
    viewport={{ once: true, amount: 0.2 }}
    className="rounded-2xl bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/10 hover:bg-white/10 transition-colors"
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

const ResearchTech = () => {
  const items = [
    { icon: Layers, title: 'VGG16 Backbone', desc: 'Pretrained convolutional feature extractor fine-tuned on malaria datasets for robust cell morphology detection.' },
    { icon: BrainCircuit, title: 'CNN Pipeline', desc: 'Custom heads for classification with regularization, augmentations, and calibrated probabilities.' },
    { icon: BarChart3, title: 'Accuracy', desc: 'Validated on public benchmarks and clinical data; target >95% AUC with calibrated thresholds.' }
  ]
  return (
    <section className="relative bg-[#0E1526] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="bg-gradient-to-br from-white to-sky-200 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">Research & Technology</h2>
          <p className="mt-3 text-sky-100/80">Deep learning you can trust, explained clearly.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((c, i) => (
            <Card key={c.title} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResearchTech
