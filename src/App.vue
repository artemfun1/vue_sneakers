<script setup>
import axios from 'axios'
import { onMounted, reactive, ref, watch } from 'vue'
import CardList from './components/CardList.vue'
import Header from './components/Header.vue'

const items = ref([])

const filters = reactive({
sortBy:'title',
searchQuery:''
})

const onChangeSelect = e =>{
  filters.sortBy = e.target.value
}
const onChangeInput= e =>{
filters.searchQuery = e.target.value
}

const fetchItems=async()=>{
  try {
    const params={
      sortBy:filters.sortBy,
      

    }

    if(filters.searchQuery){
      params.title=`*${filters.searchQuery}*`
    }

    const {data} = await axios.get(`https://00d0e9355f119a94.mokky.dev/items`,{
      params
    })
  items.value = [...data]
  } catch (err) {
    console.log(err)
  }
}


onMounted(fetchItems)

watch(filters,fetchItems)




</script>

<template>
  <!-- <Drawer/> -->
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header />

    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold">Все кроссовки</h2>

        <div class="flex gap-4">
          <select @change="onChangeSelect"  class="py-2 px-3 border rounded-md outline-none cursor-pointer">
            <option value="name">По названию</option>
            <option value="price">По цене(дешевле)</option>
            <option value="-price">По цене(дороже)</option>
          </select>

          <div class="relative">
            <img class="absolute left-4 top-3" src="/search.svg" alt="search" />
            <input 
            @input="onChangeInput" 
              class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
              placeholder="Поиск..."
              type="text"
            />
          </div>
        </div>
      </div>

      <CardList :items="items" />
    </div>
  </div>
</template>

<style></style>
