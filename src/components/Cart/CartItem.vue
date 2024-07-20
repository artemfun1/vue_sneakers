<template>
  <div class="flex items-center border border-slate-200 p-4 rounded-xl gap-4">
    <img class="w-16 h-16" :src="imgUrl" alt="sneakers" />

    <div class="flex flex-col flex-1">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-2">
        <b class="flex-1">{{ price }} ₽</b>
        <img
          @click="() => addToCart(item)"
          class="opacity-40 hover:opacity-100 cursor-pointer transition"
          src="/close.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue'

defineProps({
  item: Object,
  title: String,
  imgUrl: String,
  price: Number
})

const { addToCart } = inject('cart')
</script>
