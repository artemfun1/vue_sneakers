<template >
 <div class="flex flex-col gap-4">
      <div class="flex gap-2">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ cartPrise }} ₽</b>
      </div>

      <div class="flex gap-2">
        <span>Налог:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ Math.round((cartPrise / 100) * 5) }} ₽</b>
      </div>
      <button
        @click="createOrder"
        :disabled="isDisabledBuyBtn"
        class="bg-lime-500 w-full mt-4 rounded-xl py-3 text-white hover:bg-lime-600 transition active:bg-lime-700 disabled:bg-slate-300 cursor-pointer"
      >
        {{ isCreatingOrder ? 'Заказ передан в службу доставки' : 'Оформить заказ' }}
      </button>
    </div>

</template>
<script setup>
import { inject } from 'vue'

const { cartPrise } = inject('cart')
const { createOrder } = inject('cart')
const { isDisabledBuyBtn } = inject('cart')
const { isCreatingOrder } = inject('cart')

</script>
