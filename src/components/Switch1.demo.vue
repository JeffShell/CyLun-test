<demo>
常规用法
</demo>
<template>
  <Switch v-model:value="bool"/>
  <!-- e
  d
  d 
  d
  d 
  d
  d 
  d
  d 
  d
  d 
  d
  d 
  d
  d 
  d
  d 
  d
  d 
  d
  d 
  d
  d 
  d
  d 
  d
  d 
  d
  d 
  d
  d 
  d
  d 
  d  -->
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from "vue";
export default {
  components:{
    Switch
  },
  setup(){
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>
