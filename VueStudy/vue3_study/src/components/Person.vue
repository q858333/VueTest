<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年来: {{ age }}</h2>
        <button class="button1" @click="telClick">电话</button>
        <button class="button1" @click="changeName">修改名字</button>
        <button class="button1" @click="changeAge">修改年龄</button>
        <hr>
        <h2>一辆{{car.name}},价值{{car.price}}万 </h2>
        <button @click="changePrice">修改价格</button>

    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue' //ref创建-基本类型的响应式数据
import { reactive } from 'vue';//reactive创建-对象类型的响应式数据
let name = ref('章三');
let age = ref(18);
let tel = '123123123123122312';

let car = reactive({name:'奔驰',price:100});

function changePrice () {
    car.price+=10;
}

function telClick() {
    alert(tel);
}

function changeName() {
    name.value = "zhangsan";
}
function changeAge() {
    age.value++;
}


</script>

<style scoped>
.person {
    background: skyblue;
    padding: 20px;
    border-radius: 10px;

}

.button1 {
    background: yellow;
    /* margin-right: 10px; */
    margin: 0 10px;
}
</style>