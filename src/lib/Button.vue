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
    level: {
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
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`cy-theme-${theme}`]: theme,
        [`cy-size-${size}`]: size,
        [`cy-level-${level}`]: level,
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
  box-sizing: border-box;
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
  & + & {
    margin-left: 8px;
    padding: 0 12px;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.cy-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.cy-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
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
  &.cy-theme-button {
    padding: 10px 19px;
    &.cy-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.cy-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.cy-theme-link {
    &.cy-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.cy-theme-text {
    &.cy-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.cy-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.cy-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.cy-theme-link, &.cy-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .cy-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: cy-spin 1s infinite linear;
  }
}
@keyframes cy-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>