<script lang="ts">
  import { page } from '$app/stores';

  import ProductBox from './components/ProductBox/ProductBox.svelte';

  let params: string;

  $: params = $page.url.searchParams.get('category');
</script>

<section class="w-full flex flex-col mt-5 gap-10 pb-32">
  <nav class="flex items-center gap-1 w-full pl-5 overflow-x-auto scrollbar-hide ">
    {#each $page.data.categories as category}
      <a
        href="?category={category}"
        class:selected={category.includes(params)}
        class="text-gray-400 text-base py-2 px-6 rounded-full capitalize"
        >{category}
      </a>
    {/each}
  </nav>

  <div class="grid grid-cols-2 gap-5 px-5 ">
    {#each $page.data.products as product, index}
      {#key product}
        <ProductBox data={product} {index} />
      {/key}
    {/each}
  </div>
</section>

<style>
  .selected {
    @apply bg-black text-white;
  }
</style>
