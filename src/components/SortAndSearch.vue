<script setup>
defineProps({
  onChangeSelect: Function,
  onChangeInput: Function
})
</script>

<template>
  <div class="flex justify-between items-center">
    <h2 class="text-3xl font-bold">Все кроссовки</h2>

    <div class="flex gap-4 max-lg:block">
      <select
        @change="onChangeSelect"
        class="py-2 px-3 border rounded-md outline-none cursor-pointer"
      >
        <option value="name">По названию</option>
        <option value="price">По цене(дешевле)</option>
        <option value="-price">По цене(дороже)</option>
      </select>

      <div class="relative max-lg:mt-1">
        <img class="absolute left-4 top-3" src="/search.svg" alt="search" />
        <input
          @input="onChangeInput"
          class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
          placeholder="Поиск..."
          type="text"
        />
      </div>
    </div>
  </div>
</template>
