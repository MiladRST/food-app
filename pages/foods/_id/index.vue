<template>
  <div class="container my-4">

    <foodsFoodItem :id = "id" ></foodsFoodItem>

  </div>
</template>

<script>
export default {
  data() {
    return {
      id : this.$route.params.id
    }
  },
}
</script>

<style scoped>

</style>
