import { motion } from 'framer-motion'

const ConversationArchitecture = ({ nodes = [] }) => {
  const defaultNodes = [
    { id: '1', label: '查询分析', status: 'completed', level: 0 },
    { id: '2', label: '产品搜索', status: 'completed', level: 1 },
    { id: '3', label: '规格匹配', status: 'active', level: 1 },
    { id: '4', label: '推荐引擎', status: 'pending', level: 2 },
  ]

  const displayNodes = nodes.length > 0 ? nodes : defaultNodes

  return (
    <div className="w-64 bg-bone-paper border-r border-black/10 h-full overflow-y-auto">
      <div className="p-6 sticky top-0 bg-bone-paper border-b border-black/10 z-10">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-black/60 mb-4">
          架构流程
        </h2>
      </div>
      <div className="p-4 space-y-2">
        {displayNodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`py-2 border-l-2 ${
              node.level === 0 ? 'pl-4' : node.level === 1 ? 'pl-8' : 'pl-12'
            } ${
              node.status === 'completed'
                ? 'border-international-orange'
                : node.status === 'active'
                ? 'border-electric-cobalt'
                : 'border-black/20'
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  node.status === 'completed'
                    ? 'bg-international-orange'
                    : node.status === 'active'
                    ? 'bg-electric-cobalt animate-pulse'
                    : 'bg-black/20'
                }`}
              />
              <span
                className={`text-xs font-mono ${
                  node.status === 'active'
                    ? 'text-electric-cobalt'
                    : 'text-black/60'
                }`}
              >
                {node.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ConversationArchitecture

