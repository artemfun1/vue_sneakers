<template>
  <div v-auto-animate class="flex flex-col gap-4 h-full overflow-scroll">

    
    <CartItem
      v-for="el in cart"
      :id="el.id"
      :key="el.id"
      :title="el.title"
      :imgUrl="el.imageUrl"
      :price="el.price"
      :item="el"
    />
  </div>
</template>

<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'

const { cart } = inject('cart')
</script>
