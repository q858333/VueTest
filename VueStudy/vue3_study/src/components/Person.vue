<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年来: {{ age }}</h2>
        <button class="button1" @click="telClick">电话</button>
        <button class="button1" @click="changeName">修改名字</button>
        <button class="button1" @click="changeAge">修改年龄</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
let name = ref('章三');
let age = ref(18);
let tel = '123123123123122312';

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