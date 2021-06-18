<demo>
常规使用
</demo>
<template>
<div>
  <Button>Primary</Button>
  <Button theme="warning">Warning</Button>
  <Button theme="default">Default</Button>
  <Button theme="danger">Danger</Button>
  <Button theme="success">Success</Button>
  <Button theme="inverse">Inverse</Button>
  <Button theme="info">Info</Button>
</div>
</template>

<script lang="ts">
import {Button} from "../../lib/index";
export default {
  components: {
    Button
  }
}
</script>