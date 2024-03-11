import ComputedAndWatch from "@/components/ComputedAndWatch.vue";
import HooksPage from "@/components/HooksPage.vue";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import RouteInRoute from "@/pages/RouteInRoute.vue";
import RouteInRoute_Detail from "@/pages/RouteInRoute_Detail.vue";
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
        },
        {
            path:'/routeInRoute',
            component:RouteInRoute,
            children:[
                {
                    name:'xiangqing',
                    path:'detail',
                    component:RouteInRoute_Detail,

                    
                    //props方式传参 一
                    // props(route){
                    //     return route.query; 
                    // }
                    //props方式传参 二，配合params使用                  
                    // props:true
                },
                ////params方式传参
                // {
                //     name:'xiangqing',
                //     path:'detail/:id/:conent',
                //     component:RouteInRoute_Detail
                // }

            ]
        }

    ]
})

export default router;