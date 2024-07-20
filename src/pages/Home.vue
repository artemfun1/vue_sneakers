

<template>
  <SortAndSearch :onChangeSelect="onChangeSelect" :onChangeInput="onChangeInput" />

<CardList :items="items" @add-to-cart="addToCart" @add-to-favorites="addToFavorites" />
</template>

<script setup>
import SortAndSearch from '../components/SortAndSearch.vue'
import CardList from '../components/CardList.vue'
import { inject } from 'vue'

const {
  addToCart,
  addToFavorites,
  items,
  onChangeInput,
  onChangeSelect
} = inject('home')

</script>