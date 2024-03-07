<template>
    <hr>
    <div class="page">
        <h1>Hoooks(用于封装)</h1>
        <button @click="updateData"> 更新数据:{{sum}}</button>
        <br>
        <img v-for="(dog,index) in dogList" :key="index" :src="dog">
        <br>
        <button @click="addDog">添加狗</button>
    </div>
</template>

<script setup lang="ts">
 import useSum from '@/hooks/useSum'
 import useDog from '@/hooks/useDog';
 const {sum,updateData} = useSum();
 const {dogList,addDog} = useDog();

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

img {
    height: 100px;
    margin: 10px;
}
</style>