import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const StepByStepGuide = ({ steps = [], index = 0 }) => {
  const [activeStep, setActiveStep] = useState(0)

  const defaultSteps = [
    {
      title: '识别需求',
      description: '分析您的具体需求和使用场景',
      details: '我们评估性能要求、预算限制和可扩展性需求。',
    },
    {
      title: '匹配规格',
      description: '将技术规格与您的需求进行对比',
      details: '我们的引擎实时交叉引用10,000+产品规格。',
    },
    {
      title: '生成推荐',
      description: '接收精选的产品推荐',
      details: '按相关性得分、性价比和用户评价进行排名。',
    },
  ]

  const displaySteps = steps.length > 0 ? steps : defaultSteps

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="w-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-black/60">
          流程
        </h3>
        <div className="flex-1 h-px bg-black/10" />
      </div>

      {/* Horizontal Carousel */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {displaySteps.map((step, stepIndex) => (
            <motion.div
              key={stepIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + stepIndex * 0.1 }}
              className={`min-w-[280px] border ${
                activeStep === stepIndex
                  ? 'border-electric-cobalt bg-electric-cobalt/10'
                  : 'border-black/20 bg-white'
              } transition-all cursor-pointer shadow-sm`}
              onClick={() => setActiveStep(stepIndex)}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-8 h-8 flex items-center justify-center border-2 font-mono text-xs font-semibold ${
                      activeStep === stepIndex
                        ? 'border-electric-cobalt text-electric-cobalt'
                        : 'border-black/30 text-black/50'
                    }`}
                  >
                    {stepIndex + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-base font-semibold mb-2 text-black">
                      {step.title}
                    </h4>
                    <p className="text-sm font-mono text-black/70 mb-3">
                      {step.description}
                    </p>
                  </div>
                </div>

                <AnimatePresence>
                  {activeStep === stepIndex && step.details && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-black/10">
                        <p className="text-xs font-mono text-black/60 leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default StepByStepGuide

