import ProductCard from './ProductCard'

function MessageBlock({ message }) {
  const isAI = message.type === 'AI_RESPONSE'
  const isUser = message.type === 'USER_QUERY'

  return (
    <div className="w-full border border-charcoal bg-white">
      {/* Metadata Label */}
      <div className="px-6 pt-6 pb-3 border-b border-charcoal">
        <div className="font-mono text-xs uppercase tracking-wider text-secondary">
          {message.id} // {message.type}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {isUser && (
          <p className="font-display text-lg leading-tight text-charcoal">
            {message.content}
          </p>
        )}

        {isAI && (
          <div className="space-y-6">
            <p className="font-display text-lg leading-tight text-charcoal">
              {message.content}
            </p>

            {message.products && (
              <div className="space-y-6 mt-6">
                {message.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default MessageBlock

