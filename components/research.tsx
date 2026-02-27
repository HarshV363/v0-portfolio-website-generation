"use client"

import { motion } from "framer-motion"
import { FileText, Brain, Shield } from "lucide-react"

export function Research() {
  return (
    <section id="research" className="relative px-6 py-28 lg:px-8">
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Research
          </p>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Academic Research
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="group rounded-2xl border border-border bg-card/30 p-8 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-card/60"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
            {/* Icon block */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
              <FileText size={24} />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="mb-1 text-xl font-bold text-foreground">
                  Email Header Analysis for Phishing Detection
                </h3>
                <p className="text-sm text-accent">
                  International Conference on Smart Futuristic Technology (ICSFT)
                </p>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground">
                Applied machine learning and explainable AI (XAI) techniques to
                detect anomalies in email metadata. The research focuses on
                analyzing header fields to identify phishing attempts, providing
                transparent and interpretable model decisions for cybersecurity
                applications.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium text-secondary-foreground">
                  <Brain size={14} className="text-accent" />
                  Machine Learning
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium text-secondary-foreground">
                  <Shield size={14} className="text-accent" />
                  Cybersecurity
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium text-secondary-foreground">
                  <FileText size={14} className="text-accent" />
                  Explainable AI
                </div>
              </div>

              <p className="text-xs italic text-muted-foreground">
                Research paper submitted to ICSFT
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
