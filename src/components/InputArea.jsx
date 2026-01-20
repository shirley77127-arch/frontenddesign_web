import { motion } from 'framer-motion'
import { useState } from 'react'

const InputArea = ({ onSend, isProcessing = false }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() && !isProcessing) {
      onSend(input.trim())
      setInput('')
    }
  }

  return (
    <div className="border-t border-black/10 bg-bone-paper sticky bottom-0 z-20">
      <form onSubmit={handleSubmit} className="p-6">
        <div className="flex items-center gap-4 max-w-5xl mx-auto">
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="询问产品、规格或推荐建议..."
              disabled={isProcessing}
              className="w-full px-6 py-4 bg-white border border-black/20 focus:border-electric-cobalt focus:outline-none font-mono text-sm text-black placeholder:text-black/40 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <motion.button
            type="submit"
            disabled={!input.trim() || isProcessing}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-electric-cobalt text-white font-mono text-xs uppercase tracking-wider hover:bg-electric-cobalt/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            {isProcessing ? '处理中' : '发送'}
          </motion.button>
        </div>
      </form>
    </div>
  )
}

export default InputArea

