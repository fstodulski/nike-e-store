<script lang="ts">
  import { page } from '$app/stores';
  import { draggable } from '@neodrag/svelte';
  import { ChevronDoubleDown, ShoppingBag } from '@steeze-ui/heroicons';
  import { Icon } from '@steeze-ui/svelte-icon';

  import { CartStore } from '../../../../core/stores/cart/cart.store';

  let button: HTMLElement;

  const addToCard = () => {
    button.style.translate = '0px 0px';

    CartStore.update((store) => {
      return [...store, $page.data.product];
    });
  };
</script>

<div class="flex flex-col w-full items-center mt-auto">
  <div class="relative">
    <div class="flex flex-col items-center absolute inset-x-0 -inset-y-8 gap-2">
      <span class="text-gray-900 text-sm font-bold">Swipe down to add</span>

      <button
        class="inline-flex flex-col bg-black text-white p-3 rounded-full gap-4 duration-300"
        bind:this={button}
        on:neodrag:end={addToCard}
        use:draggable={{
          axis: 'y',
          transform: ({ offsetY, rootNode }) => {
            if (offsetY < 20) rootNode.style.translate = `0px ${offsetY}px`;
          }
        }}
      >
        <Icon src={ShoppingBag} size="24px" />

        <span class="flex flex-col">
          <Icon src={ChevronDoubleDown} size="24px" class="opacity-60" />
          <Icon src={ChevronDoubleDown} size="24px" class="-mt-3" />
        </span>
      </button>
    </div>
    <img class="" src="/box.svg" alt="" />
  </div>
</div>
