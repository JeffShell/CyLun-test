<template>
  <h1>Button文档</h1>
  <Demo :component="Button1Demo" />
  <Demo :component="Button2Demo" />
  <Demo :component="Button4Demo" />
  <Demo :component="Button5Demo" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Button1Demo from './Buttons/Button1.demo.vue'
import Button2Demo from './Buttons/Button2.demo.vue'
import Button4Demo from './Buttons/Button4.demo.vue'
import Button5Demo from './Buttons/Button5.demo.vue'
export default {
  components: { Demo },
  setup() {
    return {  
      Button1Demo,
      Button2Demo,
      Button4Demo,
      Button5Demo
    };
  },
};
</script>

