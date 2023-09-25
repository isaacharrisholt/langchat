<script lang="ts">
  import { onMount } from 'svelte'
  import type { Avatar } from '$lib/types'
  import AvatarCard from '$lib/components/AvatarCard.svelte'
  import Chatbox from '$lib/components/Chatbox.svelte'

  onMount(() => {
    // Load token from local storage
    token = localStorage.getItem('langchat-gpt-token') || ''
  })

  let token = ''
  function saveToken() {
    // Store token in local storage
    localStorage.setItem('langchat-gpt-token', token)
  }

  const avatars: Avatar[] = [
    {
      name: 'Franklin',
      imageUrl: 'https://avatars.dicebear.com/api/avataaars/franklin.svg',
      difficulty: 'beginner',
      description: 'Franklin is a beginner',
    },
    {
      name: 'Eleanor',
      imageUrl: 'https://avatars.dicebear.com/api/avataaars/eleanor.svg',
      difficulty: 'intermediate',
      description: 'Eleanor is an intermediate',
    },
    {
      name: 'Isaac',
      imageUrl: 'https://avatars.dicebear.com/api/avataaars/isaac.svg',
      difficulty: 'advanced',
      description: 'Isaac is your favourite YouTuber 😉',
    },
  ]

  let activeAvatarIndex = 0
  $: activeAvatar = avatars[activeAvatarIndex]
</script>

<div class="card variant-soft-surface flex flex-col gap-8 w-full">
  <form>
    <label for="gpt-token">Enter your ChatGPT API token here</label>
    <div class="flex flex-row items-center">
      <input type="password" name="gpt-token" class="input" bind:value={token} />
      <button class="btn variant-filled-surface" type="button" on:click={saveToken}
        >Save</button
      >
    </div>
  </form>
  <div class="grid grid-cols-[auto_1fr]">
    <div class="flex flex-col">
      {#each avatars as avatar, i}
        <AvatarCard
          {avatar}
          active={i === activeAvatarIndex}
          on:click={() => (activeAvatarIndex = i)}
        />
      {/each}
    </div>
    <Chatbox avatar={activeAvatar} language="japanese" />
  </div>
</div>
