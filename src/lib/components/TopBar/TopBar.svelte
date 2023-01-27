<script lang="ts">
  import { fly } from 'svelte/transition';
  import { page } from '$app/stores';
  import { ArrowLeft, Bars3, ShoppingBag } from '@steeze-ui/heroicons';
  import { Icon } from '@steeze-ui/svelte-icon';

  import { APP_ROUTES } from '$lib/core/constants/app-routes.const';
  import { CartStore } from '$lib/core/stores/cart/cart.store';

  let isHomePage: boolean;
  let isProductPage: boolean;

  $: isHomePage = $page.url.pathname === '/';
  $: isProductPage = $page.data.product;
</script>

<header class="flex items-center justify-between px-5 pt-3 pb-1 sticky top-0 bg-white z-50">
  <div class="flex items-center gap-3">
    <button class="btn">
      {#if isHomePage}
        <Icon src={Bars3} size="20px" />
      {/if}

      {#if isProductPage}
        <a href={APP_ROUTES.index}>
          <Icon src={ArrowLeft} size="20px" />
        </a>
      {/if}
    </button>

    {#if isHomePage}
      <figure class="max-h-[38px] flex items-center">
        <img src="/logo.png" alt="" />
      </figure>
    {/if}
  </div>

  {#if isProductPage}
    <h1 class="text-lg font-bold">{$page.data.product.name}</h1>
  {/if}

  <button class="btn relative">
    {#key $CartStore.length}
      <div
        in:fly={{ duration: 800, y: -10, opacity: 0.4 }}
        class="text-[8px] flex items-center justify-center absolute -top-1.5 -left-1.5 bg-black rounded-full p-1 text-white w-4 h-4"
      >
        {$CartStore.length}
      </div>
    {/key}
    <Icon src={ShoppingBag} size="20px" />
  </button>
</header>
