"use client"

import { ArrowLeft, ArrowUpRight, Download, Mail, MapPin } from "lucide-react"
import { portfolio } from "@/data"

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-nav">
        <a className="brand" href="/">HV<span>.</span></a>
        <a className="resume-back" href="/">Portfolio <ArrowUpRight size={15} /></a>
      </header>

      <section className="resume-hero">
        <div className="resume-kicker">Curriculum vitae / 2026</div>
        <h1>Resume<span>.</span></h1>
        <p className="resume-intro">A concise view of the work, research and relationships behind my next chapter.</p>
        <div className="resume-actions">
          <a className="button primary" href="/Harsh_Verma_Resume_Enhanced.docx" download>Download resume <Download size={16} /></a>
          <a className="button ghost" href="/">Open designed portfolio <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="resume-sheet" aria-label="Resume overview">
        <div className="resume-sheet-top">
          <div>
            <p className="eyebrow">Harsh Verma</p>
            <h2>AI/ML · Full-Stack · Business Development</h2>
          </div>
          <div className="resume-contact"><span><MapPin size={14} /> {portfolio.location}</span><a href={`mailto:${portfolio.email}`}><Mail size={14} /> {portfolio.email}</a></div>
        </div>

        <div className="resume-columns">
          <div>
            <p className="resume-label">Profile</p>
            <p className="resume-copy">{portfolio.summary}</p>
            <p className="resume-label resume-label-spaced">Experience</p>
            <div className="resume-list">{portfolio.experience.map((item) => <article key={item.company}><div className="resume-list-heading"><h3>{item.role}</h3><time>{item.date}</time></div><p>{item.company}</p><ul>{item.bullets.slice(0, 2).map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div>
          </div>
          <aside>
            <p className="resume-label">Education</p>
            <h3>B.Tech, Computer Science &amp; Engineering</h3><p>Dayananda Sagar University</p><small>2023 — 2027 (Expected)</small>
            <p className="resume-label resume-label-spaced">Focus</p>
            <div className="resume-focus">{Object.values(portfolio.skills).flat().slice(0, 9).map((skill) => <span key={skill}>{skill}</span>)}</div>
            <p className="resume-label resume-label-spaced">Explore next</p>
            <a className="resume-explore" href="/">See selected work <ArrowUpRight size={15} /></a>
          </aside>
        </div>
      </section>

      <footer className="resume-footer"><a href="/"><ArrowLeft size={15} /> Back to portfolio</a><span>© 2026 Harsh Verma</span></footer>
    </main>
  )
}
