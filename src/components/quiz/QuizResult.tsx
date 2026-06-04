import { motion } from 'framer-motion'
import type { QuizResult as QuizResultType } from '../../types/quiz.types'

interface QuizResultProps {
  result: QuizResultType
}

export default function QuizResult({ result }: QuizResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col items-center gap-6 text-center py-4"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: 'backOut' }}
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          backgroundColor: '#C8A96E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.svg
          width="28"
          height="22"
          viewBox="0 0 28 22"
          fill="none"
        >
          <motion.path
            d="M2 11L10 19L26 2"
            stroke="#0B1020"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
          />
        </motion.svg>
      </motion.div>

      <div className="flex flex-col gap-3">
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 26,
            color: '#F2F2F0',
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Obrigado pelas suas respostas!
        </h1>

        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            color: '#C8A96E',
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {result.headline}
        </h2>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: 15,
            color: '#8A9099',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {result.body}
        </p>
      </div>

      <motion.a
        href={result.cta_url}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.97 }}
        style={{
          display: 'block',
          backgroundColor: '#C8A96E',
          color: '#0B1020',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 16,
          borderRadius: 8,
          padding: '16px 32px',
          textDecoration: 'none',
          width: '100%',
          textAlign: 'center',
          marginTop: 8,
        }}
      >
        {result.cta_label}
      </motion.a>
    </motion.div>
  )
}
