<template>
    <div class="page">
        <ul>
            <li v-for="model in list" :id="model.id">
                query
                <router-link :to="{
                    //  path:'/routeInRoute/detail',// 或name都可以
                name:'xiangqing',
                query:{content:model.content}}" :id="model.id">{{model.title}}</router-link>
            </li>
        </ul>

        <!-- <ul>
            <li v-for="model in list" :id="model.id">
                params
                <router-link :to="{
                    //  path:'/routeInRoute/detail',// params方法只能用name，除非用原始的to:'/routeInRoute/detail'/1/1/1'方式
                name:'xiangqingparams',
                params:{id:model.id,content:model.content}}" :id="model.id">{{model.title}}</router-link>
            </li>
        </ul> -->


        <div class="content">
            <router-view></router-view>
        </div>

    </div>
</template>

<script lang="ts" setup>

import { reactive } from 'vue';

let list = reactive(
    [
    {id:"asdsa01",title:"游戏",content:"Dota2"},
    {id:"asdsa02",title:"美食",content:"烩面"},
    {id:"asdsa03",title:"旅游",content:"河南"}
    ]
)
</script>



<style scoped>
 .page {
    height: 100%;
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
}
  ul li::marker{
    color: red;
  }
  .content {
    width: 70%;
    height: 80%;
    background-color: white;
    border: 1px solid;
    padding: 10px;
    border-radius: 10px;
  }
</style>