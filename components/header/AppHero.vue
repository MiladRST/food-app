<template>
  <div id="AppHero">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-7">
          <div class="hero_content">
              <h1>Order Tasty & Fresh Food</h1>
            <br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
              quam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quam!
            </p>
            <br>
            <button type="button" class="default_btn">
              <nuxt-link to="/foods">
                Order Now!
              </nuxt-link>
            </button>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-5">
          <img src="~/assets/images/hero2.png" class="img-fluid" alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHero"
}
</script>

<style scoped>

</style>
