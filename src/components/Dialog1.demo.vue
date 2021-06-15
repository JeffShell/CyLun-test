<demo>
常规使用
</demo>
<template>
<div>
  <Button @click="toggle">打开对话框</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <strong>这是个人框架</strong>
      <div>基于Vue3 + TS 编写的框架</div>
    </template>
    <template v-slot:title>
      <strong>纯风框架</strong>
    </template>
    <template v-slot:ok>
      确认
    </template>
    <template v-slot:cancel>
      取消
    </template>
  </Dialog>
</div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {}
    return {
      x,
      toggle,
      f1,
      f2
    }
  }
}
</script>