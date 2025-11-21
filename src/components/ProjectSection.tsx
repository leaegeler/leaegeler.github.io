import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DrGarvingDetail from './DrGarvingDetail'

interface Project {
  id: number
  title: string
  description: string
  services: string[]
  year: string
  image: string
  link?: string
}

interface ProjectSectionProps {
  alignment?: 'left' | 'right'
  project1: Project
  project2: Project
  onProjectClick: (project: Project) => void
  enableSnap?: boolean
}

export function ProjectSection({
  alignment = 'left',
  project1,
  project2,
  onProjectClick,
  enableSnap = false
}: ProjectSectionProps) {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null)
  const [clickedImageRect, setClickedImageRect] = useState<DOMRect | null>(null)

  // Determine which project gets which width based on alignment
  const smallWidth = 'lg:w-[30%] w-full'
  const largeWidth = 'lg:w-[70%] w-full'

  // If alignment is 'left', small project on left (30%), large on right (70%)
  // If alignment is 'right', large project on left (70%), small on right (30%)
  const firstWidth = alignment === 'left' ? smallWidth : largeWidth
  const secondWidth = alignment === 'left' ? largeWidth : smallWidth

  const firstProject = alignment === 'left' ? project1 : project2
  const secondProject = alignment === 'left' ? project2 : project1

  const handleProjectClick = (project: Project, event: React.MouseEvent<HTMLDivElement>) => {
    const imageContainer = event.currentTarget.querySelector('.relative.aspect-\\[16\\/9\\]') as HTMLElement
    if (imageContainer) {
      const rect = imageContainer.getBoundingClientRect()
      setClickedImageRect(rect)
      setExpandedProject(project)
    }
    onProjectClick(project)
  }

  const handleClose = () => {
    setExpandedProject(null)
    setClickedImageRect(null)
  }

  const ProjectCard = ({ project, width }: { project: Project; width: string }) => (
    <div className={width}>
      <motion.div
        className="group cursor-pointer"
        onClick={(e) => handleProjectClick(project, e as any)}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <div className="relative aspect-[16/9] bg-[#d4c4b8] overflow-hidden">
          {(!expandedProject || expandedProject.id !== project.id) && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-100 transition-opacity"
            />
          )}
        </div>
        <div className="mt-4 flex justify-between items-center text-white">
          <span className="text-sm">{project.title}</span>
          <span className="text-sm">{project.year}</span>
        </div>
      </motion.div>
    </div>
  )

  return (
    <>
      <section className={`min-h-screen py-16 px-4 relative ${enableSnap ? 'snap-start' : ''}`}>
        <div className="flex flex-col lg:flex-row gap-4 max-w-[1400px] mx-auto">
          <ProjectCard project={firstProject} width={firstWidth} />
          <ProjectCard project={secondProject} width={secondWidth} />
        </div>
      </section>

      <AnimatePresence>
        {expandedProject && clickedImageRect && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto snap-y snap-mandatory"
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          >
            <motion.div
              className="p-8 snap-start"
              onClick={(e) => e.stopPropagation()}
              style={{ minHeight: '100vh' }}
            >
              {/* Banner Image Section */}
              <div className="relative w-full flex flex-col">
                <motion.img
                  src={expandedProject.image}
                  alt={expandedProject.title}
                  className="w-full object-cover"
                  style={{ height: '60vh' }}
                  initial={{
                    x: clickedImageRect.left - 32,
                    y: clickedImageRect.top - 32,
                    width: clickedImageRect.width,
                    height: clickedImageRect.height,
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    width: window.innerWidth - 64,
                    height: window.innerHeight * 0.6,
                  }}
                  exit={{
                    x: clickedImageRect.left - 32,
                    y: clickedImageRect.top - 32,
                    width: clickedImageRect.width,
                    height: clickedImageRect.height,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                />
                <button
                  onClick={handleClose}
                  className="absolute top-8 left-8 text-white text-sm hover:opacity-60 transition-opacity z-10 cursor-pointer"
                >
                  zurück zur Übersicht
                </button>

                {/* Details section below image in same snap section */}
                <motion.div
                  className="flex-1 px-4 py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                      {/* Project title - Left column */}
                      <div className="lg:col-span-1">
                        <h2 className="text-3xl font-light leading-tight" style={{ color: '#E6EFFF' }}>{expandedProject.title}</h2>
                      </div>

                      {/* Description - Middle column */}
                      <div className="lg:col-span-1">
                        <p className="text-sm leading-relaxed" style={{ color: '#99A1AF' }}>
                          {expandedProject.description}
                        </p>
                      </div>

                      {/* Services and Link - Third column */}
                      <div className="lg:col-span-1">
                        <div>
                          <h3 className="text-sm font-normal mb-4" style={{ color: '#E6EFFF' }}>Meine Leistungen:</h3>
                          <div className="space-y-2 mb-6">
                            {expandedProject.services.map((service, index) => (
                              <div key={index} className="text-sm" style={{ color: '#99A1AF' }}>
                                {service}
                              </div>
                            ))}
                          </div>
                          {/* Link positioned below services in the same column */}
                          {expandedProject.link && expandedProject.id === 1 && (
                            <a
                              href={expandedProject.link}
                              className="inline-flex items-center gap-2 text-sm text-[#EDF200] hover:opacity-80 transition-opacity group"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="/assets/arrow-right_yellow.svg"
                                alt=""
                                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                              />
                              <span className="underline">drgarving.de</span>
                            </a>
                          )}
                          {expandedProject.link && expandedProject.id !== 1 && (
                            <a
                              href={expandedProject.link}
                              className="inline-block text-sm underline text-gray-400 hover:text-white transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Website
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Section Below Banner - Conditional rendering based on project */}
              {expandedProject.id === 1 ? (
                // Dr. Garving custom detail page
                <DrGarvingDetail onClose={handleClose} />
              ) : (
                // Default placeholder content for other projects
                <motion.div
                  className="px-4 py-16 snap-start min-h-screen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                      {/* Project title - Left column */}
                      <div className="lg:col-span-1">
                        <h2 className="text-2xl font-light text-white">{expandedProject.title}</h2>
                      </div>

                      {/* Description - Middle column */}
                      <div className="lg:col-span-1">
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {expandedProject.description}
                        </p>
                      </div>

                      {/* Services and Link - Right column */}
                      <div className="lg:col-span-1 space-y-6">
                        <div>
                          <h3 className="text-sm font-medium mb-3 text-white">Services</h3>
                          <div className="space-y-1">
                            {expandedProject.services.map((service, index) => (
                              <div key={index} className="text-sm text-gray-400">
                                {service}
                              </div>
                            ))}
                          </div>
                        </div>

                        {expandedProject.link && (
                          <a
                            href={expandedProject.link}
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
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                      viewport={{ once: true }}
                      className="w-full"
                    >
                      <div className="aspect-[16/9] bg-gray-800 overflow-hidden">
                        <img
                          src={expandedProject.image}
                          alt="Project detail 1"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>

                    {/* Placeholder Image 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                      viewport={{ once: true }}
                      className="w-full"
                    >
                      <div className="aspect-[16/9] bg-gray-800 overflow-hidden">
                        <img
                          src={expandedProject.image}
                          alt="Project detail 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Back to main page link at bottom */}
                  <div className="pt-8">
                    <button
                      onClick={handleClose}
                      className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <img
                        src="/assets/arrow-left.svg"
                        alt=""
                        className="w-5 h-5"
                        style={{
                          animation: 'bounce-arrow-left 2s ease-in-out infinite'
                        }}
                      />
                      <span>zurück zur Übersicht</span>
                      <style>{`
                        @keyframes bounce-arrow-left {
                          0%, 100% {
                            transform: translateX(0);
                          }
                          50% {
                            transform: translateX(-6px);
                          }
                        }
                      `}</style>
                    </button>
                  </div>


                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
