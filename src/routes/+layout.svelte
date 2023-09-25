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

<main class="grid place-items-center w-screen h-screen p-8 lg:p-16 xl:p-24">
  <slot />
</main>
