<demo>
常规用法
</demo>
<template>
  <Switch v-model:value="bool"/>
  <Switch v-model:value="bool2" theme="warning"/>
  <Switch v-model:value="bool3" theme="info"/>
  <Switch v-model:value="bool4" theme="danger"/>
  <Switch v-model:value="bool5" theme="success"/>
  <Switch v-model:value="bool6" theme="inverse"/>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue'
import {ref} from "vue";
export default {
  components:{
    Switch
  },
  setup(){
    const bool = ref(false)
    const bool2 = ref(false)
    const bool3 = ref(false)
    const bool4 = ref(false)
    const bool5 = ref(false)
    const bool6 = ref(false)
    return {
      bool, bool2, bool3, bool4, bool5, bool6
    }
  }
}
</script>
