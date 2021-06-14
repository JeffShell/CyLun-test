<template>
  <button class="cy-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="cy-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { theme, size } = props;
    const classes = computed(() => {
      return {
        [`cy-theme-${theme}`]: theme,
        [`cy-size-${size}`]: size,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
$h: 32px;
$color: #fff;
$blue: #40a9ff;
$radius: 6px;
$red: red;
$grey: grey;
.cy-button {
  height: $h;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: #48c9b0;
  color: $color;
  border: 1px solid $color;
  border-radius: $radius;
  font-size: 17px;
  line-height: 1.471;
  padding: 10px 19px;
  margin-left: 8px;
  &.cy-theme-warning {
    background: #f1c40f;
  }
  &.cy-theme-default {
    background: #bdc3c7;
  }
  &.cy-theme-danger {
    background: #e74c3c;
  }
  &.cy-theme-success {
    background: #2ecc71;
  }
  &.cy-theme-inverse {
    background: #34495e;
  }
  &.cy-theme-info {
    background: #3498db;
  }
  &.cy-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.cy-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
}
</style>