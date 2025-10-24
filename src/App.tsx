function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-8 flex items-center justify-between z-10">
        <div className="text-sm">02:52 PM</div>
        <button className="text-sm hover:text-gray-300 transition-colors">
          Get in touch
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-8 min-h-screen flex flex-col justify-between py-20">
        {/* Hero Section */}
        <div className="flex-1 flex items-center">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                Hi there! I'm a freelance designer & developer from Canada with a love for all things web. I'm currently working with clients & collaborating with agencies worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Large Name Typography */}
        <div className="pb-8">
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-light leading-none tracking-tight">
            Christina Kosik
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
  )
}

export default App
