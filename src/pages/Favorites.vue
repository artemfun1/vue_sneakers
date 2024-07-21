<script setup>
import CardList from '@/components/CardList.vue'
import InfoBlock from '@/components/Cart/InfoBlock.vue'

import { inject, onMounted } from 'vue'

const {
  favorites,
  addToCart,
  addToFavorites,

  fetchFavoritesForPage
} = inject('home')

onMounted(() => {
  fetchFavoritesForPage()
})
</script>

<template>
  <div v-if="favorites.length > 0">
    <CardList
      :is-btn-fav="false"
      :items="favorites"
      @add-to-cart="addToCart"
      @add-to-favorites="addToFavorites"
    />
  </div>

  <InfoBlock
    v-else
    image-url="/emoji-2.png"
    title="Закладок нет"
    description="Добавьте хотя бы одну пару кроссовок в закладки"
    :isBtn="false"
    btn-title="Вернуться назад"
  />
</template>
