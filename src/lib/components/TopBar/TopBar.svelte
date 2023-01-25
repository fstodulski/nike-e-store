<script lang="ts">
  import { Bars3, ShoppingBag } from '@steeze-ui/heroicons';
  import { Icon } from '@steeze-ui/svelte-icon';
</script>

<header class="flex items-center justify-between px-5 pt-3 pb-1 sticky top-0 bg-white z-50">
  <div class="flex items-center gap-3">
    <button class="btn">
      <Icon src={Bars3} size="20px" />
    </button>

    <figure>
      <img src="/logo.png" alt="" />
    </figure>
  </div>

  <button class="btn">
    <Icon src={ShoppingBag} size="20px" />
  </button>
</header>
