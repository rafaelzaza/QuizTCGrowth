import { motion } from 'framer-motion'

interface QuizHeaderProps {
  currentQuestion: number
  totalQuestions: number
  progress: number
}

export default function QuizHeader({ currentQuestion, totalQuestions, progress }: QuizHeaderProps) {
  return (
    <div className="w-full sticky top-0 z-10" style={{ backgroundColor: '#0B1020' }}>
      <div className="w-full h-[3px]" style={{ backgroundColor: '#1E2A40' }}>
        <motion.div
          className="h-full"
          style={{ backgroundColor: '#C8A96E' }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>
      <div className="relative flex items-center justify-center px-6 py-4 max-w-[560px] mx-auto w-full">
        <img
          src="/logo.png"
          alt="TCG Growth"
          style={{ height: 32, width: 'auto', display: 'block' }}
        />
        {currentQuestion > 0 && (
          <span
            style={{
              position: 'absolute',
              right: 24,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: 13,
              color: '#6B7280',
            }}
          >
            Passo {currentQuestion} de {totalQuestions}
          </span>
        )}
      </div>
    </div>
  )
}
