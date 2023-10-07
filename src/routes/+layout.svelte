<script lang="ts">
  import '../app.postcss'

  // Floating UI for Popups
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from '@floating-ui/dom'
  import { storePopup } from '@skeletonlabs/skeleton'
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })
</script>

<svelte:head>
  <title>LangChat</title>
</svelte:head>

<main class="grid place-items-center w-screen h-screen md:p-8 lg:p-16">
  <slot />
</main>
