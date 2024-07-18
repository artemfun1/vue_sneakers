<template>
  <div class="grid grid-cols-4 gap-5 mt-8 max-lg:grid-cols-2 max-lg:gap-2">
    <Card
      v-for="el in items"
      :key="el.id"
      :title="el.title"
      :imgUrl="el.imageUrl"
      :price="el.price"
      isAdded
      isFavorite
      :onClickAdd="onClickAdd"
      :onClickFavorite="onClickFavorite"
    />
  </div>
</template>

<script setup>
import Card from './Card.vue'

defineProps({
  items: Array
})

console.log()

const onClickAdd = () => {
  console.log(1)
}
const onClickFavorite = () => {
  console.log(1)
}
</script>
