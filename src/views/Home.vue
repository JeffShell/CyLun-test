<template>
  <div>
  <div class="topnav">
    <div class="bgc">
      <div class="ba"></div>
    </div>
    <Topnav/>
    <div class="banner">
      <h1>纯风UI</h1>
      <h2>十分方便的UI框架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写,把把把把把爸安保把把爸不不不不把把把把把爸安保把把爸不不不不把把把把把爸安保把把爸不不不不不不不</p>
      </li>
      <li>
        <h3>基于 Vue 3</h3>
        <p>源代码采用 TypeScript 书写,把把把把把爸安保把把爸不不不不把把把把把爸安保把把爸不不不不把把把把把爸安保把把爸不不不不不不不</p>
      </li>
      <li>
        <h3>代码易读</h3>
        <p>源代码采用 TypeScript 书写,把把把把把爸安保把把爸不不不不把把把把把爸安保把把爸不不不不把把把把把爸安保把把爸不不不不不不不</p>
      </li>
    </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {Topnav}
}
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.features {
  margin: 64px auto;
  >ul {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    margin-top: 500px;
    padding: 50px 30px;
    border-bottom: 1px solid #eaecef;
    border-top: 1px solid #eaecef;
    > li {
      border-radius: 3px;
      padding: 10px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "title"
        "text";
      grid-template-columns: auto auto;
      grid-template-rows: 1fr auto;
      > h3 {
        color: c#3a5169;
        margin-bottom: 20px;
        grid-area: title;
        font-size: 28px;
      }
      > p {
        text-indent:2rem;
        font-size: 14px;
        color: #00798a;
        grid-area: text
      }
    }
  }  
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        margin: 0 10px;
        width: 300px;
      }
    }
  }  
  @media (min-width: 1000px) {
    > ul {
      > li {
        margin: 0 20px;
        width: 300px;
      }
    }
  }
  @media (max-width: 550px) {
    > ul {
    margin-top: 300px;
      > li {
        width: 100%;
      }
    }
  }
}
.topnav{
  position: relative;
  .bgc {
    position: absolute;
    background-color: #95cafb;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230c88fc' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    width: 100vw;
    height: 120vh;
    transform: translate(0%, -60%);
  }
  .ba  {
    position: absolute;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: 60px 0 0 100vw;
    border-color: transparent transparent transparent #fff;
    transform: translate(0%, 1%);
  }

  .banner {
    color: $color;
    min-width: 300px;
    padding: 100px 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    >.actions {
      padding: 8px 0;
      a {
        margin: 0 8px;
        background: $green;
        color: white;
        display: inline-block;
        $h: 28px;
        height: $h;
        line-height: $h;
        padding: 0 24px;
        border-radius: $border-radius;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
  @media (max-width: 500px) {
    :deep(.toggleMenu) {
      display: none;
    }
  }  
}
</style>
