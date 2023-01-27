<script lang="ts">
  import { page } from '$app/stores';

  import AddToCard from '$lib/views/ProductPage/components/AddToCard/AddToCard.svelte';
  import Bookmark from '$lib/views/ProductPage/components/Bookmark/Bookmark.svelte';
  import Colors from '$lib/views/ProductPage/components/Colors/Colors.svelte';
  import Sizes from '$lib/views/ProductPage/components/Sizes/Sizes.svelte';
</script>

<section class="w-full flex flex-col view overflow-hidden">
  <div class="relative">
    <figure class="absolute w-full flex items-center justify-center h-full z-0 pointer-events-none">
      <img src="/NIKE.svg" alt="" />
    </figure>

    <div class="grid grid-cols-4 w-full z-10 px-5 overflow-hidden">
      <div class="col-start-1 col-end-2 pt-32">
        <Sizes />
      </div>

      <div class="col-start-2 col-end-4 items-center flex ">
        <figure class="w-full flex justify-center relative ">
          <img
            class="scale-[2.4] -rotate-[10deg] absolute inset-x-0 inset-y-0"
            src={$page.data.product.img}
            alt=""
          />
        </figure>
      </div>

      <div class="col-start-4 col-end-5 pt-40 flex flex-col items-end gap-24">
        <Bookmark />
        <Colors />
      </div>
    </div>

    <div class="w-full px-5 flex flex-col items-start">
      <div class="flex flex-col items-center">
        <span class="font-bold text-3xl text-gray-900">
          <span class="text-base font-light">$</span>30.99
        </span>

        <span class="text-base text-red-500">10% OFF</span>
      </div>
    </div>
  </div>

  <AddToCard />
</section>

<style>
  .view {
    height: calc(100vh - 54px);
  }
</style>
