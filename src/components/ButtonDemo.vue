<template>
  <div>Button文档</div>
  <Button 
    @click="onClick" 
    @focus="onClick"
    @mouseover="onClick"
  >你好</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
export default {
  components: {Button},
  setup(){
    const onClick = ()=> {
      console.log('hi')
    }
    return {onClick}
  }
}
</script>

<style scoped>

</style>
