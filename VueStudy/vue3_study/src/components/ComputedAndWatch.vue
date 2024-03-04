<template>
    <div class="person">
      姓：<input type="text" v-model="firstName"><br>
      名：<input type="text" v-model="lastName"><br>
      全名:<span>{{fullName}}</span><br>
      <button @click="changeFullName">修改全名</button>
    </div>
</template>

<script setup lang="ts">

import {ref,computed} from 'vue' 

let firstName = ref('zhang')
let lastName = ref('san')


//计算属性有缓存，firstName，lastName不变方法不会掉用

// 定义fullname是一个计算属性，且只读,
// let fullName = computed(function () {
//     console.log('111');
//     return firstName.value+lastName.value;
// } )

// 定义可读写的计算属性，重写get set方法
let fullName = computed({
    get() {
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1)+lastName.value;
    },
    
   set(val) {
    console.log('set - ',val)
    let x = val.split('-');
    firstName.value = x[0]
    lastName.value = x[1]
   }
    
})

function changeFullName (){
    fullName.value = "li-si"
}

</script>

<style scoped>
.person {
    background: skyblue;
    padding: 20px;
    border-radius: 10px;

}

</style>