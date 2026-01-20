import { motion } from 'framer-motion'

const AgentThinking = ({ isVisible = true }) => {
  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative py-8 overflow-hidden"
    >
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-electric-cobalt"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        <span className="text-xs font-mono text-black/60 uppercase tracking-wider">
          处理中
        </span>
      </div>
      
      {/* Scanning glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-cobalt/20 to-transparent"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ width: '50%' }}
      />
    </motion.div>
  )
}

export default AgentThinking

