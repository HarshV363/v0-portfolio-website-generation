"use client"

import { ArrowRight, Download } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 lg:px-8">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-15"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
      </div>

      {/* Decorative grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.95 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.95 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-glow-pulse" />
            <span className="text-xs text-muted-foreground">
              Open to SDE Intern roles
            </span>
          </motion.div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-8xl text-balance">
            Harsh
            <br />
            Verma<span className="text-accent">.</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Pre-final year Computer Science undergraduate specializing in
            backend systems, ML, and scalable architecture.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_oklch(0.95_0_0/0.15)]"
            >
              Explore Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-secondary/70"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden flex-col items-center gap-2 md:flex"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
