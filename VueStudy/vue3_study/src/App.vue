<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Person from './components/Person.vue';
import ComputedAndWatch from './components/ComputedAndWatch.vue';
import PageParams from './components/PageParams.vue';
import { type Cars } from "@/types";
import { reactive } from 'vue';



let carList = reactive<Cars>([
  {id:'dasda1',name:'奔驰',price:100},
  {id:'dasda2',name:'宝马',price:40},
  {id:'dasda3',name:'大众',price:10},
])
console.log('carlist',carList);
</script>

<template>
          <!-- <Person></Person> -->
  <ComputedAndWatch></ComputedAndWatch>
  <PageParams :list="carList"></PageParams>

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

.logo {
  display: block;
  margin: 0 auto 2rem;
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
