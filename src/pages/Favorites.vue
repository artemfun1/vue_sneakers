<script setup>
import InfoBlock from '../components/Cart/InfoBlock.vue'



import { useRouter } from 'vue-router'

const router = useRouter()
console.log(router.currentRoute.value.fullPath)
router.push('')


</script>

<template>
 
 <InfoBlock image-url="/package-icon.png" title="Корзина пустая" description="Добавьте хотя бы одну пару кроссовок, чтоб сделать заказ" btn-title="Вернуться назад"/>

</template>