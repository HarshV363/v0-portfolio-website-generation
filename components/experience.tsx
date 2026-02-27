"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

const timeline = [
  {
    type: "work" as const,
    title: "Freelance Intern",
    org: "Bengaluru, India",
    date: "Present",
    description:
      "Backend logic planning and API-level design for ongoing projects, improving development workflows and system architecture.",
  },
  {
    type: "education" as const,
    title: "B.Tech Computer Science",
    org: "Dayananda Sagar University",
    date: "2023 - 2027",
    description:
      "Focusing on data structures, full-stack development, and applied machine learning research.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Journey
          </p>
          <h2 className="mb-16 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Experience & Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical glowing line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent via-accent/40 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-16">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col gap-4 pl-12 md:flex-row md:items-start md:gap-12 md:pl-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-2 top-1 flex h-5 w-5 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <div className="h-3 w-3 rounded-full bg-accent animate-glow-pulse" />
                </div>

                {/* Card */}
                <div
                  className={`flex-1 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-card/80 ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`mb-3 flex items-center gap-2 ${
                      i % 2 === 0
                        ? "md:flex-row-reverse"
                        : "md:flex-row"
                    }`}
                  >
                    {item.type === "work" ? (
                      <Briefcase size={16} className="text-accent" />
                    ) : (
                      <GraduationCap size={16} className="text-accent" />
                    )}
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {item.org}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
