"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUpRight, Loader2 } from "lucide-react"

type Status = "idle" | "submitting" | "success" | "error"

export function Footer() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(
          data.debug ? `${data.error} (${data.debug})` : data.error || "Something went wrong."
        )
      }

      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      setStatus("error")
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      )
    }
  }

  return (
    <footer id="contact" className="relative border-t border-border px-6 py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
            {"Let's build"}
            <br />
            something great<span className="text-accent">.</span>
          </h2>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Currently seeking SDE Intern or entry-level roles. Always open to
            collaborating on interesting projects and research.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-20 rounded-2xl border border-border bg-card/30 p-8 backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-accent focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-accent focus:outline-none"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-accent focus:outline-none"
              />
            </div>
            <div className="md:col-span-2 flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_oklch(0.95_0_0/0.15)] disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === "submitting" ? (
                  <>
                    Sending
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-sm text-accent">Thanks — your message is in!</p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">{errorMessage}</p>
              )}
            </div>
          </form>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
          <div className="flex items-center gap-6">
            <a href="mailto:harshverma362004@gmail.com" className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Mail size={16} />
              <span>harshverma362004@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://linkedin.com/in/harsh-verma-552161334" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/30 text-muted-foreground transition-all hover:border-accent/40 hover:bg-card/60 hover:text-foreground">
              <Linkedin size={16} />
            </a>
            <a href="#" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/30 text-muted-foreground transition-all hover:border-accent/40 hover:bg-card/60 hover:text-foreground">
              <Github size={16} />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          {"Harsh Verma 2026. Crafted with precision."}
        </p>
      </div>
    </footer>
  )
}
