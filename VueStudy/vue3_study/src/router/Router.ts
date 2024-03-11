import ComputedAndWatch from "@/components/ComputedAndWatch.vue";
import HooksPage from "@/components/HooksPage.vue";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
//1:引入 createRouter
import { createRouter, createWebHistory} from "vue-router";

//2:创建路由
const router = createRouter({
    history:createWebHistory(),//路由器的工作模式
    routes:[
        {
            name:"shouye",
            path:'/home',
            component:Home
        },
        {
            path:'/news',
            component:News
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/computedAndWatch',
            component:ComputedAndWatch
        },
        {
            path:'/hooks',
            component:HooksPage
        }

    ]
})

export default router;