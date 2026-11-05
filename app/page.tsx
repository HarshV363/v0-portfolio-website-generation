"use client"

import { useState } from "react"
import { ArrowUpRight, Check, Download, Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { portfolio } from "@/data"

const nav = [["About", "about"], ["Experience", "experience"], ["Work", "projects"], ["Research", "research"], ["Contact", "contact"]]

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="mb-12"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2></div>
}

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="project-frame"><div className="frame-bar"><span className="dots"><i /><i /><i /></span><span>{label}</span><span>↗</span></div><div className="frame-content">{children}</div></div>
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <main className="site-shell">
    <div className="progress" />
    <nav className="nav-pill" aria-label="Primary navigation">
      <a className="brand" href="#top">HV<span>.</span></a>
      <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</div>
      <a className="nav-cta" href={`mailto:${portfolio.email}`}>Let&apos;s talk <ArrowUpRight size={14} /></a>
      <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </nav>

    <section id="top" className="hero section-pad">
      <motion.div className="hero-orb orb-one" animate={{ x: [-12, 18, -12], y: [8, -16, 8], scale: [1, 1.08, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} /><motion.div className="hero-orb orb-two" animate={{ x: [12, -18, 12], y: [-6, 14, -6], scale: [1, 1.06, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
      <div className="hero-copy">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="status"><span /> Open to internships</motion.div>
        <motion.h1 initial={{ opacity: 1, y: 0, scale: 1 }} animate={{ y: [0, -4, 0], scale: [1, 1.025, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.05 }}><span>Build with</span><br /><em>intent.</em></motion.h1>
        <motion.p className="hero-summary" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .28, duration: .65 }} whileHover={{ x: 8 }}>{portfolio.summary}</motion.p>
        <div className="hero-actions"><a className="button primary" href="#projects">View work <ArrowUpRight size={16} /></a><a className="button ghost" href="/resume.pdf"><Download size={15} /> Download resume</a></div>
        <div className="hero-meta"><span>{portfolio.location}</span><span>AI/ML · Full-Stack · BD</span></div>
      </div>
      <div className="avatar-stage" aria-label="Illustrated avatar placeholder"><div className="avatar-ring"><div className="avatar-placeholder"><span>HV</span></div></div><div className="speech">Hi, I&apos;m Harsh <span>↗</span></div><div className="tech-badge badge-python">Python</div><div className="tech-badge badge-ml">ML / AI</div><div className="tech-badge badge-react">React</div></div>
    </section>

    <section className="stats-strip"><div><strong>96.2%</strong><span>model accuracy</span></div><div><strong>0.98</strong><span>AUC score</span></div><div><strong>10K+</strong><span>tech community</span></div><div><strong>20+</strong><span>corporate targets</span></div></section>

    <section id="about" className="section-pad content-section"><SectionTitle eyebrow="01 / About" title="A multidisciplinary builder." /><div className="about-grid"><div className="about-lead"><p>I&apos;m a Computer Science undergraduate at <strong>Dayananda Sagar University</strong>, graduating in 2027. I work across machine learning, full-stack development and the business systems that bring products to people.</p><p>My work moves between rigorous model evaluation, thoughtful interfaces and the conversations that turn ideas into partnerships.</p></div><div className="about-card"><span className="card-index">01</span><p>Currently studying</p><strong>B.Tech, Computer Science<br />&amp; Engineering</strong><small>Jul 2023 – Jun 2027 (Expected)</small></div><div className="about-card accent-card"><span className="card-index">02</span><p>Based in</p><strong>Bengaluru<br />India</strong><small>Available for internships</small></div></div></section>

    <section id="experience" className="section-pad content-section"><SectionTitle eyebrow="02 / Experience" title="Where I&apos;ve made moves." /><div className="timeline">{portfolio.experience.map((item, i) => <motion.article initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} key={item.company} className="timeline-item"><div className="timeline-marker">0{i + 1}</div><div className="timeline-main"><div className="timeline-head"><div><h3>{item.role}</h3><p>{item.company}</p></div><time>{item.date}</time></div><ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul></div></motion.article>)}</div></section>

    <section id="projects" className="section-pad content-section"><SectionTitle eyebrow="03 / Selected work" title="Things I&apos;ve built." /><div className="project-grid">{portfolio.projects.map((project, i) => <motion.article initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} whileHover={{ y: -10, scale: 1.02 }} key={project.title} className="project-card"><Frame label={project.title}><div className={`mock-ui mock-${i}`}><div className="mock-line long" /><div className="mock-line short" /><div className="mock-blocks"><span /><span /><span /></div><div className="mock-footer" /></div></Frame><div className="project-info"><span>{project.meta}</span><h3>{project.title}</h3><p>{project.description}</p></div></motion.article>)}</div></section>

    <section id="research" className="section-pad content-section research-section"><SectionTitle eyebrow="04 / Research" title="Curiosity, tested." /><div className="research-grid">{portfolio.research.map((item, i) => <article key={item.title} className={`research-card research-${i}`}><div className="research-number">0{i + 1}</div><div><span className="research-meta">{item.meta}</span><h3>{item.title}</h3><p>{item.description}</p></div><strong>{item.stat}</strong></article>)}</div></section>

    <section className="section-pad content-section skills-section"><SectionTitle eyebrow="05 / Toolkit" title="The stack behind the work." /><div className="skills-grid">{Object.entries(portfolio.skills).map(([group, skills]) => <div key={group}><h3>{group}</h3><div className="skill-chips">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>

    <section className="section-pad content-section credentials"><div><p className="eyebrow">06 / Proof points</p><h2 className="section-title">More signals.</h2></div><div className="credential-list"><div className="credential-row"><span>Achievement</span><strong>Smart India Hackathon 2025 Pre-Finalist</strong><p>Built a working prototype for a real-world industry problem.</p></div><div className="credential-row"><span>Certifications</span><div className="cert-list">{portfolio.certifications.map(c => <span key={c}><Check size={14} />{c}</span>)}</div></div></div></section>

    <section id="contact" className="contact-section"><div className="contact-glow" /><p className="eyebrow">07 / Contact</p><h2>Have a problem<br /><em>worth solving?</em></h2><p>I&apos;m looking for internship and entry-level roles in AI/ML, software engineering, data or technology business development.</p><div className="contact-actions"><a className="button primary" href={`mailto:${portfolio.email}`}>Start a conversation <Mail size={16} /></a><a className="button ghost" href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a className="button ghost" href={portfolio.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a></div><div className="contact-email">{portfolio.email}</div></section>
    <footer><span>HV<span className="accent">.</span></span><span>© 2026 Harsh Verma</span><span>{portfolio.location}</span></footer>
  </main>
}
