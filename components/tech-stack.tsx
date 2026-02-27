"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Layers,
  Server,
  Database,
  Wrench,
  Network,
} from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["C", "Python", "Java", "SQL", "HTML"],
  },
  {
    icon: Layers,
    title: "DSA & Engineering",
    skills: [
      "Arrays & Strings",
      "Linked Lists",
      "Stacks & Queues",
      "Trees & Hashing",
      "OOP",
      "Modular Design",
    ],
  },
  {
    icon: Server,
    title: "Backend & Web",
    skills: [
      "REST APIs",
      "Authentication",
      "Authorization",
      "Database Design",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["SQL", "Relational Databases", "Query Optimization"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "AWS"],
  },
  {
    icon: Network,
    title: "Systems & Networking",
    skills: ["TCP/IP", "Client-Server Architecture", "System Security"],
  },
]

const marqueeSkills = [
  "C",
  "Python",
  "Java",
  "SQL",
  "REST APIs",
  "TCP/IP",
  "Git",
  "AWS",
  "OOP",
  "Postman",
  "HTML",
  "GitHub",
]

const certifications = [
  { name: "AWS Solutions Architecture", org: "Amazon Web Services" },
  { name: "Cyber & Technology", org: "Deloitte" },
  { name: "Advanced Software Engineering", org: "Walmart" },
  { name: "Cybersecurity", org: "Mastercard" },
  { name: "Network Fundamentals", org: "Infosys" },
]

export function TechStack() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28 lg:px-8"
    >
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
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
        <div className="relative mb-16">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-hidden">
            <div className="animate-marquee flex w-max gap-4">
              {[...marqueeSkills, ...marqueeSkills, ...marqueeSkills, ...marqueeSkills].map(
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

        {/* Skill Categories Grid */}
        <div className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-card/60"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <category.icon size={18} />
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group rounded-xl border border-border bg-card/30 px-5 py-4 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-card/60"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-accent/60 transition-colors group-hover:bg-accent" />
                  <div>
                    <span className="text-sm font-medium text-secondary-foreground">
                      {cert.name}
                    </span>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {cert.org}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
