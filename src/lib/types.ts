export type Avatar = {
  name: string
  imageUrl: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  description: string
}

export const LANGUAGES = [
  'japanese',
  'spanish',
  'french',
  'german',
  'dutch',
  'italian',
  'portuguese',
  'russian',
  'esperanto',
  'korean',
  'mandarin',
  'arabic',
] as const

export type Language = (typeof LANGUAGES)[number]

export type ChatMessage = {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export type Conversations = Record<Language, Record<Avatar['name'], ChatMessage[]>>
