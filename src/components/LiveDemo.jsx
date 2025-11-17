import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, Loader2, ShieldAlert, CheckCircle2 } from 'lucide-react'

const LiveDemo = () => {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleFile = (f) => {
    setError('')
    setResult(null)
    if (!f) return
    setFile(f)
    const reader = new FileReader()
    reader.onload = (e) => setPreview(e.target.result)
    reader.readAsDataURL(f)
  }

  const onDrop = (e) => {
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    handleFile(f)
  }

  const onUpload = async () => {
    if (!file) return
    setLoading(true)
    setError('')
    try {
      const form = new FormData()
      form.append('image', file)
      const res = await fetch(`${backend}/predict`, { method: 'POST', body: form })
      if (!res.ok) throw new Error((await res.json()).detail || 'Prediction failed')
      const data = await res.json()
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="demo" className="relative bg-[#0C1220] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="bg-gradient-to-br from-white to-sky-200 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">Live Detection Demo</h2>
          <p className="mt-3 text-sky-100/80">Upload a blood smear image to see a real-time AI prediction.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            className="group relative flex min-h-[320px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-colors hover:bg-white/10"
          >
            {!preview ? (
              <div className="flex flex-col items-center">
                <div className="rounded-xl bg-gradient-to-br from-sky-500/30 to-fuchsia-500/30 p-3 ring-1 ring-white/10">
                  <Upload className="h-7 w-7 text-white" />
                </div>
                <p className="mt-4 text-white">Drag & drop an image here, or</p>
                <label className="mt-2 inline-block cursor-pointer rounded-lg bg-gradient-to-br from-sky-500 to-fuchsia-600 px-4 py-2 text-white shadow-lg">
                  Browse
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
                </label>
                <p className="mt-2 text-xs text-sky-100/70">PNG, JPG, or WEBP</p>
              </div>
            ) : (
              <div className="relative w-full">
                <img src={preview} alt="preview" className="mx-auto max-h-[360px] rounded-xl object-contain" />
                <div className="mt-4 flex justify-center gap-3">
                  <button onClick={() => setPreview(null)} className="rounded-lg border border-white/15 px-4 py-2 text-white/90 hover:bg-white/10">Remove</button>
                  <button onClick={onUpload} className="rounded-lg bg-gradient-to-br from-sky-500 to-fuchsia-600 px-5 py-2 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]">
                    {loading ? (
                      <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Analyzing...</span>
                    ) : (
                      'Analyze Image'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/10">
            <h3 className="text-lg font-semibold text-white">Prediction</h3>
            <p className="mb-4 text-sky-100/80">Results appear here with confidence and processing time.</p>

            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-3 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-red-100"
                  >
                    <ShieldAlert className="h-5 w-5" />
                    <span>{error}</span>
                  </motion.div>
                )}

                {!error && result && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className={`h-6 w-6 ${result.label.includes('No') ? 'text-emerald-400' : 'text-fuchsia-400'}`} />
                      <p className="text-xl font-semibold text-white">{result.label}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sky-100/90">
                      <div className="rounded-lg bg-white/5 p-3">Confidence: <span className="font-semibold text-white">{(result.confidence * 100).toFixed(1)}%</span></div>
                      <div className="rounded-lg bg-white/5 p-3">Latency: <span className="font-semibold text-white">{result.processing_ms} ms</span></div>
                      <div className="rounded-lg bg-white/5 p-3">Model: <span className="font-semibold text-white">{result.model}</span></div>
                      <div className="rounded-lg bg-white/5 p-3">Size: <span className="font-semibold text-white">{(result.file_size/1024).toFixed(1)} KB</span></div>
                    </div>
                  </motion.div>
                )}

                {!error && !result && (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-sky-100/70"
                  >
                    Awaiting image...
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveDemo
