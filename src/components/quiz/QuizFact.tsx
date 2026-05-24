import { motion } from 'framer-motion'
import type { QuizFact as QuizFactType } from '../../types/quiz.types'

interface QuizFactProps {
  fact: QuizFactType
  onNext: () => void
}

export default function QuizFact({ fact, onNext }: QuizFactProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col gap-6"
    >
      <div
        style={{
          backgroundColor: '#111827',
          border: '1px solid #1E2D45',
          borderRadius: 16,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {fact.image && (
          <div
            style={{
              width: '100%',
              maxHeight: 280,
              overflow: 'hidden',
              borderBottom: '1px solid #1E2D45',
            }}
          >
            <img
              src={fact.image}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        )}

        <div
          style={{
            padding: '24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              color: '#C8A96E',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
            }}
          >
            {fact.body}
          </span>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: '#F2F2F0',
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {fact.headline}
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: 15,
              color: '#8A9099',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {fact.description}
          </p>
        </div>
      </div>

      <motion.button
        onClick={onNext}
        whileTap={{ scale: 0.97 }}
        style={{
          backgroundColor: '#C8A96E',
          color: '#0B1020',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: 15,
          borderRadius: 8,
          border: 'none',
          padding: '14px 24px',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        {fact.cta_label}
      </motion.button>
    </motion.div>
  )
}
