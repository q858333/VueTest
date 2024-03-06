<template>
    <hr>
    <div class="page">
        <h1>组建参数传递</h1>
        <ul>
            <li v-for="(p,index) in list"  :key="p.id">
            <h3>{{index}},汽车：{{p.name}} ,价格:{{p.price}}</h3>
            </li>

        </ul>
      
    </div>
</template>

<script setup lang="ts">
import { type Cars } from '@/types';


//  1:只接收
//  let x = defineProps(['list']);
//  console.log('页面参数',x.list);

// 2:接收+限制类型
// let x = defineProps<{list:Cars}>();

// 3:接收+限制类型+限制必要性+指定默认值
let x = withDefaults(defineProps<{list?:Cars}>(),{
    list:()=>{
        return [{id:'123',name:'我的车',price:0}];
    }
});
 console.log('页面参数',x.list);

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