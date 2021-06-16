<template>
  <div class="cy-tabs">
    <div class="cy-tabs-nav" ref="container">
      <div
          class="cy-tabs-nav-item"
          v-for="(item, index) in items"
          :ref="
          (el) => {
            if (item.props.title === selected) selectedItem = el;
          }
        "
          @click="select(item)"
          :class="
          [item.props.title === selected ? 'selected' : ''] +
          [item.props.disabled === '' ? 'disabled' : '']
        "
          :key="index"
      >
        {{ item.props.title }}
      </div>
      <div class="cy-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="cy-tabs-content">
      <component
          class="cy-tabs-content-item"
          :key="current.props.title"
          :is="current"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import { computed, ref, onMounted, watchEffect } from "vue";
export default {
  props: {
    selected: String,
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(
          () => {
            const { width } = selectedItem.value.getBoundingClientRect();
            indicator.value.style.width = width + "px";
            const { left: NavLeft } = container.value.getBoundingClientRect();
            const {
              left: SelectedLeft,
            } = selectedItem.value.getBoundingClientRect();
            const left = SelectedLeft - NavLeft;
            indicator.value.style.left = left + "px";
          },
          {
            flush: "post", 
          }
      );
    });
    const items = context.slots.default();
    items.forEach((item) => {
      // @ts-ignore
      if (item.type.name !== Tab.name) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const current = computed(() => {
      return items.find((item) => item.props.title === props.selected);
    });
    const select = (item) => {
      if (item.props.disabled === "") {
        return;
      }
      context.emit("update:selected", item.props.title);
    };
    return {
      current,
      items,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$green: #02bcb0;
$color: #333;
$border-color: #d9d9d9;
.cy-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px;
      margin: 0 8px;
      cursor: pointer;
      &.disabled {
        color: #ccc;
        cursor: not-allowed;
      }
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $green;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $green;
      left: 0;
      bottom: -1px;
      transition: all 250ms cubic-bezier(0.550, 0.085, 0.680, 0.530); 
    }
  }
  &-content {
    padding: 20px 8px;
  }
}
</style>