export type Avatar = {
  name: string
  imageUrl: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  description: string
}

export type Language =
  | 'japanese'
  | 'spanish'
  | 'french'
  | 'german'
  | 'italian'
  | 'portuguese'
  | 'russian'
  | 'esperanto'
  | 'korean'
  | 'mandarin'
  | 'arabic'

export type ChatMessage = {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export type Conversations = Record<Language, Record<Avatar['name'], ChatMessage[]>>
