"use client"

import { motion } from "framer-motion"

const skills = [
  "C",
  "Python",
  "Java",
  "SQL",
  "REST APIs",
  "TCP/IP",
  "Git",
  "AWS",
]

const certifications = [
  "AWS Solutions Architecture",
  "Deloitte Cyber & Technology",
  "Walmart Advanced Software Engineering",
  "Mastercard Cybersecurity",
]

export function TechStack() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Toolkit
          </p>
          <h2 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Technical Arsenal
          </h2>
        </motion.div>

        {/* Scrolling Marquee */}
        <div className="relative mb-20">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-hidden">
            <div className="animate-marquee flex w-max gap-4">
              {[...skills, ...skills, ...skills, ...skills].map(
                (skill, i) => (
                  <div
                    key={`${skill}-${i}`}
                    className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-card/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="whitespace-nowrap text-sm font-medium text-foreground">
                      {skill}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Certifications
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-xl border border-border bg-card/30 px-5 py-4 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-card/60"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent/60 transition-colors group-hover:bg-accent" />
                  <span className="text-sm font-medium text-secondary-foreground">
                    {cert}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
