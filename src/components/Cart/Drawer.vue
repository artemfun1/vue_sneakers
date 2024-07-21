<script setup>
import { computed, inject } from 'vue'
import CartCreateOrder from './CartCreateOrder.vue'
import CartItemList from './CartItemList.vue'
import DrawerHead from './DrawerHead.vue'
import InfoBlock from './InfoBlock.vue'

const { cart } = inject('cart')
const isCartEmpty = computed(() => {
  return cart.value.length > 0
})
const { isCreatingOrder } = inject('cart')
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>

  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 flex flex-col">
    <DrawerHead />

    <CartItemList v-if="isCartEmpty && !isCreatingOrder" />

    <InfoBlock
      v-if="!isCartEmpty && !isCreatingOrder"
      image-url="/package-icon.png"
      title="Корзина пустая"
      description="Добавьте хотя бы одну пару кроссовок, чтоб сделать заказ"
      btn-title="Вернуться назад"
      :isBtn="true"
    />

    <CartCreateOrder v-if="isCartEmpty && !isCreatingOrder" />

    <InfoBlock
      v-if="!isCartEmpty && isCreatingOrder"
      image-url="/order-success-icon.png"
      title="Заказ оформлен"
      description="Номер заказа 1"
      btn-title="Вернуться назад"
      :isBtn="true"
    />
  </div>
</template>
