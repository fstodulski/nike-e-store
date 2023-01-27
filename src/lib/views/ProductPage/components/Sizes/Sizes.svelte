<script lang="ts">
  import { page } from '$app/stores';

  import { SIZES } from '$lib/views/ProductPage/components/Sizes/sizes.const.js';
</script>

<div class="flex flex-col items-start gap-2">
  <span class="text-sm font-bold">Size</span>

  <div class="flex flex-col items-start gap-3">
    {#each SIZES as size}
      <a
        href="?size={size}"
        class="size-btn"
        class:selected={$page.url.searchParams.get('size') === size}>UK {size}</a
      >
    {/each}
  </div>
</div>

<style lang="scss">
  .size-btn {
    @apply py-2 px-3 rounded-xl border-gray-200 bg-white border text-sm;

    &.selected,
    &:focus {
      @apply border-gray-900;
    }
  }
</style>
