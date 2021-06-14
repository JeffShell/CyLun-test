<template>
  <h2>{{component.__sourceCodeTitle}}</h2>
  <div class="demo-component">
    <component :is="component" />
  </div>
  <div class="demo-code">
    <pre class="language-html" v-html="html" :class="codeVisible ? 'demo-code-enter' : 'demo-code-leave'"></pre>
  </div>
  <div class="demo-actions">
    <button @click="showCode">{{codeVisible ? '隐藏代码' : '查看代码'}}</button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { computed, ref } from "vue";
const Prism = (window as any).Prism;
export default {
  data() {
    return {
      show: true,
    };
  },
  components: {
    Button,
  },
  props: {
    component: Object,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const showCode = () => {
      codeVisible.value = !codeVisible.value;
    };
    const codeVisible = ref(false);
    return {
      Prism,
      html,
      showCode,
      codeVisible,
    };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
h2 {
  font-size: 35px;
  padding: 8px 0px;
}
.demo {
  &-component {
    border: 1px solid #eee;
    padding: 16px 10px;
  }
  &-actions {
    border: 1px solid #eee;
    padding: 0px;
    > button {
      border: 0;
      width: 100%;
      height: 50px;
    }
  }
  &-code {
    > .language-html {
      box-sizing: content-box;
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      // overflow-x: hidden;
      overflow-y: auto;

      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
    }
    &-enter {
      height: 400px;
      transition: height 500ms;
    }
    &-leave {
      padding: 0 16px;
      height: 0px;
      transition: height 500ms, padding 500ms;
    }
  }
}
</style>