<template>
  <h2>{{component.__sourceCodeTitle}}</h2>
  <div class="demo-component">
    <component :is="component" />
  </div>
  <div class="demo-actions">
    <Button @click="showCode">{{codeVisible ? '隐藏代码' : '查看代码'}}</Button>
  </div>
  <div class="demo-code">
    <pre class="language-html" v-html="html" :class="codeVisible ? 'demo-code-enter' : 'demo-code-leave'"></pre>
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
    padding: 8px 16px;
  }
.demo {
  margin: 16px 0 32px;
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
  }
  &-code {
    > .language-html {
      box-sizing: content-box;
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
    &-enter {
      height: 500px;
	    transition:height 500ms;
    }
    &-leave {
      padding: 0 16px; 
      height: 0px;
	    transition:height 500ms, padding 500ms;
    }
    @media (max-width: 500px) {
      > .language-html {
        width: 100vw;
      }
    }
  }
}
</style>