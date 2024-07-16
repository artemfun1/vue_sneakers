<template >
  <div class="grid grid-cols-4 gap-5">

    <Card
      title="Мужские кроссовки Nike Blazer Mid Suede"
      imgUrl="/sneakers/sneakers-1.jpg"
      :price="1111"
      :isAdded="false"
      :isFavorite="false"
      :onClickAdd="onClickAdd"
      :onClickFavorite="onClickFavorite"
    />

  </div>
</template>
<script setup>
import Card from './Card.vue'



const onClickAdd=()=>{
  console.log(1)
}
const onClickFavorite=()=>{
  console.log(1)
}


</script>
