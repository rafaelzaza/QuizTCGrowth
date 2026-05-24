import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { quizSteps, quizResult } from './data/quiz'
import type { QuizQuestion as QuizQuestionType, QuizFact as QuizFactType } from './types/quiz.types'
import QuizHeader from './components/quiz/QuizHeader'
import QuizQuestion from './components/quiz/QuizQuestion'
import QuizFact from './components/quiz/QuizFact'
import QuizResult from './components/quiz/QuizResult'

export default function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [isComplete, setIsComplete] = useState(false)

  // Filtra os steps baseado nas respostas acumuladas:
  // Steps sem condition aparecem sempre.
  // Steps com condition só aparecem se a resposta à question_id estiver nos values.
  const activeSteps = quizSteps.filter(step => {
    if (step.type !== 'question') return true
    const condition = (step as QuizQuestionType).condition
    if (!condition) return true
    const answer = answers[condition.question_id]
    if (answer === undefined) return false
    const answered = Array.isArray(answer) ? answer : [answer]
    return condition.values.some(v => answered.includes(v))
  })

  const totalQuestions = activeSteps.filter(s => s.type === 'question').length
  const currentQuestionNumber = activeSteps
    .slice(0, currentStep + 1)
    .filter(s => s.type === 'question').length

  function handleAnswer(questionId: string, value: string | string[]) {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  function nextStep() {
    if (currentStep >= activeSteps.length - 1) {
      setIsComplete(true)
    } else {
      setCurrentStep(s => s + 1)
    }
  }

  const step = activeSteps[currentStep]
  const totalSteps = activeSteps.length

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0B1020',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <QuizHeader
        currentQuestion={isComplete ? totalQuestions : currentQuestionNumber}
        totalQuestions={totalQuestions}
        progress={isComplete ? 100 : (currentStep / totalSteps) * 100}
      />

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px 24px 48px',
        }}
      >
        <div style={{ width: '100%', maxWidth: 560 }}>
          <AnimatePresence mode="wait">
            {isComplete ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <QuizResult result={quizResult} />
              </motion.div>
            ) : (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                {step.type === 'question' && (
                  <QuizQuestion
                    question={step as QuizQuestionType}
                    onAnswer={handleAnswer}
                    onNext={nextStep}
                  />
                )}
                {step.type === 'fact' && (
                  <QuizFact
                    fact={step as QuizFactType}
                    onNext={nextStep}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
