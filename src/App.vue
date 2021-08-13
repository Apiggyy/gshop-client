<template>
  <div>
    <router-view></router-view>
    <foot-guide v-show="$route.meta.showFooter"></foot-guide>
  </div>
</template>

<script>
import FootGuide from './components/footguide/FootGuide'
export default {
  components: {FootGuide}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
