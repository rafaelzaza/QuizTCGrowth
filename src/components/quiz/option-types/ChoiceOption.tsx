import { motion } from 'framer-motion'
import type { QuizOption } from '../../../types/quiz.types'

interface ChoiceOptionProps {
  option: QuizOption
  selected: boolean
  onSelect: (value: string) => void
}

export default function ChoiceOption({ option, selected, onSelect }: ChoiceOptionProps) {
  return (
    <motion.button
      onClick={() => onSelect(option.value)}
      whileTap={{ scale: 0.97 }}
      style={{
        backgroundColor: selected ? '#1C1810' : '#111827',
        border: '1px solid #1E2D45',
      }}
      className="flex items-center gap-3 w-full rounded-xl px-4 py-4 cursor-pointer transition-all duration-150 text-left hover:bg-[#162032]"
    >
      <div
        style={{
          width: 18,
          height: 18,
          minWidth: 18,
          borderRadius: 4,
          border: selected ? 'none' : '2px solid #374151',
          backgroundColor: selected ? '#C8A96E' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.15s ease',
        }}
      >
        {selected && (
          <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
            <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span style={{ fontSize: 20 }}>{option.emoji}</span>
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: selected ? 500 : 400,
          fontSize: 15,
          color: selected ? '#F2F2F0' : '#C8C8C0',
        }}
      >
        {option.label}
      </span>
    </motion.button>
  )
}
