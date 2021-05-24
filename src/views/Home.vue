<template>
  <div class="topnav">
    <Topnav/>
    <div class="banner">
      <h1>纯风UI</h1>
      <h2>十分方便的UI框架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {Topnav}
}
</script>
<style lang="scss" scoped>


</style>
