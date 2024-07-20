<template>
  <Drawer v-if="isDrawerOpen" />

  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14 h-full">
    <Header :total-price="cartPrise" @open-drawer="openDriver" />

    <div class="p-10">

<router-view></router-view>

  
    </div>

    <button
      @click="clearOrder"
      class="border-8 m-6 cursor-pointer active:bg-slate-500 hover:bg-slate-400"
    >
      Техническая кнопка - очистить заказы пользователя на сервере и localStorage
    </button>
  </div>
</template>




<script setup>
import axios from 'axios'
import { computed, onMounted, provide, reactive, ref, watch } from 'vue'
import Drawer from './components/Cart/Drawer.vue'
import Header from './components/Header.vue'



const items = ref([])
const cart = ref([])
const cartPrise = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))
const isDisabledBuyBtn = ref(true)
const isCreatingOrder = ref(false)
const isDrawerOpen = ref(false)

const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

const onChangeSelect = (e) => {
  filters.sortBy = e.target.value
}
const onChangeInput = (e) => {
  filters.searchQuery = e.target.value
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://00d0e9355f119a94.mokky.dev/items`, {
      params
    })
    items.value = [...data].map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
  } catch (err) {
    console.log(err)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`https://00d0e9355f119a94.mokky.dev/favorites`)
    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.parentId === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const addToFavorites = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        parentId: item.id
      }

      const { data } = await axios.post('https://00d0e9355f119a94.mokky.dev/favorites', obj)

      item.isFavorite = true
      item.favoriteId = data.id
    } else {
      await axios.delete(`https://00d0e9355f119a94.mokky.dev/favorites/${item.favoriteId}`)
      item.isFavorite = false
      item.favoriteId = null
    }
  } catch (error) {
    console.log(error)
  }
}

const addToCart = (item) => {
  if (!item.isAdded) {
    cart.value.push(item)
    item.isAdded = true
  } else {
    cart.value.splice(cart.value.indexOf(item), 1)
    item.isAdded = false
  }
}

const createOrder = async () => {
  try {
    const { data } = await axios.post('https://00d0e9355f119a94.mokky.dev/orders', {
      items: cart.value,
      totalPrice: cartPrise.value
    })
    cart.value.forEach((item) => (item.isAdded = false))
    cart.value = []
    isCreatingOrder.value = true
    return data
  } catch (error) {
    console.log(error)
  }
}

const clearOrder = async () => {
  try {
    isCreatingOrder.value = false
    await axios.patch('https://00d0e9355f119a94.mokky.dev/orders', [])
  } catch (error) {
    console.log(error)
  }
  localStorage.clear()
}

onMounted(async () => {
  const localCart = localStorage.getItem('cart')
  cart.value = localCart ? JSON.parse(localCart) : []

  await fetchItems()
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }))
  await fetchFavorites()
})

const openDriver = () => {
  isDrawerOpen.value = !isDrawerOpen.value
  isCreatingOrder.value = false
}

watch(filters, fetchItems)
watch(
  cart,
  () => {
    if (cart.value.length > 0) {
      isDisabledBuyBtn.value = false
    } else {
      isDisabledBuyBtn.value = true
    }
  },
  { deep: true }
)
watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true }
)

provide('cart', {
  openDriver,
  cart,
  addToCart,
  cartPrise,
  createOrder,
  isDisabledBuyBtn,
  isCreatingOrder
})
provide('home',{
  addToCart,
  addToFavorites,
  items,
  onChangeInput,
  onChangeSelect
})
</script>

