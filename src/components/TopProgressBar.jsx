import { motion } from 'framer-motion'

function TopProgressBar({ progress, isActive }) {
  if (!isActive) return null

  return (
    <div className="fixed top-0 left-0 right-0 h-px bg-border-light z-50">
      <motion.div
        className="h-full bg-orange"
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
}

export default TopProgressBar

