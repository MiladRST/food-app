<template>
  <div>
    <div id="main_wrapper" class="main_page">
      <headerAppHeader />
      <Nuxt />
    </div>
    <footerAppFooter />
  </div>
</template>

<script>
export default  {
  name: 'HomePage'
}
</script>

<style lang="scss">
@import 'assets/scss/main.scss';
</style>
