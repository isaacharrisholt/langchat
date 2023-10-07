<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { Avatar } from '$lib/types'
  import { capitalise } from '$lib/utils'
  import AvatarImage from './AvatarImage.svelte'

  export let avatar: Avatar
  export let active = false

  const dispatch = createEventDispatcher()

  function interact(e: MouseEvent | KeyboardEvent) {
    if (e instanceof KeyboardEvent && e.key !== 'Enter') return
    dispatch('click')
  }
</script>

<button
  class="flex items-center gap-4 p-4 card snap-start min-w-fit"
  class:variant-filled-surface={active}
  on:click={interact}
>
  <AvatarImage {avatar} />

  <div class="flex flex-col gap-2 text-left w-full">
    <p class="font-bold">{avatar.name}</p>
    <p>{capitalise(avatar.difficulty)}</p>
  </div>
</button>
