<template>
  <div class="container">
    <SearchFood :filter="filters"></SearchFood>
    <div class="row" v-if="filteredList.length < 1">
      <div class="col-12 mb-4">
        <div class="no_result">
          <img src="~/assets/images/empty.svg" class="img-fluid" alt="">
          <div>
            <p>No Result Found</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5" v-else style="min-height: 400px">
      <template v-for="(food  , index) in filteredList">
        <div class="col-12 col-md-6 col-lg-4" :key="food.id">
          <nuxt-link :to="`/foods/${food.id}`" class="foodlist_card">
            <div class=" foodlist_card--img">
              <img :src="require(`~/assets/images/${food.id}.jpg`)">
            </div>

            <h5 class="foodlist_card--title">{{food.name}}</h5>
            <p class="foodlist_card--description">{{food.description}}</p>
            <div class="text-right">
              <strong> {{food.price.toFixed(2)}}$</strong>
            </div>

          </nuxt-link>

        </div>
      </template>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import SearchFood from "~/components/foods/SearchFood";

export default {
  name:'FoodList',
  fetch() {
    this.$store.commit('SET_FOODS' , this.filters.type )
  },
  fetchOnServer: false ,
  data() {
    return {
      filters : {
        query: '',
        type: 'all'
      }
    }
  },
  computed :{
    ...mapGetters(['getFoods' , 'getFiltered']),
    filteredList () {
      return this.getFiltered.filter((item)=> {
        return item.name.toLowerCase().includes(this.filters.query.toLowerCase())
      })
    }
  },
  components: {
    SearchFood,
  },
  watch: {
    'filters.type' : function() {
        this.$store.commit('SET_FOODS' , this.filters.type)
    }
  }
}
</script>

<style scoped>

</style>
