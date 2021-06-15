<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="cy-dialog-overlay" @click="onClickOverlay"></div>
      <div class="cy-dialog-wrapper">
        <div class="cy-dialog">
          <header>
            <slot name="title" />
            <span @click="close" class="cy-dialog-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button @click="onClickOk">
              <slot name="ok"/>
            </Button>
            <Button @click="onCLickCancel">
              <slot name="cancel"/>
            </Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    onClickOk: {
      type: Function
    },
    onCLickCancel: {
      type: Function
    }
  },
  components: {
    Button,
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close()
      }
    }
    const onClickOk = () => {
      if (props.onClickOk?.() !== false) {
        close()
      }
    }
    const onCLickCancel = () => {
      props.onCLickCancel?.()
      close()
    }
    return {
      close,
      onClickOverlay,
      onClickOk,
      onCLickCancel
    }
  }
};
</script>

<style lang="scss">
$radius: 6px;
$border-color: #d9d9d9;
.cy-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    border-radius: $radius;
    padding: 12px 16px;
    text-align: right;
    background-color: #ecf0f1;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
