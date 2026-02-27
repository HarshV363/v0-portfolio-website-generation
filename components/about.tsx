"use client"

import { motion } from "framer-motion"
import { MapPin, Code2, GraduationCap, Target } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    label: "Full-Stack Dev",
    detail: "Python, Java, SQL, REST APIs",
  },
  {
    icon: GraduationCap,
    label: "B.Tech CS",
    detail: "Dayananda Sagar University",
  },
  {
    icon: MapPin,
    label: "Bengaluru",
    detail: "India",
  },
  {
    icon: Target,
    label: "Seeking",
    detail: "SDE Intern / Entry-Level SDE",
  },
]

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 lg:px-8">
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
            About
          </p>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Summary text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-base leading-relaxed text-muted-foreground">
              I am a pre-final year Computer Science undergraduate with strong
              proficiency in data structures, algorithms, and object-oriented
              programming. I have hands-on experience in full-stack development,
              backend systems, REST APIs, and database design.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I have demonstrated my ability to build scalable software solutions
              through hackathons, projects, and applied research -- including a
              research paper on phishing detection submitted to the International
              Conference on Smart Futuristic Technology (ICSFT).
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              My goal is to join a product-based company as a Software
              Development Engineer Intern where I can contribute to building
              impactful, production-grade systems while continuing to grow as an
              engineer.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card/30 px-5 py-4 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-card/60"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
