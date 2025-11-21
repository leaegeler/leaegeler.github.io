import { motion } from 'framer-motion';

interface DrGarvingDetailProps {
  onClose: () => void;
}

export default function DrGarvingDetail({ onClose }: DrGarvingDetailProps) {
  return (
    <>
      {/* Viewport 1: Pen Mockup + Business Cards */}
      <div className="snap-start min-h-screen w-full bg-[#0c0c0c] flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="w-full"
          >
            <img
              src="/src/assets/drgarving/kugelschreiber-mockup.jpg"
              alt="Dr. Garving Kugelschreiber"
              className="w-full h-auto object-cover"
              style={{ borderRadius: '16px' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="w-full pt-12 lg:pt-20"
          >
            <img
              src="/src/assets/drgarving/businesscards.jpg"
              alt="Dr. Garving Business Cards"
              className="w-full h-auto object-cover"
              style={{ borderRadius: '16px' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Viewport 2: Video + Design Components */}
      <div className="snap-start min-h-screen w-full bg-[#0c0c0c] flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="w-full flex items-center justify-center"
          >
            <video
              src="/src/assets/drgarving/homestage.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-auto h-auto max-h-[70vh] object-contain"
              style={{ borderRadius: '16px' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="w-full pt-12 lg:pt-20"
          >
            <img
              src="/src/assets/drgarving/components.jpg"
              alt="Dr. Garving Design Components"
              className="w-full h-auto object-cover"
              style={{ borderRadius: '16px' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Viewport 3: Full-width Moods Image */}
      <div className="snap-start min-h-screen w-full bg-[#0c0c0c] flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="w-full max-w-7xl"
        >
          <img
            src="/src/assets/drgarving/moods.jpg"
            alt="Dr. Garving Moods"
            className="w-full h-auto object-cover"
            style={{ borderRadius: '16px' }}
          />
        </motion.div>
      </div>

      {/* Viewport 4: Three Mobile Website Screens */}
      <div className="snap-start min-h-screen w-full bg-[#0c0c0c] flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src="/src/assets/drgarving/website1.PNG"
              alt="Dr. Garving Website Screen 1"
              className="w-auto h-auto max-h-[60vh] md:max-h-[65vh] object-contain"
              style={{ borderRadius: '16px' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:pt-20 lg:pt-24"
          >
            <img
              src="/src/assets/drgarving/website2.PNG"
              alt="Dr. Garving Website Screen 2"
              className="w-auto h-auto max-h-[60vh] md:max-h-[65vh] object-contain"
              style={{ borderRadius: '16px' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src="/src/assets/drgarving/website3.PNG"
              alt="Dr. Garving Website Screen 3"
              className="w-auto h-auto max-h-[60vh] md:max-h-[65vh] object-contain"
              style={{ borderRadius: '16px' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Final section with back button */}
      <div className="snap-start min-h-[50vh] w-full bg-[#0c0c0c] flex items-start justify-start p-8 md:p-16">
        <button
          onClick={onClose}
          className="text-white text-sm underline hover:opacity-60 transition-opacity cursor-pointer"
        >
          zurück zur Übersicht
        </button>
      </div>
    </>
  );
}
