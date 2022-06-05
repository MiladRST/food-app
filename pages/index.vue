<template>
  <div>
    <HeaderAppHero></HeaderAppHero>
     <div class="container">

        <foodsFoodCategory :category="pizzaCat" >Pizza</foodsFoodCategory>
        <foodsFoodCategory :category="burgerCat">Burger</foodsFoodCategory>
        <foodsFoodCategory :category="saladCat">Salad</foodsFoodCategory>
        <foodsFoodCategory :category="friedCat">Fried</foodsFoodCategory>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'main',
  transition:'home',
  name: 'IndexPage',
  computed: {
    ...mapGetters(['getFoods']),
    pizzaCat() {
      return this.getFoods.filter((item) => {
        return item.category.toLowerCase() === 'pizza'
      })
    },
    burgerCat() {
      return this.getFoods.filter((item) => {
        return item.category.toLowerCase() === 'hamburger'
      })
    },
    saladCat() {
      return this.getFoods.filter((item) => {
        return item.category.toLowerCase() === 'salad'
      })
    },
    friedCat() {
      return this.getFoods.filter((item) => {
        return item.category.toLowerCase() === 'fried'
      })
    }
  },
}
</script>
<style>
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>
