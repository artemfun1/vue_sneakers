<template>
  <div class="grid grid-cols-4 gap-5 mt-8">
    <Card
      v-for="el in items"
      :key="el.id"
      :title="el.title"
      :imgUrl="el.imageUrl"
      :price="el.price"
      :isAdded="false"
      :isFavorite="false"
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
