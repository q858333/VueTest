

<template>
  <button @click="btnClick">click</button>

  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <Event_Bus></Event_Bus>
  <HelloWorld msg="组建参数传递" @myclick="myclick"/>
</template>

<script setup lang="ts">
import Event_Bus from './components/event_bus/Event_Bus.vue';
import HelloWorld from './components/HelloWorld.vue';

function myclick (params: any) {
  console.log("myclick"+params);

}

function btnClick(){
  console.log("btnClick");
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
