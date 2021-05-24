<template>
  <router-view/>
</template>

<script lang="ts">
import {ref, provide} from 'vue'
export default {
  setup(){
    const width = document.documentElement.clienWidth;
    const menuVisible  = ref(width <= 500 ? false : true);
    provide('menuVisible', menuVisible )
  }
}
</script>
