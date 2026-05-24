import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import type { QuizQuestion as QuizQuestionType } from '../../types/quiz.types'
import GridOption from './option-types/GridOption'
import ListOption from './option-types/ListOption'
import ChoiceOption from './option-types/ChoiceOption'

interface QuizQuestionProps {
  question: QuizQuestionType
  onAnswer: (questionId: string, value: string | string[]) => void
  onNext: () => void
}

export default function QuizQuestion({ question, onAnswer, onNext }: QuizQuestionProps) {
  const [selected, setSelected] = useState<string[]>([])
  const advancing = useRef(false)

  useEffect(() => {
    setSelected([])
    advancing.current = false
  }, [question.id])

  function handleSelect(value: string) {
    if (question.multiple_select) {
      const next = selected.includes(value)
        ? selected.filter(v => v !== value)
        : [...selected, value]
      setSelected(next)
      onAnswer(question.id, next)
    } else {
      if (advancing.current) return
      advancing.current = true
      setSelected([value])
      onAnswer(question.id, value)
      setTimeout(() => onNext(), 300)
    }
  }

  const canContinue = selected.length > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1">
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
          {question.body}
        </h2>
        {question.subtitle && (
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: 14,
              color: '#6B7280',
              margin: 0,
            }}
          >
            {question.subtitle}
          </p>
        )}
      </div>

      {question.question_type === 'grid' && (
        <div className="grid grid-cols-2 gap-3">
          {question.options.map(option => (
            <GridOption
              key={option.id}
              option={option}
              selected={selected.includes(option.value)}
              onSelect={handleSelect}
            />
          ))}
        </div>
      )}

      {question.question_type === 'list' && (
        <div className="flex flex-col gap-2">
          {question.options.map(option => (
            <ListOption
              key={option.id}
              option={option}
              selected={selected.includes(option.value)}
              onSelect={handleSelect}
            />
          ))}
        </div>
      )}

      {question.question_type === 'multiple_choice' && (
        <div className="flex flex-col gap-2">
          {question.options.map(option => (
            <ChoiceOption
              key={option.id}
              option={option}
              selected={selected.includes(option.value)}
              onSelect={handleSelect}
            />
          ))}
        </div>
      )}

      {question.multiple_select && (
        <motion.button
          onClick={onNext}
          disabled={!canContinue}
          whileTap={canContinue ? { scale: 0.97 } : {}}
          style={{
            backgroundColor: canContinue ? '#C8A96E' : '#1E2A40',
            color: canContinue ? '#FFFFFF' : '#4B5563',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: 15,
            borderRadius: 8,
            border: 'none',
            padding: '14px 24px',
            cursor: canContinue ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s ease',
            width: '100%',
          }}
        >
          Continuar →
        </motion.button>
      )}
    </motion.div>
  )
}
