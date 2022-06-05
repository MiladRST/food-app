<template>
  <div class="row">

    <div class="col-12 my-4" v-if="cardData.length">

      <div class="appcard_item" v-for="(food , index) in cardData" :key="index">
        <nuxt-link :to="`/foods/${food.id}`" class="appcard_item--img">
          <img :src="require(`~/assets/images/${food.id}.jpg`)"  alt="">
        </nuxt-link>
<!--        <div class="btn appcard_item&#45;&#45;remove" @click="removeItem(food)">-->
<!--          <i class="fa-solid fa-times fa-lg"></i>-->
<!--        </div>-->

        <div class="appcard_item--details">
          <h5>{{ food.name }}</h5>
          <div>
            <p>{{ food.description }}</p>
          </div>

          <div class="d-flex align-items-center">
            <div id="AppCounter" class="d-inline-block">
              <span class="plus-btn" @click="incBtn(food)">
                <i class="fa-regular fa-plus"></i>
              </span>
              <input type="text" class="form-control" disabled :value="food.num">
              <span class="minus-btn" @click="decBtn(food)">
                <i class="fa-regular fa-minus"></i>
              </span>
            </div>
            <button class="btn order_btn ml-2" style="border-radius: 16px" @click="removeItem(food)">
              <i class="fa-regular fa-trash-can fa-lg"></i>
            </button>
          </div>
        </div>
        <hr>
        <div class="text-right">
          <strong class="appcard_item--price">{{(food.price * food.num).toFixed(2) }} $</strong>
        </div>
      </div>
      <br>
      <hr>
      <h5 class="text-right">
        Total price : {{ getTotal.toFixed(2) }} $
      </h5>
    </div>
    <div class="col-12 my-4" v-else>
      <div class="no_result">
        <img src="~/assets/images/empty-card.svg" class="img-fluid" alt="">
        <div>
          <p>There is no item in your card!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "AppCard",
  data() {
    return {
      tempCounter: 0,
    }
  },
  computed: {
    ...mapGetters([ 'getFoods' , 'getCard' , 'getTotal']),
    cardData () {
      let res = [];
     for( let i = 0 ; i < this.getFoods.length ; i++) {
       for( let j =0 ; j < this.getCard.length ; j++) {
         if( this.getFoods[i].id === this.getCard[j].id) {
           this.getFoods[i].num = this.getCard[j].num;
           res.push(this.getFoods[i]);
         }
       }
     }
      return res;
    },
  },
  methods: {
    removeItem(food) {
      this.$store.commit('REMOVE_ITEM' , food);
    },
    incBtn(data) {
      this.tempCounter = 0;
      this.tempCounter++;
      this.$store.commit('ADD_CARD' , {id: Number(data.id) , num : Number(data.num + this.tempCounter)});
      this.$store.commit('TOTAL_PRICE', Number(data.num + this.tempCounter));
    },
    decBtn(data) {
      this.tempCounter = 0;
      this.tempCounter--;
      if(data.num > 1) {
        this.$store.commit('ADD_CARD' , {id: Number(data.id) , num : Number(data.num + this.tempCounter)});
        this.$store.commit('TOTAL_PRICE', Number(data.num + this.tempCounter));
      }
    }
  }

}
</script>

<style scoped>

</style>
