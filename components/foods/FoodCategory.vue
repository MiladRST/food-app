<template>
  <div class="row my-5">
    <div class="col-12">
      <h3> <slot></slot></h3>
      <hr>
    </div>
    <div class="col-12 col-md-6 col-lg-4 col-xl-3 my-2" v-for="(food , index) in category" :key="food.name">
      <nuxt-link :to="`/foods/${food.id}`" class="foodlist_card">
        <div class=" foodlist_card--img">
          <img :src="require(`~/assets/images/${food.id}.jpg`)">
        </div>
        <h5 class="foodlist_card--title"> {{ food.name }} </h5>
        <p class="foodlist_card--description"> {{food.description}} </p>
        <div class="text-right">
          <strong> {{food.price.toFixed(2)}}$</strong>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodCategory",
  props : ['category']
}
</script>

<style scoped>

</style>
