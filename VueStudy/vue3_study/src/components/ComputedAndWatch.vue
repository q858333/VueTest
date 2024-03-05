<template>
    <div class="person">
      <h1>-->computed计算属性使用</h1>
      姓：<input type="text" v-model="firstName"><br>
      名：<input type="text" v-model="lastName"><br>
      全名:<span>{{fullName}}</span><br>
      <button @click="changeFullName">修改全名</button>
      <hr>
      <h1>-->Watch使用，只能监视以下四种数据</h1>
      <h2>1.ref定义的数据</h2>
      <h3>求和：{{sum}}</h3>
      <button @click="changeSum">点我+1</button>
    </div>
    
</template>

<script setup lang="ts">

import {ref,computed, watch} from 'vue' 

//1.ref定义的数据
let sum = ref(0)
let stopWatchSum = watch(sum,(newValue,oldValue)=>{
  console.log('watch ',newValue,oldValue);
  if(newValue >= 10) {
    //停止监听
    stopWatchSum();
  }
})
function changeSum () {
    sum.value +=1;
}






let firstName = ref('zhang')
let lastName = ref('san')

//计算属性有缓存，firstName，lastName不变方法不会掉用

// 定义fullname是一个计算属性，且只读,
// let fullName = computed( () => {
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