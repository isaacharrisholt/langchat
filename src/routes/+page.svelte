<script lang="ts">
  import { onMount } from 'svelte'
  import type { Avatar } from '$lib/types'
  import AvatarCard from '$lib/components/AvatarCard.svelte'
  import Chatbox from '$lib/components/Chatbox.svelte'
  import { LANGUAGES } from '$lib/types'
  import { AVATARS } from '$lib/avatars'
  import { capitalise } from '$lib/utils'
  import { localStorageStore } from '@skeletonlabs/skeleton'

  onMount(() => {
    // Load token from local storage
    token = localStorage.getItem('langchat-gpt-token') || ''
  })

  let token = ''
  function saveToken() {
    // Store token in local storage
    localStorage.setItem('langchat-gpt-token', token)
  }

  const selectedLanguage = localStorageStore('langchat-selected-language', LANGUAGES[0])
  const activeAvatarIndex = localStorageStore('langchat-active-avatar-index', 0)

  let activeAvatar: Avatar
  $: activeAvatar = AVATARS[$selectedLanguage][$activeAvatarIndex]
</script>

<div class="card variant-soft-surface flex flex-col gap-2 md:gap-8 w-full">
  <form class="p-2">
    <label for="gpt-token">Enter your GPT-4-compatible API token here</label>
    <div class="flex flex-row items-center">
      <input type="password" name="gpt-token" class="input" bind:value={token} />
      <button class="btn variant-filled-surface" type="button" on:click={saveToken}
        >Save</button
      >
    </div>
  </form>

  <form class="p-2">
    <label for="language">Choose a language to chat in</label>
    <select name="language" class="select" bind:value={$selectedLanguage}>
      {#each LANGUAGES as language}
        <option value={language}>{capitalise(language)}</option>
      {/each}
    </select>
  </form>

  <div class="grid md:grid-cols-[auto_1fr]">
    <div class="flex md:flex-col card variant-soft-surface overflow-auto snap-x">
      {#each AVATARS[$selectedLanguage] ?? [] as avatar, i}
        <AvatarCard
          {avatar}
          active={i === $activeAvatarIndex}
          on:click={() => ($activeAvatarIndex = i)}
        />
      {/each}
    </div>
    <Chatbox avatar={activeAvatar} language={$selectedLanguage} />
  </div>
</div>
