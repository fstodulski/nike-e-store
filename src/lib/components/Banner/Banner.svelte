<script lang="ts">
  import { fly } from 'svelte/transition';

  import type { BannerType } from './banner.model';

  export let banner: BannerType;
</script>

{#key banner}
  <div class="w-full items-center flex-nowrap relative py-4 overflow-hidden">
    <div class="rounded-2xl bg-gray-200 px-6 pt-8 pb-5 mx-5">
      <div class="flex flex-col mr-auto items-start">
        <h2
          in:fly={{ duration: 300, y: 100, opacity: 0, delay: 1200 }}
          class="text-gray-900 text-xl font-bold"
        >
          {@html banner.title}
        </h2>
        <span in:fly={{ duration: 300, y: 100, opacity: 0, delay: 1500 }}>
          {banner.subTitle}
        </span>

        <a
          in:fly={{ duration: 300, y: 100, opacity: 0, delay: 1800 }}
          href={banner.cta.link}
          class="bg-gray-900 px-6 py-2 rounded-full text-white text-xs mt-6"
        >
          {banner.cta.label}
        </a>
      </div>
    </div>
    <!--{#key banner}-->
    <figure in:fly={{ duration: 1200, y: 100, opacity: 0 }} class="absolute top-0 right-0">
      <img src={banner.img} alt="" />
    </figure>
    <!--{/key}-->
  </div>
{/key}
