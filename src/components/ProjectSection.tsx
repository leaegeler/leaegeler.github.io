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
  // Determine which project gets which width based on alignment
  const smallWidth = 'lg:w-[30%] w-full'
  const largeWidth = 'lg:w-[70%] w-full'

  // If alignment is 'left', small project on left (30%), large on right (70%)
  // If alignment is 'right', large project on left (70%), small on right (30%)
  const firstWidth = alignment === 'left' ? smallWidth : largeWidth
  const secondWidth = alignment === 'left' ? largeWidth : smallWidth

  const firstProject = alignment === 'left' ? project1 : project2
  const secondProject = alignment === 'left' ? project2 : project1

  const ProjectCard = ({ project, width }: { project: Project; width: string }) => (
    <div className={width}>
      <div
        className="group cursor-pointer"
        onClick={() => onProjectClick(project)}
      >
        <div className="relative aspect-[16/9] bg-[#d4c4b8] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="mt-4 flex justify-between items-center text-white">
          <span className="text-sm">{project.title}</span>
          <span className="text-sm">{project.year}</span>
        </div>
      </div>
    </div>
  )

  return (
    <section className={`min-h-screen py-16 px-4 relative bg-background ${enableSnap ? 'snap-start' : ''}`}>
      <div className="flex flex-col lg:flex-row gap-4 max-w-[1400px] mx-auto">
        <ProjectCard project={firstProject} width={firstWidth} />
        <ProjectCard project={secondProject} width={secondWidth} />
      </div>
    </section>
  )
}
