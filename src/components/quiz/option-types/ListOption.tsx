import { motion } from 'framer-motion'
import type { QuizOption } from '../../../types/quiz.types'

interface ListOptionProps {
  option: QuizOption
  selected: boolean
  onSelect: (value: string) => void
}

export default function ListOption({ option, selected, onSelect }: ListOptionProps) {
  return (
    <motion.button
      onClick={() => onSelect(option.value)}
      whileTap={{ scale: 0.97 }}
      style={{
        backgroundColor: selected ? '#1C1810' : '#111827',
        border: '1px solid #1E2D45',
        borderLeftWidth: 3,
        borderLeftColor: selected ? '#C8A96E' : 'transparent',
      }}
      className="flex items-center justify-between w-full rounded-xl px-4 py-4 cursor-pointer transition-all duration-150 text-left hover:bg-[#162032]"
    >
      <div className="flex items-center gap-3">
        <span style={{ fontSize: 22 }}>{option.emoji}</span>
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
      </div>
      {option.subtext && (
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: 12,
            color: '#6B7280',
            whiteSpace: 'nowrap',
            marginLeft: 12,
          }}
        >
          {option.subtext}
        </span>
      )}
    </motion.button>
  )
}
