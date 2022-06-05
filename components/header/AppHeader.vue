<template>
  <div id="AppHeader">
    <nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <ul class="navMenu">

              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/foods">Menu</nuxt-link>
              </li>
              <li>
                <PartialsAppLogo></PartialsAppLogo>
              </li>
              <li>
                <nuxt-link to="/about">About</nuxt-link>
              </li>

              <li>
                <nuxt-link to="/card">
<!--                  <i class="fa-regular fa-shopping-bag fa-lg"></i>-->
                  Card
                </nuxt-link>
                <span class="card_notification" v-if="getCard.length > 0" >{{getCard.length}}</span>
              </li>
            </ul>
            <div class="mobMenu">
              <span class="sidebar_btn" @click="activeSidebar = true ">
                  <i class="fa-regular fa-bars fa-lg"></i>
              </span>

              <PartialsAppLogo></PartialsAppLogo>

              <span class="mobMenu_card">
                   <nuxt-link to="/card">
                    <i class="fa-regular fa-shopping-bag fa-lg"></i>
                  </nuxt-link>
                  <span class="card_notification" v-if="getCard.length > 0" >{{getCard.length}}</span>
              </span>
            </div>

          </div>
        </div>
      </div>
    </nav>


      <ul class="sidebar_menu" :class="{'show': activeSidebar}">
        <li>
          <PartialsAppLogo></PartialsAppLogo>
          <span class="sidebar_close-btn" @click="activeSidebar = false ">
            <i class="fa-regular fa-times"></i>
          </span>
        </li>
        <li>
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/foods">
            Menu
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">
            About
          </nuxt-link>
        </li>
      </ul>

    <div class="sidebar_menu--backdrop"
         :class="{'show': activeSidebar}"
         @click="activeSidebar = false "></div>
  </div>


</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: 'AppHeader',
  data() {
    return {
      activeSidebar: false,
    }
  },
  computed: {
    ...mapGetters(['getCard'])
  }
}
</script>

<style scoped lang="scss">
</style>
