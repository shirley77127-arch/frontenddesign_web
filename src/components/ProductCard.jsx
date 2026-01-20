import { motion } from 'framer-motion'

const ProductCard = ({ 
  product, 
  index = 0,
  onSelect 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="border border-black/20 bg-white hover:border-electric-cobalt/50 transition-all cursor-pointer group shadow-sm"
      onClick={onSelect}
    >
      {/* Blueprint-style grid overlay */}
      <div className="relative overflow-hidden">
        {product.image ? (
          <div className="aspect-[4/3] bg-black/5 relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id={`grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(46, 91, 255, 0.3)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
              </svg>
            </div>
          </div>
        ) : (
          <div className="aspect-[4/3] bg-black/5 flex items-center justify-center">
            <span className="text-black/30 font-mono text-xs">无图片</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 border-t border-black/10">
        <h3 className="font-display text-lg font-semibold mb-2 text-black">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm font-mono text-black/70 mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
        
        {/* Specifications */}
        {product.specs && (
          <div className="space-y-2 mb-4">
            {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
              <div key={key} className="flex justify-between text-xs font-mono">
                <span className="text-black/50">{key}:</span>
                <span className="text-black/80">{value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-black/10">
          {product.price && (
            <span className="font-display text-xl font-bold text-black">
              {product.price}
            </span>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-electric-cobalt text-white font-mono text-xs uppercase tracking-wider hover:bg-electric-cobalt/80 transition-colors"
          >
            查看详情
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard

