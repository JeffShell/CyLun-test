<demo>
支持 size
</demo>
<template>
<div>
  <div>
    <Button size="big">Big Button</Button>
    <Button>Button</Button>
    <Button size="small">Small Button</Button>
  </div>
  <div>
    <Button size="big" theme="warning">Big Button</Button>
    <Button theme="warning">Button</Button>
    <Button size="small" theme="warning">Small Button</Button>
  </div>
  <div>
    <Button size="big" theme="info">Big Button</Button>
    <Button theme="info">Button</Button>
    <Button size="small" theme="info">Small Button</Button>
  </div>
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