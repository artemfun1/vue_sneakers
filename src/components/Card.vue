<script setup>
defineProps({
  id: Number,
  title: String,
  imgUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
  isBtnFav: Boolean
})
</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-potinter transition hover:-translate-y-2 hover:shadow-2xl"
  >
    <img
      v-if="isBtnFav"
      @click="onClickFavorite"
      class="absolute top-8 left-8"
      :src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
      alt="like2"
    />

    <img :src="imgUrl" alt="sneakers" />
    <p class="mt-2">{{ title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate=400">Цена:</span>
        <b>{{ price }} ₽</b>
      </div>

      <img @click="onClickAdd" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="plus" />
    </div>
  </div>
</template>
