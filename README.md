
# [官网](https://cn.vuejs.org/)

## 安装或者升级你的@vue/cli 
npm install -g @vue/cli

## 执行创建命令
vue create vue_test


# VueTest + Ts

* [三方库平台](https://www.npmjs.com/)
* [三方UI组建](https://element-plus.gitee.io/zh-CN/)
* [三方状态管理库](https://pinia.vuejs.org/zh/)



### 自定义标签名（默认是文件名）：
* 1:安装 `npm i vite-plugin-vue-setup-extend -D`
* 2:vite.congi.ts文件中引入，
```import VueSetupExtend from 'vite-plugin-vue-setup-extend';```
plugins数组中添加VueSetupExtend(),
* 3.script标签添加name
```<script setup lang="ts" name ="Person123">```


