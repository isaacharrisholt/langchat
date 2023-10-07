import type { Avatar, ChatMessage, Language } from './types'
import { encodeChat, encode } from 'gpt-tokenizer'

const TOKEN_LIMIT = 7000
const MODEL = 'gpt-4'

function generateChat(
  message: string,
  systemMessage: ChatMessage,
  history: ChatMessage[],
) {
  const chat: ChatMessage[] = []
  const systemTokens = encode(systemMessage.content)
  const messageTokens = encode(message)

  if (systemTokens.length + messageTokens.length > TOKEN_LIMIT) {
    throw new Error('Message exceeds token limit')
  }

  const historyTokenLimit = TOKEN_LIMIT - systemTokens.length - messageTokens.length
  for (const historyMessage of history.reverse()) {
    chat.push(historyMessage)
    if (encodeChat(chat, MODEL).length > historyTokenLimit) {
      chat.pop()
      break
    }
  }

  return [systemMessage, ...chat.reverse(), { role: 'user', content: message }]
}

function generateSystemPrompt(language: Language, avatar: Avatar): ChatMessage {
  let prompt = `You are LangChat, an AI language learning assistant.
        Your goal is to help the user learn ${language} by chatting with them.

        You should point out any mistakes the user makes, and provide corrections
        where necessary. Mistakes and corrections should be provided in the user's
        language, with the correct form in ${language}. Mistakes may include
        incorrect grammar, spelling, or word choice.

        You are playing the role of ${avatar.name}, and should communicate at a
        ${avatar.difficulty} level.
        ${avatar.description}`

  if (avatar.difficulty !== 'beginner') {
    prompt =
      prompt +
      `\nYou should always respond to the user's messages in only ${language}, though
        the user may respond in the language of their choice.`
  }

  if (avatar.difficulty !== 'advanced') {
    prompt =
      prompt +
      `\nRespond in ${language} characters, providing pronunciation in the
        user's language if necessary.
        
        You should also provide explanations of any ${language} words or phrases
        that the user may not understand.`
  }

  return {
    role: 'system',
    content: prompt,
  }
}

export async function sendChatMessage(
  message: string,
  history: ChatMessage[],
  apiKey: string,
  language: Language,
  avatar: Avatar,
): Promise<ChatMessage> {
  const systemMessage = generateSystemPrompt(language, avatar)
  const chat = generateChat(message, systemMessage, history)

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: chat,
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to send chat message: ${await response.text()}`)
  }

  const responseMessage = (await response.json()).choices[0].message?.content as string
  return {
    role: 'assistant',
    content: responseMessage,
  }
}
