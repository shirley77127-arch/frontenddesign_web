function ProgressThread({ messageCount, messages = [] }) {
  if (messageCount === 0) return null

  // Calculate positions for AI response nodes
  const aiNodes = messages
    .map((msg, index) => ({ msg, index }))
    .filter(({ msg }) => msg.type === 'AI_RESPONSE')

  return (
    <div className="absolute left-6 top-0 bottom-0 w-px flex flex-col pt-8">
      <div className="w-px flex-1 bg-charcoal relative">
        {aiNodes.map(({ index }) => {
          // Position nodes based on message index (rough estimate: 200px per message block)
          const topPosition = (index + 1) * 200
          
          return (
            <div
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${topPosition}px` }}
            >
              <div className="w-3 h-3 bg-charcoal border border-charcoal" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProgressThread

