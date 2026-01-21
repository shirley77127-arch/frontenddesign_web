import { useState } from 'react'

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const specs = Object.entries(product.specs)

  return (
    <div 
      className="border border-charcoal bg-white shadow-hard"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Product Image - Architectural Blueprint Style */}
      <div className="w-full h-64 bg-charcoal/5 relative overflow-hidden border-b border-charcoal">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isHovered ? 'grayscale-0' : 'grayscale'
          }`}
          style={{
            filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
          }}
        />
        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
          style={{
            backgroundImage: `
              linear-gradient(#1A1A1A 1px, transparent 1px),
              linear-gradient(90deg, #1A1A1A 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Product Info */}
      <div className="px-6 py-6 space-y-6">
        {/* Title and Price */}
        <div className="border-b border-charcoal pb-4">
          <h3 className="font-display text-xl leading-tight text-charcoal mb-2">
            {product.name}
          </h3>
          <div className="font-mono text-xs uppercase tracking-wider text-charcoal">
            {product.price}
          </div>
        </div>

        {/* Technical Specs Table - Manifest Style */}
        <div className="space-y-0 border border-charcoal">
          {specs.map(([key, value], index) => (
            <div
              key={key}
              className={`grid grid-cols-2 gap-6 py-3 px-4 ${
                index < specs.length - 1 ? 'border-b border-charcoal' : ''
              }`}
            >
              <div className="font-mono text-xs uppercase tracking-wider text-secondary">
                {key}
              </div>
              <div className="font-mono text-xs text-charcoal">
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Proceed Link */}
        <div className="pt-4 border-t border-charcoal">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-charcoal hover:text-orange transition-colors group"
          >
            PROCEED TO CHECKOUT
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M1 6H11M11 6L6 1M11 6L6 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

