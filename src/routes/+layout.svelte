<script lang="ts">
  import BottomBar from '$lib/components/BottomBar/BottomBar.svelte';
  import TopBar from '$lib/components/TopBar/TopBar.svelte';

  import '../app.scss';

  let clientWidth: number;
  let isMobile: boolean;

  $: isMobile = clientWidth <= 490;
</script>

<svelte:window bind:innerWidth={clientWidth} />
{#if isMobile}
  <TopBar />
  <main class="">
    <slot />
  </main>
  <BottomBar />
{:else}
  Try on Mobile View
{/if}
