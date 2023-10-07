<script lang="ts">
  import '../app.postcss'
  import { initializeStores, Toast } from '@skeletonlabs/skeleton'

  initializeStores()

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

<Toast />
<main class="grid place-items-center w-full md:px-8 lg:px-16 md:py-4">
  <slot />
</main>
