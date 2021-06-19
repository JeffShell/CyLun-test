# 开始使用
请先[安装](#/doc/install)本组件库。

完整引入：

```
import {Button, Tabs, Switch, Dialog} from "cy-lun"
import "cy-lun/dist/lib/cy.css" 
import App from "./App.vue"
import {}
```
> 以上代码

然后使用`components`渲染，就可以使用本框架的组件。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "cy-lun"
export default {
  components: {Button}
}
</script>
```