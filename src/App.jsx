import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MessageBlock from './components/MessageBlock'
import ProgressThread from './components/ProgressThread'
import TopProgressBar from './components/TopProgressBar'
import ScanningEffect from './components/ScanningEffect'
import InputBar from './components/InputBar'

function App() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isScanning, setIsScanning] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleSend = (content) => {
    const newMessage = {
      id: `ID-${String(messages.length + 1).padStart(3, '0')}`,
      type: 'USER_QUERY',
      content,
      timestamp: Date.now(),
    }
    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages)

    // Simulate AI response
    setTimeout(() => {
      setIsLoading(true)
      setProgress(0)
      
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 2
        })
      }, 30)

      setTimeout(() => {
        setIsScanning(true)
        setTimeout(() => {
          setIsScanning(false)
          setIsLoading(false)
          setProgress(0)
          
          const aiResponse = {
            id: `ID-${String(updatedMessages.length + 1).padStart(3, '0')}`,
            type: 'AI_RESPONSE',
            content: 'I understand your request. Processing...',
            timestamp: Date.now(),
          }
          setMessages((prev) => [...prev, aiResponse])
        }, 1500)
      }, 2000)
    }, 500)
  }

  // Demo data initialization
  useEffect(() => {
    const initialMessages = [
      {
        id: 'ID-001',
        type: 'USER_QUERY',
        content: 'Show me professional-grade wireless headphones with noise cancellation.',
        timestamp: Date.now() - 2000,
      },
    ]
    setMessages(initialMessages)

    // Simulate AI response after delay
    setTimeout(() => {
      setIsLoading(true)
      setProgress(0)
      
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 2
        })
      }, 30)

      setTimeout(() => {
        setIsScanning(true)
        setTimeout(() => {
          setIsScanning(false)
          setIsLoading(false)
          setProgress(0)
          
          setMessages([
            ...initialMessages,
            {
              id: 'ID-002',
              type: 'AI_RESPONSE',
              content: 'I found 3 professional-grade wireless headphones matching your criteria.',
              timestamp: Date.now(),
              products: [
                {
                  id: 'PROD-001',
                  name: 'Sennheiser Momentum 4',
                  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop',
                  specs: {
                    'Driver Size': '42mm',
                    'Frequency': '6Hz - 22kHz',
                    'Battery': '60 hours',
                    'Weight': '293g',
                    'ANC': 'Active',
                    'Codec': 'AAC, aptX HD',
                  },
                  price: '$349.99',
                },
                {
                  id: 'PROD-002',
                  name: 'Bose QuietComfort Ultra',
                  image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&h=600&fit=crop',
                  specs: {
                    'Driver Size': 'Custom 40mm',
                    'Frequency': '20Hz - 20kHz',
                    'Battery': '24 hours',
                    'Weight': '253g',
                    'ANC': 'Adaptive',
                    'Codec': 'AAC, SBC',
                  },
                  price: '$429.99',
                },
                {
                  id: 'PROD-003',
                  name: 'Sony WH-1000XM5',
                  image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=600&fit=crop',
                  specs: {
                    'Driver Size': '30mm',
                    'Frequency': '4Hz - 40kHz',
                    'Battery': '30 hours',
                    'Weight': '250g',
                    'ANC': 'Industry Leading',
                    'Codec': 'LDAC, AAC',
                  },
                  price: '$399.99',
                },
              ],
            },
          ])
        }, 1500)
      }, 2000)
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-bone h-screen overflow-y-auto">
      <TopProgressBar progress={progress} isActive={isLoading} />
      
      <div className="max-w-md mx-auto min-h-screen relative pb-24">
        <ProgressThread messageCount={messages.length} messages={messages} />
        
        <div className="pl-24 pr-6 py-6 relative">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                className="relative mb-6"
              >
                {isScanning && index === messages.length - 1 && (
                  <ScanningEffect />
                )}
                <MessageBlock message={message} />
                {index < messages.length - 1 && (
                  <div className="h-px bg-charcoal my-6" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <InputBar onSend={handleSend} />
    </div>
  )
}

export default App

