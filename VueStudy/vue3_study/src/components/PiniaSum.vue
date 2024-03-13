<template>
    <div>
        <h2>求和为:{{sum}},bigSum:{{bigSum}},姓名:{{name}},年龄：{{age}}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>

        <button @click="addClick">加</button>
        <button @click="reduceClick">减</button>

    </div>
</template>

<script lang="ts" setup name="PiniaSum">

import { storeToRefs } from 'pinia';
import { useCountStore } from '@/store/count';

let n = 1;
let countStore = useCountStore()
console.log('countStore',countStore)
//不能建议使用torefs，因为会吧store里的方法也变成ref类型，没有必要，我们只需要数据变成ref
let {sum,name,age,bigSum} = storeToRefs(countStore);

countStore.$subscribe((mutate,state)=>{
    console.log('数据发生变化');
});

function addClick () {
    //第一种修改数据方式
    // countStore.sum += n;

    //第二种修改数据方式
    // countStore.$patch({
    //     sum:88,
    //     name:'里斯',
    //     age:100,
    // })

    //第三种修改数据方式
    console.log('addClick',n);
    countStore.addNumber(n);
}

function reduceClick () {
    countStore.sum -= n;
}

</script>



<style scoped>

select,button {
    margin: 0px 5px;
    height: 25px;
}
</style>