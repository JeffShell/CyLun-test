<demo>
 禁用某个标签切换
</demo>
<template>
<Tabs v-model:selected="x">
  <Tab title="导航1">内容1</Tab>
  <Tab title="导航2">内容2</Tab>
  <Tab title="这是比较长的内容3">内容3</Tab>
  <Tab title="短的内容4" disabled>短内容4</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from '../../lib//Tabs.vue'
import Tab from '../../lib/Tab.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const x = ref('导航2')
    return {
      x
    }
  }
}
</script>