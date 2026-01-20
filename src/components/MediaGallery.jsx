import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const MediaGallery = ({ items = [], index = 0 }) => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  if (items.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="w-full"
    >
      <div className="grid grid-cols-4 gap-2">
        {items.map((item, itemIndex) => (
          <motion.div
            key={itemIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
            className={`aspect-square border cursor-pointer overflow-hidden ${
              selectedIndex === itemIndex
                ? 'border-electric-cobalt'
                : 'border-black/20 hover:border-black/40'
            } transition-all`}
            onClick={() => setSelectedIndex(itemIndex)}
          >
            {item.type === 'image' ? (
              <img
                src={item.url}
                alt={item.alt || `媒体 ${itemIndex + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-black/5 flex items-center justify-center">
                <span className="text-black/30 font-mono text-xs">
                  {item.type}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Full view */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={items[selectedIndex]?.url}
              alt={items[selectedIndex]?.alt}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default MediaGallery

