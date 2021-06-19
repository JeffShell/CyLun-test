# 开始使用
请先[安装](#/doc/install)本组件库。

### 完整引入

```
import {createApp} from "vue"
import App from "./App.vue"
import {CyLun} from "cy-lun"
import "cy-lun/dist/lib/cy.css" 

createApp(App).use(CyLun).mount('#app')
```

> 以上代码即可全局使用组件，还无需使用 `components` 渲染组件。不过值得注意的是，CSS依然需要单独导入。

### 按需导入

>如果想要导入部分组件，那么只需要在main.js写如下内容：

```
import {createApp} from "vue"
import App from "./App.vue"
import {Button} from "cy-lun"
import "cy-lun/dist/lib/cy.css" 

createApp(App).use(Button).mount('#app')
```

## 单文件使用

> 局部导入和引入方式如下

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "cy-lun"
import "cy-lun/dist/lib/cy.css" 
export default {
  components: {Button}
}
</script>
```