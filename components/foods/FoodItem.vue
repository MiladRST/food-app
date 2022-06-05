<template>
    <div class="row">
      <div class="col-12">
        <div class="single_product">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="food_item-img">
                  <img :src="require(`~/assets/images/${currentItem[0].id}.jpg`)" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <h3> {{currentItem[0].name}}</h3>
                <p> {{currentItem[0].description}}</p>

                <hr>

                <div class="order_items-wrapper">
                  <PartialsAppCounter :number="number"></PartialsAppCounter>
                  <button class="btn order_btn" @click="addToCard" style="border-radius: 16px"> Add to card | <strong> {{ (currentItem[0].price* number.count).toFixed(2) }}$</strong> </button>
                </div>



              </div>
            </div>

          <div class="row">

          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "FoodItem",
  props: ['id'],
  created() {
    if(this.currentItem[0].num) {
      this.number.count = this.currentItem[0].num;
    } else {
      this.number.count = 1;
    }
  },
  data() {
    return {
      number: {
        count: 1,
      },
    }
  },
  computed: {
    ...mapGetters(['getFoods' , 'getCard']),
    currentItem () {
      return this.getFoods.filter( (item) => {
        return item.id === Number(this.id);
      })
    },
  },
  methods : {
    addToCard() {
      if(this.number.count > 0) {
        this.$store.commit('ADD_CARD' , {id: Number(this.id) , num : Number(this.number.count)});
        this.$store.commit('TOTAL_PRICE', Number(this.number.count));
      } else {
        alert('Wrong!');
      }
    }
  }
}
</script>

<style scoped>

</style>
