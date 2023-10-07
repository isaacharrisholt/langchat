<script lang="ts">
  import type { Avatar } from '$lib/types'
  import { localStorageStore } from '@skeletonlabs/skeleton'
  import type { Conversations, ChatMessage } from '$lib/types'
  import type { Writable } from 'svelte/store'
  import type { Language } from '$lib/types'
  import AvatarImage from './AvatarImage.svelte'
  import { capitalise } from '$lib/utils'
  import { tick } from 'svelte'

  export let language: Language
  export let avatar: Avatar

  const conversations: Writable<Partial<Conversations>> = localStorageStore(
    'langchat-conversations',
    {},
  )
  let messages: ChatMessage[]
  $: {
    if (!$conversations[language]) {
      $conversations[language] = {}
    }
    if (!$conversations[language]![avatar.name]?.length) {
      $conversations[language]![avatar.name] = []
    }
  }
  $: {
    messages = $conversations[language]![avatar.name]
  }
  let chatbox: HTMLDivElement

  async function scrollChatbox(behavior?: ScrollBehavior) {
    await tick()
    chatbox?.scrollTo({ top: chatbox.scrollHeight, behavior })
  }

  $: {
    avatar = avatar
    scrollChatbox()
  }

  async function sendMessage() {
    $conversations[language]![avatar.name].push({ role: 'user', content: newMessage })
    $conversations = $conversations
    newMessage = ''
    await scrollChatbox('smooth')
  }

  async function handleKeypress(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      await sendMessage()
    }
  }

  let newMessage: string
</script>

<div class="flex flex-col">
  <!-- Chatbox -->
  <div class="w-full overflow-y-auto h-[60vh]" bind:this={chatbox}>
    <div class="card variant-soft-surface flex flex-col gap-4 items-center p-4">
      <AvatarImage {avatar} />

      <div class="text-center">
        <p class="font-bold">{avatar.name}</p>
        <p>{capitalise(avatar.difficulty)}</p>
      </div>

      <p>{avatar.description}</p>
    </div>

    <div class="flex flex-col p-4 gap-4">
      {#each messages as message}
        {#if message.role === 'user'}
          <div class="card variant-soft-tertiary p-2 max-w-[80%] self-end w-fit">
            {message.content}
          </div>
        {:else if message.role === 'assistant'}
          <div class="card variant-soft-primary p-2 max-w-[80%] self-start w-fit">
            {message.content}
          </div>
        {/if}
      {/each}
    </div>
  </div>

  <!-- Input -->
  <div class="flex items-center gap-2">
    <textarea
      name="message"
      placeholder="Enter your message..."
      bind:value={newMessage}
      class="textarea"
      on:keypress={handleKeypress}
    />
    <button
      class="btn variant-filled-primary"
      disabled={!newMessage}
      on:click={sendMessage}>Send</button
    >
  </div>
</div>
