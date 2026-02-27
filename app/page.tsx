import { SmoothScroll } from "@/components/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"
import { Research } from "@/components/research"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Research />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
