import { useState } from 'react'

function InputBar({ onSend }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onSend(input.trim())
      setInput('')
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-charcoal z-50">
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="flex items-center border-b border-charcoal">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter query..."
            className="flex-1 px-6 py-4 font-mono text-sm text-charcoal bg-transparent border-0 outline-none placeholder:text-secondary"
          />
          <button
            type="submit"
            className="px-6 py-4 border-l border-charcoal font-mono text-xs uppercase tracking-wider text-charcoal hover:text-orange transition-colors"
          >
            [ EXECUTE ]
          </button>
        </form>
        {/* Precision Instrument Indicator Line */}
        <div className="h-px bg-charcoal/10" />
      </div>
    </div>
  )
}

export default InputBar

