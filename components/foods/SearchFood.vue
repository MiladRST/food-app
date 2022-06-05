<template>
  <div class="row my-4">
    <div class="col-12">
      <div class="search_food">
        <div class="search_food-label">
          <h4>What food do you want ?</h4>
        </div>
        <div class="search_food-filters">
          <div>
            <input type="text" class="form-control" :placeholder="'Search on '+ filter.type+' category'" v-model="filter.query">
          </div>

          <ul class="category_filters">
            <li>
              <div class="radio_wrapper">
                <input type="radio" id="all" value="all" name="food" checked v-model="filter.type">
                <label for="all">
                  <i class="fa-light fa-store fa-lg"></i>
                </label>
              </div>
              <div class="category_filters-title">All</div>
            </li>
            <li>
              <div class="radio_wrapper">
                <input type="radio" id="pizza" value="pizza" name="food" v-model="filter.type">
                <label for="pizza">
                  <i class="fa-light fa-pizza-slice fa-lg"></i>
                </label>
              </div>
              <div class="category_filters-title">Pizza</div>
            </li>
            <li>
              <div class="radio_wrapper">
                <input type="radio" id="hamburger" value="hamburger" name="food" v-model="filter.type">
                <label for="hamburger">
                  <i class="fa-light fa-burger fa-lg"></i>
                </label>
              </div>
              <div class="category_filters-title">Burger</div>
            </li>
            <li>
              <div class="radio_wrapper">
                <input type="radio" id="fried" value="fried" name="food" v-model="filter.type">
                <label for="fried">
                  <i class="fa-light fa-drumstick fa-lg"></i>
                </label>
              </div>
              <div class="category_filters-title">Fried</div>
            </li>
            <li>
              <div class="radio_wrapper">
                <input type="radio" id="chips" value="chips" name="food" v-model="filter.type">
                <label for="chips">
                  <i class="fa-light fa-french-fries fa-lg"></i>
                </label>
              </div>
              <div class="category_filters-title">Chips</div>
            </li>
            <li>
              <div class="radio_wrapper">
                <input type="radio" id="salad" value="salad" name="food" v-model="filter.type">
                <label for="salad">
                  <i class="fa-light fa-salad fa-lg"></i>
                </label>
              </div>
              <div class="category_filters-title">Salad</div>
            </li>

          </ul>
        </div>




      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchFood",
  props: ['filter'],
}
</script>

<style scoped>

</style>
