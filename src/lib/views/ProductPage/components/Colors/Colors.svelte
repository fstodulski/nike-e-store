<div class="flex flex-col items-end gap-2">
  <span class="text-sm font-bold">Colour</span>

  <div class="flex flex-col items-start gap-3">
    <button class="color-btn">
      <div class="red" />
    </button>

    <button class="color-btn">
      <div class="blue" />
    </button>
  </div>
</div>

<style lang="scss">
  .color-btn {
    @apply p-2 border border-gray-200 bg-white rounded-xl;

    &:focus {
      @apply border-gray-900;
    }
  }

  .red {
    @apply bg-red-500 w-4 h-4 rounded-sm;
  }

  .blue {
    @apply bg-blue-500 w-4 h-4 rounded-sm;
  }
</style>
