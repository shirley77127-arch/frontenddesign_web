import { motion } from 'framer-motion'
import { useState } from 'react'

const MessageBlock = ({ 
  message, 
  metadata = {}, 
  children,
  index = 0,
  type = 'agent'
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const isUser = type === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className={`w-full border-b border-black/10 last:border-b-0 ${
        isUser ? 'bg-black/5' : ''
      }`}
    >
      <div className="py-8 px-12">
        {/* Metadata Header */}
        {!isUser && (metadata.confidence || metadata.source || metadata.timestamp) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="flex items-center gap-6 mb-6 text-xs font-mono text-black/60 uppercase tracking-wider"
          >
            {metadata.confidence && (
              <div className="flex items-center gap-2">
                <span>置信度</span>
                <span className="text-electric-cobalt font-semibold">
                  {metadata.confidence}%
                </span>
              </div>
            )}
            {metadata.source && (
              <div className="flex items-center gap-2">
                <span>来源</span>
                <span className="text-black/70">{metadata.source}</span>
              </div>
            )}
            {metadata.timestamp && (
              <div className="flex items-center gap-2">
                <span>{metadata.timestamp}</span>
              </div>
            )}
          </motion.div>
        )}

        {/* Message Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="prose prose-invert max-w-none"
        >
          {message && (
            <p className={`text-base font-mono leading-relaxed mb-6 ${
              isUser ? 'text-black/80' : 'text-black/90'
            }`}>
              {message}
            </p>
          )}
          {children}
        </motion.div>

        {/* Expandable Technical Details */}
        {metadata.technicalDetails && (
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0 }}
            className="overflow-hidden"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 text-xs font-mono text-electric-cobalt uppercase tracking-wider hover:text-electric-cobalt/80 transition-colors"
            >
              {isExpanded ? '隐藏' : '显示'} 技术详情
            </button>
            {isExpanded && (
              <div className="mt-4 p-4 bg-black/5 border border-black/10 font-mono text-sm text-black/70">
                <pre className="whitespace-pre-wrap">
                  {JSON.stringify(metadata.technicalDetails, null, 2)}
                </pre>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default MessageBlock

