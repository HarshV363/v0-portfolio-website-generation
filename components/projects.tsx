"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Smart India Hackathon 2025",
    subtitle: "Pre-Finalist",
    tags: ["Prototyping", "Scalability"],
    description:
      "Designed and developed a scalable working prototype for a real-world industry problem under strict timelines.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    color: "oklch(0.65 0.19 250)",
  },
  {
    title: "Email Header Analysis for Phishing Detection",
    subtitle: "ICSFT Submission",
    tags: ["Machine Learning", "Explainable AI"],
    description:
      "Research paper applying explainable AI techniques to detect metadata anomalies in email headers for phishing identification.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
    color: "oklch(0.65 0.17 310)",
  },
  {
    title: "Automated Classroom Monitoring System",
    subtitle: "Real-time Detection",
    tags: ["Real-time ML", "Live Camera Feeds"],
    description:
      "Automated activity detection using live camera feeds and scalable machine learning models for classroom environments.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop",
    color: "oklch(0.65 0.17 160)",
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Application",
    tags: ["Python", "SQL", "REST APIs"],
    description:
      "Built with Python and SQL featuring secure user authentication, catalog management, and RESTful API architecture.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2670&auto=format&fit=crop",
    color: "oklch(0.7 0.16 55)",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className={index % 2 !== 0 ? "md:mt-16" : ""}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 800,
        }}
        className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-sm transition-colors hover:border-accent/30"
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50"
          crossOrigin="anonymous"
        />

        {/* Hover glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${hovered ? "50%" : "50%"} ${hovered ? "50%" : "50%"}, ${project.color} / 0.08, transparent 60%)`,
          }}
        />

        {/* Content overlay */}
        <div className="relative z-10 bg-gradient-to-t from-background via-background/90 to-transparent p-7">
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mb-1 text-xl font-bold text-foreground">
            {project.title}
          </h3>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">
            {project.subtitle}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-4 flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
            View Details <ExternalLink size={12} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-28 lg:px-8"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
