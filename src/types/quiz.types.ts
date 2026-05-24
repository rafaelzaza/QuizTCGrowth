export type StepType = 'question' | 'fact' | 'result'
export type QuestionType = 'grid' | 'list' | 'multiple_choice'
export type OptionType = 'grid_item' | 'list_item' | 'choice_item'

export interface QuizOption {
  id: string
  type: OptionType
  label: string
  value: string
  emoji?: string
  image?: string
  subtext?: string
}

export interface QuizCondition {
  question_id: string
  values: string[]
}

export interface QuizQuestion {
  id: string
  step?: number
  type: 'question'
  question_type: QuestionType
  body: string
  subtitle?: string
  required: boolean
  multiple_select: boolean
  options: QuizOption[]
  condition?: QuizCondition
  default?: boolean
}

export interface QuizFact {
  id: string
  step: number
  type: 'fact'
  body: string
  headline: string
  description: string
  image?: string
  cta_label: string
  cta_action: 'next_step'
}

export interface QuizResult {
  id: string
  type: 'result'
  headline: string
  body: string
  cta_label: string
  cta_action: 'redirect_vsl'
  cta_url: string
}

export type QuizStep = QuizQuestion | QuizFact | QuizResult
