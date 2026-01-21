import { motion } from 'framer-motion'

function ScanningEffect() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <motion.div
        className="h-px bg-orange w-full"
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
    </motion.div>
  )
}

export default ScanningEffect

