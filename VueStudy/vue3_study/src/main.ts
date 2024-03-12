// import './assets/main.css'

// import { createApp } from 'vue'///创建应用
// import App from './App.vue'/// 根组建

// createApp(App).mount('#app')//创建应用并且使用组建，把应用挂载到index.html的容器上id：app

import App from "./App.vue";
import { createApp } from "vue"; 
import router from '@/router/Router';
import { createPinia } from "pinia";

//创建一个应用
const app = createApp(App)
//创建pinia
const pinia = createPinia()
//使用pinia
app.use(pinia)
//使用路由
app.use(router)
//挂载到index.html的容器上，id：app
app.mount("#app");
