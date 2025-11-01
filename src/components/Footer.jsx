import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="border-t border-cyan-400/10 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-300 text-sm"
          >
            © 2025 Inceptyon Labs LLC. All rights reserved.
          </motion.p>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <a
              href="#privacy"
              className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#terms"
              className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
            >
              Terms
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
