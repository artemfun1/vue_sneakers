<template>
  <div v-auto-animate class="grid grid-cols-4 gap-5 mt-8 max-lg:grid-cols-2 max-lg:gap-5">
    <Card
      v-for="el in items"
      :id="el.id"
      :key="el.id"
      :title="el.title"
      :imgUrl="el.imageUrl"
      :price="el.price"
      :isAdded="el.isAdded"
      :isFavorite="el.isFavorite"
      :onClickAdd="() => emit('addToCart', el)"
      :onClickFavorite="() => emit('addToFavorites', el)"
    />
  </div>
</template>

<script setup>

import Card from './Card.vue'

defineProps({
  items: Array
})



const emit = defineEmits(['addToFavorites', 'addToCart'])
</script>
