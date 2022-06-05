<template>
  <div id="AppCounter">
    <span class="plus-btn" @click="number.count++">
      <i class="fa-regular fa-plus"></i>
    </span>
    <input type="text" class="form-control" disabled v-model="number.count">
    <span class="minus-btn" @click="decNum">
      <i class="fa-regular fa-minus"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "AppCounter",
  props: ['number'],
  methods : {
    decNum() {
      if(this.number.count > 1) {
        this.number.count--;
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
