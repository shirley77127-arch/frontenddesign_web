import { useState } from 'react'
import { motion } from 'framer-motion'
import ConversationArchitecture from './components/ConversationArchitecture'
import MessageBlock from './components/MessageBlock'
import AgentThinking from './components/AgentThinking'
import ProductCard from './components/ProductCard'
import StepByStepGuide from './components/StepByStepGuide'
import MediaGallery from './components/MediaGallery'
import InputArea from './components/InputArea'

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'agent',
      message: '我已经分析了您对高性能工作站的需求。根据您的规格要求，我找到了3个最佳配置方案。',
      metadata: {
        confidence: 94,
        source: '产品数据库 v2.1',
        timestamp: '14:32:18',
      },
      children: (
        <StepByStepGuide index={0} />
      ),
    },
    {
      id: 2,
      type: 'agent',
      message: '以下是与您的要求匹配的顶级推荐产品：',
      metadata: {
        confidence: 91,
        source: '推荐引擎',
        timestamp: '14:32:22',
      },
      children: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <ProductCard
            product={{
              name: '专业工作站 X9',
              description: '企业级工作站，支持双GPU和ECC内存',
              price: '¥29,999',
              specs: {
                CPU: 'Intel Xeon W-2295',
                内存: '64GB ECC',
                显卡: '2x RTX 4090',
              },
            }}
            index={0}
          />
          <ProductCard
            product={{
              name: '超算工作站 Z7',
              description: '高频CPU，针对单线程性能优化',
              price: '¥27,199',
              specs: {
                CPU: 'AMD Ryzen 9 7950X',
                内存: '128GB DDR5',
                显卡: 'RTX 4080',
              },
            }}
            index={1}
          />
          <ProductCard
            product={{
              name: '创意工作站 M5',
              description: '为创意专业人士打造的平衡性能配置',
              price: '¥20,999',
              specs: {
                CPU: 'Intel i9-13900K',
                内存: '32GB DDR5',
                显卡: 'RTX 4070 Ti',
              },
            }}
            index={2}
          />
        </div>
      ),
    },
    {
      id: 3,
      type: 'agent',
      message: '技术对比矩阵和详细规格参数：',
      metadata: {
        confidence: 88,
        source: '规格数据库',
        timestamp: '14:32:25',
        technicalDetails: {
          comparison: {
            '专业工作站 X9': {
              '单核得分': 1850,
              '多核得分': 24500,
              'GPU 算力': '98.5 TFLOPS',
            },
            '超算工作站 Z7': {
              '单核得分': 2100,
              '多核得分': 32000,
              'GPU 算力': '83.2 TFLOPS',
            },
            '创意工作站 M5': {
              '单核得分': 1950,
              '多核得分': 18500,
              'GPU 算力': '66.5 TFLOPS',
            },
          },
        },
      },
    },
  ])
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSend = async (text) => {
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      message: text,
    }
    setMessages((prev) => [...prev, userMessage])
    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      const agentResponse = {
        id: messages.length + 2,
        type: 'agent',
        message: '正在处理您的请求并分析产品数据库，这可能需要几秒钟。',
        metadata: {
          confidence: 85,
          source: 'AI 智能助手 v3.0',
          timestamp: new Date().toLocaleTimeString('zh-CN', { hour12: false }),
        },
      }
      setMessages((prev) => [...prev, agentResponse])
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="h-screen flex flex-col bg-bone-paper overflow-hidden">
      {/* Header */}
      <header className="border-b border-black/10 px-12 py-6 bg-bone-paper z-30">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <h1 className="font-display text-2xl font-bold text-black mb-1">
              AI 智能助手
            </h1>
            <p className="text-xs font-mono text-black/60 uppercase tracking-wider">
              高端产品咨询系统
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-electric-cobalt rounded-full animate-pulse" />
              <span className="text-xs font-mono text-black/70">系统运行中</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Conversation Architecture */}
        <ConversationArchitecture />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-5xl mx-auto">
              {messages.map((msg, index) => (
                <MessageBlock
                  key={msg.id}
                  message={msg.message}
                  metadata={msg.metadata}
                  index={index}
                  type={msg.type}
                >
                  {msg.children}
                </MessageBlock>
              ))}
              
              {/* Thinking Indicator */}
              {isProcessing && <AgentThinking isVisible={isProcessing} />}
            </div>
          </div>

          {/* Input Area */}
          <InputArea onSend={handleSend} isProcessing={isProcessing} />
        </div>
      </div>
    </div>
  )
}

export default App

