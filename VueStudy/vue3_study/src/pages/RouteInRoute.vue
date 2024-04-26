<template>
    <button @click="routeJump">
        路由跳转
    </button>
    <div class="page">
        <ul>
            <li v-for="model in list" :id="model.id">
                标题：
                <router-link :to="{
        //  path:'/routeInRoute/detail',// 或name都可以
        name: 'xiangqing',
        // params:{content:model.content,id:model.id},
        query: { content: model.content,id:model.id }
        } " >{{ model.title }}
        </router-link>
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
import { useRouter } from 'vue-router';
let list = reactive(
    [
        { id: "asdsa01", title: "游戏", content: "斗地主" },
        { id: "asdsa02", title: "食物", content: "鸡蛋" },
        { id: "asdsa03", title: "旅游", content: "中国" }
    ]
)

let router = useRouter();

function routeJump() {
    router.push('/home');
    // router.push({name:'shouye'});

}
</script>



<style scoped>
.page {
    height: 100%;
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
}

ul li::marker {
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