<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible  class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
};
</script>
<style lang="scss" scoped>
$aside-index: 10;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
      > aside {
        width: 100vw;
        > ol> li> a{
          width: 100vw;
        }
      }
      > main {
        padding: 20px 0px;
      }
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    background: #fff;
    padding: 100px 150px;
  }
}
aside {
  color: #737372;
  background: rgba(255, 255, 255, .7);
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(15px);
  border-right: 2px solid #eeeeee;
  padding:70px 0 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: $aside-index;
  > h2 {
    color: #007974;
    margin: 14px 0;
    padding: 0 16px;
  }
  > ol {
    > li {
        position: relative;
      >a {
        width: 250px;
        display: block;
        padding: 14px 16px;
        text-decoration: none;
      }
      .router-link-active {
        color: #007974;
        &::after {
          content: '';
          display: inline-block;
          width: 5px;
          height: 36px;
          position: absolute;
          bottom: 50%;
          right: 0;
          margin-bottom:-18px;
          background-color: #02bcb0;
          animation: scale-up-ver-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        }
      }
    }
  }
}

main {
  overflow: auto;
}
@keyframes scale-up-ver-center {
  0% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
