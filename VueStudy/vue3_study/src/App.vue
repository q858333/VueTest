<script setup lang="ts">
import type { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <!-- css种的a修改的router-link -->
  <router-link  to="/news">ref和reactive的使用</router-link>
  <router-link  to="/home">页面参数传递</router-link>
  <router-link to="/computedAndWatch">计算属性和Watch监听的使用</router-link>
  <router-link  to="/hooks">hooks（用于封装）</router-link>
  <router-link  to="/about">关于</router-link>
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
header {
  line-height: 1.5;
}

.content {
  background-color: bisque;
  width: 100vw;
  height: 80vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a {
    margin-right: 10px;
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
