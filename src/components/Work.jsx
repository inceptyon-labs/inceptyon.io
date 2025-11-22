import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ProjectCard = ({ title, tagline, status, delay, image, fillCard, link }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const statusColors = {
    'Coming Soon': 'bg-cyan-400/20 text-cyan-400 border-cyan-400/30',
    'Available': 'bg-green-400/20 text-green-400 border-green-400/30',
    'In Development': 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30'
  }

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      onClick={handleClick}
      className="group bg-navy-800/50 rounded-xl overflow-hidden border border-cyan-400/10 hover:border-cyan-400/30 transition-all cursor-pointer"
    >
      {/* Image Placeholder */}
      <div className={`aspect-video bg-gradient-to-br from-cyan-400/10 to-navy-700 flex items-center justify-center group-hover:from-cyan-400/20 transition-all ${fillCard ? '' : 'p-8'}`}>
        {image ? (
          <img
            src={image}
            alt={title}
            className={`w-full h-full ${fillCard ? 'object-cover' : 'object-contain'}`}
          />
        ) : (
          <svg className="w-16 h-16 text-cyan-400/30 group-hover:text-cyan-400/50 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        <p className="text-gray-200">{tagline}</p>
      </div>
    </motion.div>
  )
}

const Work = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'INCEPTŸON',
      tagline: 'Sci-fi educational simulation game exploring alien ecosystems',
      status: 'In Development',
      image: '/INCEPTYON.png',
      fillCard: true
    },
    {
      title: 'Holocron',
      tagline: 'Intelligent note and idea system for creative thinkers',
      status: 'Coming Soon',
      image: '/tesseract.png'
    },
    {
      title: 'Whiskey Ledger',
      tagline: 'Lifestyle app for whiskey collectors and enthusiasts',
      status: 'Coming Soon',
      image: '/whiskey.png',
      fillCard: true
    },
    {
      title: 'Fireball Fantasy Fiasco',
      tagline: 'Competitive golf league companion app',
      status: 'Coming Soon',
      image: '/gchl.png'
    },
    {
      title: 'Alyqon',
      tagline: 'Visual explorer for aliquot sums and iterative sequences',
      status: 'Available',
      image: '/alyqon-logo.png',
      link: 'https://alyqon.inceptyon.io/'
    },
    {
      title: 'Gugo',
      tagline: 'Engagement and community platform',
      status: 'Coming Soon',
      image: '/gugo-duck.png'
    }
  ]

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Work
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Exploring the boundaries of imagination and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              tagline={project.tagline}
              status={project.status}
              image={project.image}
              fillCard={project.fillCard}
              link={project.link}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
