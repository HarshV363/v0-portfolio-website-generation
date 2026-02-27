"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

const timeline = [
  {
    type: "work" as const,
    title: "Freelance Intern",
    org: "Bengaluru, India",
    date: "Present",
    bullets: [
      "Supported software development initiatives through technical documentation, data analysis, and requirement analysis.",
      "Assisted in backend logic planning and API-level design for ongoing projects.",
      "Collaborated with team members to improve development workflows and delivery efficiency.",
    ],
  },
  {
    type: "education" as const,
    title: "B.Tech in Computer Science",
    org: "Dayananda Sagar University, Bengaluru",
    date: "Jul 2023 - Aug 2027 (Expected)",
    bullets: [
      "Core focus on data structures, algorithms, and object-oriented programming.",
      "Hands-on coursework in full-stack development, database design, and systems networking.",
      "Active participant in hackathons and applied research projects.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 lg:px-8">
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
                      i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
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
                  <p className="mb-4 text-sm text-muted-foreground">
                    {item.org}
                  </p>
                  <ul
                    className={`space-y-2 ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {item.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
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
