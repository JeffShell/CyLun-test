<demo>
直接使用默认对话框
</demo>
<template>
<div>
  <Button @click="showDialog">打开对话框</Button>
</div>
</template>

<script lang="ts">
import {Button, openDialog} from "../../lib/index";
import {
  h
} from 'vue'
export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '方便的标题'),
        content: '内容可以按自己喜欢的来写',
        ok: "确认",
        cancel: "取消"
      })
    }
    return {
      showDialog
    }
  }
}
</script>