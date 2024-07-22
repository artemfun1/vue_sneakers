import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useItemsStore = defineStore('count', () => {
  const ItemsData = ref([])

  const fetchData = async (params) => {
    const { data } = await axios.get(`https://00d0e9355f119a94.mokky.dev/items`, {
      params
    })
    ItemsData.value = [...data]
  }

  return { ItemsData, fetchData }
})
