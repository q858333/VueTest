<script setup lang="ts">
import type { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <!-- css种的a修改的router-link -->
  <div class="tab">
    <router-link  replace to="/news" active-class="active">ref和reactive的使用</router-link>
    <router-link replace :to="{name:'shouye'}" active-class="active">组建参数和生命周期</router-link>
    <router-link  to="/computedAndWatch" active-class="active">计算属性和Watch监听的使用</router-link>
    <router-link  to="/hooks" active-class="active">hooks（用于封装）</router-link>
    <router-link  :to="{path:'/about'}" active-class="active">关于（to的第二种写法）</router-link>
    <router-link  :to="{path:'/routeInRoute'}" active-class="active">嵌套路由、穿参</router-link>
    <router-link  :to="{path:'/pinia'}" active-class="active">pinia使用（状态管理）</router-link>
  </div>
  
  <div class="content">
    <router-view></router-view>
  </div>



  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>

  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

<style scoped>
.tab {
  background-color: whitesmoke;
  display: flex;
  justify-content: space-around;
  margin: 0 10px;
}
header {
  line-height: 1.5;
}

.content {
  background-color: bisque;
  width: 100vw;
  height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a {
  color: black;
    margin-right: 10px;
  }
a.active {
  color: blue;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
 

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
