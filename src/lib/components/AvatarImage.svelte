<script lang="ts">
  import type { Avatar } from '$lib/types'

  export let avatar: Avatar
</script>

<img
  src={avatar.imageUrl}
  alt="{avatar.name}'s profile picture"
  class="rounded-full row-span-2"
  loading="lazy"
  height="70"
  width="70"
/>
