<template>
  <div>
    <div id="main_wrapper" class="default_page">
      <headerAppHeader />
      <Nuxt />
    </div>
    <footerAppFooter />
  </div>
</template>
<script>
export default {
  name: 'default'
}
</script>

<style lang="scss">
@import 'assets/scss/main.scss';
</style>
