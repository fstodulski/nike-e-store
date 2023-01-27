<script lang="ts">
  import { fly } from 'svelte/transition';
  import { page } from '$app/stores';
  import { Icon } from '@steeze-ui/svelte-icon';

  import { BOTTOM_NAV_LINK } from './bottom-bar.const';

  let isProductPage: boolean;

  $: isProductPage = $page.data.product;
</script>

{#if !isProductPage}
  <nav class="fixed bottom-0 left-0 w-full pb-6 grid grid-cols-4 bg-white overflow-hidden">
    {#each BOTTOM_NAV_LINK as nav}
      <a class="h-12 w-full flex items-end justify-center relative" href={nav.link}>
        {#if $page.url.pathname === nav.link}
          <div
            in:fly={{ y: -200, duration: 400 }}
            out:fly={{ y: -200, duration: 400 }}
            class="absolute top-0 flex"
          >
            <img src="/selected.svg" alt="" />
          </div>
        {/if}
        <Icon size="24px" src={nav.icon} />
      </a>
    {/each}
  </nav>
{/if}
