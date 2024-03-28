<template>
    <hr>
    <div class="page">
        <h1>组建参数传递</h1>
        <ul>
            <li v-for="(p,index) in list"  :key="p.id">
               <h3>{{index}},汽车：{{p.name}} ,价格:{{p.price}}</h3>
            </li>
        </ul>
        <button @click="updateData"> 更新数据:{{sum}}}</button>
      
    </div>
</template>

<script setup lang="ts">

import { type Cars } from '@/types';

import {ref,onBeforeMount ,onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

console.log('Page 创建');
/// 生命周期

onBeforeMount(()=>{
    console.log('挂载完成前')
});
onMounted(()=>{
    console.log('挂载完成')
});

onBeforeUpdate(() => {
    console.log('更新前')
});
onUpdated(() => {
    console.log('更新完毕')
});

onBeforeUnmount(()=>{
    console.log('卸载前')
});

onUnmounted(() => {
    console.log('卸载完毕')
});


let sum = ref(0);
function updateData () {
    sum.value+=1;
    myEmits("callBack",1);
}


//  1:只接收
//  let x = defineProps(['list']);
//  console.log('页面参数',x.list);

// 2:接收+限制类型
let myProps = defineProps<{list:Cars}>();
console.log('页面参数',myProps.list);

// 3:接收+限制类型+限制必要性+指定默认值
// let x = withDefaults(defineProps<{list?:Cars}>(),{
//     list:()=>{
//         return [{id:'123',name:'汽车',price:0}];
//     },
// });
let myEmits = defineEmits(['callBack']);


 //页面元素可以看到a,b
 let a = 1;
 let b = 2;
 defineExpose({a,b});

</script>

<style scoped>
.page {
    background: skyblue;
    padding: 20px;
    border-radius: 10px;

}

button {
    background: yellow;
    /* margin-right: 10px; */
    margin: 0 10px;
}
</style>