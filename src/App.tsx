import { useRef, useEffect, useState } from 'react'
import { ProjectSection } from './components/ProjectSection'

interface Project {
  id: number
  title: string
  description: string
  services: string[]
  year: string
  image: string
  link?: string
}

function App() {
  const [heroOpacity, setHeroOpacity] = useState(1)
  const contactRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    if (contactRef.current && scrollContainerRef.current) {
      const containerRect = scrollContainerRef.current.getBoundingClientRect()
      const contactRect = contactRef.current.getBoundingClientRect()
      const currentScroll = scrollContainerRef.current.scrollTop
      const targetScroll = currentScroll + (contactRect.top - containerRect.top)

      scrollContainerRef.current.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement
      const scrollY = target.scrollTop
      const windowHeight = window.innerHeight
      // Fade out between 30% and 60% of screen height
      const fadeStart = windowHeight * 0.15
      const fadeEnd = windowHeight * 0.85
      const fadeRange = fadeEnd - fadeStart

      if (scrollY < fadeStart) {
        setHeroOpacity(1)
      } else if (scrollY > fadeEnd) {
        setHeroOpacity(0)
      } else {
        const progress = (scrollY - fadeStart) / fadeRange
        // Ease-out cubic easing for smooth fade
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        const opacity = 1 - easedProgress
        setHeroOpacity(opacity)
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const projects: Project[] = [
    {
      id: 1,
      title: "Dr. Garving",
      description: "Aesthetic medicine branding and web design project featuring elegant color palette and modern design.",
      services: ["Branding", "Web Design", "Development"],
      year: "2024",
      image: "/src/assets/garvingcase.png",
      link: "#"
    },
    {
      id: 2,
      title: "GUMO bei Wort.Vibe",
      description: "Mobile app design for local business discovery platform with vibrant UI and intuitive navigation.",
      services: ["Branding", "Web Design", "Development"],
      year: "2024",
      image: "/src/assets/mood 1.jpg",
      link: "#"
    }
  ]

  return (
    <div ref={scrollContainerRef} className="relative bg-background text-foreground snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Header - Only visible in hero */}
      <header
        className="fixed top-0 left-0 right-0 p-8 flex items-center justify-between z-50 transition-opacity duration-100"
        style={{ opacity: heroOpacity, pointerEvents: heroOpacity > 0 ? 'auto' : 'none' }}
      >
        <button
          onClick={scrollToContact}
          className="text-sm hover:text-gray-300 transition-colors cursor-pointer"
        >
          Get in touch
        </button>
      </header>

      {/* Hero Section - Fixed background layer */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 min-h-screen overflow-hidden transition-opacity duration-100 pointer-events-none"
        style={{ opacity: heroOpacity }}
      >
        {/* Main Content */}
        <main className="container mx-auto px-8 min-h-screen flex flex-col justify-between py-20">
          {/* Hero Text */}
          <div className="flex-1 flex items-center">
            <div className="max-w-2xl space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-gray-400">
                  Hi there! I'm an user experience and user interface designer from Germany, Munich with a love for all things web. I'm currently working at the agency Fork Unstable Media and doing here and there some freelance stuff.
                </p>
              </div>
            </div>
          </div>

          {/* Large Name Typography */}
          <div className="pb-8 w-full">
            <h1 className="text-[18vw] md:text-[16vw] lg:text-[14vw] font-light leading-none tracking-[0em]">
              Lea Egeler
            </h1>
          </div>
        </main>

        {/* Right Side Skills */}
        <div className="absolute top-0 right-8 pt-20 space-y-16 hidden lg:block">
          <div className="space-y-2 text-right">
            <h3 className="text-sm font-medium mb-4">Design</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Figma</li>
              <li>Photoshop</li>
              <li>AfterEffects</li>
              <li>Illustrator</li>
            </ul>
          </div>

          <div className="space-y-2 text-right">
            <h3 className="text-sm font-medium mb-4">Development</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Webflow</li>
              <li>HTML / CSS</li>
              <li>Javascript</li>
              <li>GSAP</li>
              <li>Finsweet</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scrollable content layer */}
      <div className="relative z-10">
        {/* Spacer for hero section */}
        <div className="h-screen pointer-events-none snap-start"></div>

        {/* Projects Section 1 - Small left, Large right */}
      <ProjectSection
        alignment="left"
        project1={projects[0]}
        project2={projects[1]}
        onProjectClick={() => {}}
        enableSnap={true}
      />

      {/* Projects Section 2 - Large left, Small right */}
      <ProjectSection
        alignment="right"
        project1={projects[0]}
        project2={projects[1]}
        onProjectClick={() => {}}
        enableSnap={true}
      />

      {/* Projects Section 3 - Small left, Large right */}
      <ProjectSection
        alignment="left"
        project1={projects[0]}
        project2={projects[1]}
        onProjectClick={() => {}}
        enableSnap={true}
      />

      {/* Contact Section */}
      <section ref={contactRef} className="min-h-screen bg-[#e8e5e1] text-black py-16 px-8 relative snap-start">
        <div className="max-w-[1400px] mx-auto h-full flex flex-col justify-between">
          {/* Top - Contact Me dot */}
          <div className="flex items-center gap-2 border-t border-black pt-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm uppercase tracking-wide">CONTACT ME</span>
          </div>

          {/* Middle - Get it touch heading and email */}
          <div className="space-y-8 py-20">
            <h2 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-light leading-none">
              Get it touch
            </h2>
            <a
              href="mailto:hello@leaegeler.com"
              className="text-[6vw] md:text-[5vw] lg:text-[4vw] font-light text-[#8b8b6b] hover:text-black transition-colors"
            >
              hello@leaegeler.com
            </a>
          </div>

          {/* Bottom - Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black pt-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-5xl font-light hover:opacity-60 transition-opacity"
            >
              Linkedin
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-5xl font-light hover:opacity-60 transition-opacity"
            >
              Dribbble
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-5xl font-light hover:opacity-60 transition-opacity"
            >
              Behance
            </a>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default App
