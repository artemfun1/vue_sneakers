<script setup>
import { inject } from 'vue'

defineProps({
  title: String,
  imageUrl: String,
  description: String,
  btnTitle: String,
  isBtn: Boolean
})
const { openDriver } = inject('cart')
</script>

<template>
  <div class="h-full flex flex-col justify-center items-center text-center">
    <img height="100" width="100" :src="'/vue_sneakers'+imageUrl" alt="infoImage" />
    <h2 class="mt-4 text-2xl font-medium">{{ title }}</h2>
    <p class="text-slate-400 mt-4">{{ description }}</p>

    <button
      v-if="isBtn"
      @click="openDriver"
      class="bg-lime-500 w-full mt-10 rounded-xl py-3 text-white hover:bg-lime-600 transition active:bg-lime-700 disabled:bg-slate-300 cursor-pointer"
    >
      {{ btnTitle }}
    </button>
  </div>
</template>
