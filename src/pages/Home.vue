<template>
  <SortAndSearch :onChangeSelect="onChangeSelect" :onChangeInput="onChangeInput" />

  <CardList
    :is-btn-fav="true"
    :items="items"
    @add-to-cart="addToCart"
    @add-to-favorites="addToFavorites"
    
  />
  <button
      @click="clearAll"
      class="border-8 m-6 cursor-pointer active:bg-slate-500 hover:bg-slate-400"
    >
      Техническая кнопка - очистка на сервере заказы/закладки и localStorage
    </button>
</template>

<script setup>
import { inject } from 'vue'
import CardList from '../components/CardList.vue'
import SortAndSearch from '../components/SortAndSearch.vue'

const { addToCart, addToFavorites, items, onChangeInput, onChangeSelect,clearAll } = inject('home')
</script>
