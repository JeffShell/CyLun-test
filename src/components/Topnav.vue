<template>
  <div class="topnav">
      <div class="logo" >
          <svg class="icon">
            <use xlink:href="#icon-logo"></use>
          </svg>
          <span>纯风UI</span>
      </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleMenu" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from "vue";

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: true
    }
  },
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const toggleMenu = ()=>{
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
}
</script>
<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  background-color: #fff;
   box-shadow:0 5px 10px rgb(51 51 51 / 10%);
  >.logo {
    display: flex;
    align-items: center;
    width: 132px;
    height: 32px;
    >  .icon {
      width: 2em;
      height: 100%;
    }
    > span {
      font-size: 25px;
      margin-left: 10px;
    }
  }
  > .menu {
    display: flex;
    margin-left: auto;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleMenu {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    display: none;
  }
  @media (max-width:500px) {
    > .menu{display: none;}
    > .logo{margin: 0 auto;}
    > .toggleMenu{display: inline-block}
  }
}
</style>
