<script lang="ts">
  import { onMount } from 'svelte';

  import Banner from '$lib/components/Banner/Banner.svelte';

  import type { BannerType } from '../../../../components/Banner/banner.model';
  import { BANNERS } from './banners.const';

  let selectedIndex = 0;

  let activeBanner: BannerType;

  let bannersRow: HTMLElement;

  let touchstartX = 0;
  let touchstartY = 0;
  let touchendX = 0;
  let touchendY = 0;

  const selectBanner = (index) => {
    selectedIndex = index;
  };

  function handleGesture() {
    if (touchendX < touchstartX) {
      console.log('Swiped left');
      if (selectedIndex < BANNERS.length - 1) {
        selectedIndex += 1;
      }
    }

    if (touchendX > touchstartX) {
      if (selectedIndex > 0) {
        selectedIndex -= 1;
      }
    }
  }

  onMount(() => {
    bannersRow.addEventListener(
      'touchstart',
      (ev) => {
        touchstartX = ev.changedTouches[0].screenX;
        touchstartY = ev.changedTouches[0].screenY;
      },
      false
    );

    bannersRow.addEventListener(
      'touchend',
      (ev) => {
        touchendX = ev.changedTouches[0].screenX;
        touchendY = ev.changedTouches[0].screenY;

        handleGesture();
      },
      false
    );
  });

  $: activeBanner = BANNERS[selectedIndex];
</script>

<div class="flex flex-row w-full relative overflow-x-auto" bind:this={bannersRow}>
  <Banner banner={activeBanner} />
</div>

<div class="flex justify-center flex gap-3">
  {#each BANNERS as b, index}
    <span
      class="w-2 h-2 rounded-full {selectedIndex === index ? 'bg-gray-900' : 'bg-gray-300'}"
      on:click={() => selectBanner(index)}
    />
  {/each}
</div>
