<template>
  <SortAndSearch :onChangeSelect="onChangeSelect" :onChangeInput="onChangeInput" />

  <CardList
    :is-btn-fav="true"
    :items="items"
    @add-to-cart="addToCart"
    @add-to-favorites="addToFavorites"
  />
</template>

<script setup>
import { inject } from 'vue'
import CardList from '../components/CardList.vue'
import SortAndSearch from '../components/SortAndSearch.vue'

const { addToCart, addToFavorites, items, onChangeInput, onChangeSelect } = inject('home')
</script>
