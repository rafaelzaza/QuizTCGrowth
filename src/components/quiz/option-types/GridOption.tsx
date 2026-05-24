import { motion } from 'framer-motion'
import type { QuizOption } from '../../../types/quiz.types'

interface GridOptionProps {
  option: QuizOption
  selected: boolean
  onSelect: (value: string) => void
}

export default function GridOption({ option, selected, onSelect }: GridOptionProps) {
  return (
    <motion.button
      onClick={() => onSelect(option.value)}
      whileTap={{ scale: 0.97 }}
      style={{
        border: selected ? '1.5px solid #C8A96E' : '1px solid #1E2D45',
        backgroundColor: selected ? '#1C1810' : '#111827',
        boxShadow: selected ? '0 2px 12px rgba(200,169,110,0.12)' : 'none',
      }}
      className="flex flex-col items-center justify-center gap-2 rounded-xl p-5 cursor-pointer transition-all duration-150 min-h-[110px] text-center w-full hover:border-[#C8A96E]"
    >
      <span style={{ fontSize: 32 }}>{option.emoji}</span>
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: selected ? 500 : 400,
          fontSize: 14,
          color: selected ? '#F2F2F0' : '#C8C8C0',
          lineHeight: 1.4,
        }}
      >
        {option.label}
      </span>
    </motion.button>
  )
}
