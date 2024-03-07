<template>
    <div class=".page">
    <h1>这是首页</h1>
    <PageParams :list="carList" v-if="isShow"></PageParams>
    </div>
</template>

<script lang="ts" setup>
import { ref ,reactive} from 'vue';
import { type Cars } from "@/types";
import PageParams from '@/components/PageParams.vue';
let isShow = ref(true);

let carList = 
reactive<Cars>([
  {id:'dasda1',name:'奔驰',price:100},
  {id:'dasda2',name:'宝马',price:40},
  {id:'dasda3',name:'大众',price:10},
])
console.log('carlist',carList);
</script>

<style scoped>
    .page {
        width: 100vw;
        /* height: 100px; */
        background-color: aquamarine;
    }
</style>