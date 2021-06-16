<template>
  <button @click="toggle" :disabled="disabled" class="cy-switch" :class="[{'cy-checked':value}, classes]">
    <span></span>
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    value: Boolean,
    theme: {
      type: String,
      default: "switch",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { theme } = props;
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    const classes = computed(() => {
      return { [`cy-theme-${theme}`]: theme };
    });
    return { toggle, classes };
  },
};
</script>
<style lang="scss">
@use "sass:math";
$h: 22px;
$h2: $h - 4px;
$grey: #9c9c9c;
.cy-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: math.div($h, 2);
  position: relative;
  margin: 0 10px;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: math.div($h, 2);
    transition: all 250ms;
  }
  &[disabled] {
    cursor: not-allowed;
    color: $grey;
    &:hover {
      border-color: $grey;
    }
  }
  &.cy-checked {
    background: #48c9b0;
    &.cy-theme {
      &-warning {
        background: #f1c40f;
      }
      &-danger {
        background: #e74c3c;
      }
      &-success {
        background: #2ecc71;
      }
      &-inverse {
        background: #34495e;
      }
      &-info {
        background: #3498db;
      }
    }
  }

  &.cy-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.cy-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>