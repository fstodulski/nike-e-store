<script lang="ts">
  import { fly } from 'svelte/transition';
  import { ChevronRight } from '@steeze-ui/heroicons';
  import { Icon } from '@steeze-ui/svelte-icon';

  export let data: any;
  export let index: number;
</script>

<div
  class="flex flex-col rounded-2xl bg-gray-100 px-4 pt-6 pb-5 gap-6"
  in:fly={{ duration: 800, y: 200, delay: index * 300 }}
>
  <figure class="w-full">
    <img src={data.img} alt="" />
  </figure>

  <div class="flex flex-col">
    <h5 class="font-bold text-lg">{data.name}</h5>
    <div class="flex items-start justify-between">
      <span class="text-base">${data.price}</span>
      <button class="bg-white p-1 rounded-lg"> <Icon src={ChevronRight} size="18px" /></button>
    </div>
  </div>
</div>
