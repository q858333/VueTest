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
        <hr>
        <h2>游戏猎豹</h2>
        <ul>
            <li v-for="g in games"  :key="g.id">{{g.name}}</li>
        </ul>
        <button @click="changeFirstGame">修改第一个游戏名称</button>


    </div>
</template>

<script setup lang="ts">
//ref创建-可以定义基本类型和对象类型的响应式数据
//reactive创建-只能定义对象类型的响应式数据
import {ref,reactive} from 'vue' 
let name = ref('章三');
let age = ref(18);
let tel = '123123123123122312';

let car = reactive({name:'奔驰',price:100});
let games = ref(
    [
        {id:'1',name:'天下'},
        {id:'2',name:'王者'},
        {id:'3',name:'Dota2'},

    ]
);

function changeFirstGame () {
    games.value[0].name = "天下手游"
}
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