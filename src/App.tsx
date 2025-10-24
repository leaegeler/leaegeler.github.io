import { useState } from 'react'
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 p-8 flex items-center justify-between z-10">
          <button className="text-sm hover:text-gray-300 transition-colors">
            Get in touch
          </button>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-8 min-h-screen flex flex-col justify-between py-20">
          {/* Hero Text */}
          <div className="flex-1 flex items-center">
            <div className="max-w-2xl space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-gray-400">
                  Hi there! I'm a user experience and user interface designer from Germany, Munich with a love for all things web. I'm currently working at thr agency Fork Unstable Media and doing some freelane stuff.
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

      {/* Projects Section 1 - Small left, Large right */}
      <ProjectSection
        alignment="left"
        project1={projects[0]}
        project2={projects[1]}
        onProjectClick={setSelectedProject}
      />

      {/* Projects Section 2 - Large left, Small right */}
      <ProjectSection
        alignment="right"
        project1={projects[0]}
        project2={projects[1]}
        onProjectClick={setSelectedProject}
      />

      {/* Projects Section 3 - Small left, Large right */}
      <ProjectSection
        alignment="left"
        project1={projects[0]}
        project2={projects[1]}
        onProjectClick={setSelectedProject}
      />

      {/* Contact Section */}
      <section className="min-h-screen bg-[#e8e5e1] text-black py-16 px-8">
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

      {/* Project Detail Overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-[#0a0a0a] z-50 overflow-y-auto animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div className="min-h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Back button - Top left */}
            <div className="p-8">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Back to main page
              </button>
            </div>

            {/* Main content area */}
            <div className="flex-1 flex items-center justify-center px-8 pb-20">
              <div className="w-full max-w-[1400px] space-y-16">
                {/* Image - Full width, cropped height */}
                <div className="w-full h-[50vh] overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details section below image */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                  {/* Project title - Left column */}
                  <div className="lg:col-span-1">
                    <h2 className="text-2xl font-light">{selectedProject.title}</h2>
                  </div>

                  {/* Description - Middle column */}
                  <div className="lg:col-span-1">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Services and Link - Right column */}
                  <div className="lg:col-span-1 space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Services</h3>
                      <div className="space-y-1">
                        {selectedProject.services.map((service, index) => (
                          <div key={index} className="text-sm text-gray-400">
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>

                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        className="inline-block text-sm underline text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>

                {/* Additional images in 16:9 format */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Placeholder Image 1 */}
                  <div className="w-full">
                    <div className="aspect-[16/9] bg-gray-800 overflow-hidden">
                      <img
                        src={selectedProject.image}
                        alt="Project detail 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Placeholder Image 2 */}
                  <div className="w-full">
                    <div className="aspect-[16/9] bg-gray-800 overflow-hidden">
                      <img
                        src={selectedProject.image}
                        alt="Project detail 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Back to main page link at bottom */}
                <div className="pt-8">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Back to main page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
