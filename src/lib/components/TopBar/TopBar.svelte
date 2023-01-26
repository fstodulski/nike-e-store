<script lang="ts">
  import { page } from '$app/stores';
  import { Bars3, ShoppingBag } from '@steeze-ui/heroicons';
  import { Icon } from '@steeze-ui/svelte-icon';

  let isHomePage: boolean;

  $: isHomePage = $page.url.pathname === '/';
</script>

<header class="flex items-center justify-between px-5 pt-3 pb-1 sticky top-0 bg-white z-50">
  <div class="flex items-center gap-3">
    <button class="btn">
      {#if isHomePage}
        <Icon src={Bars3} size="20px" />
      {/if}
    </button>

    {#if isHomePage}
      <figure class="max-h-[38px] flex items-center">
        <img src="/logo.png" alt="" />
      </figure>
    {/if}
  </div>

  <button class="btn">
    <Icon src={ShoppingBag} size="20px" />
  </button>
</header>
