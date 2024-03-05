<template>
    <div class="person">
      <h1>-->computed计算属性使用</h1>
      姓：<input type="text" v-model="firstName"><br>
      名：<input type="text" v-model="lastName"><br>
      全名:<span>{{fullName}}</span><br>
      <button @click="changeFullName">修改全名</button>
      <hr>
      <h1>-->Watch使用，只能监视以下四种数据</h1>
      <h2>1.ref定义的基本类型数据</h2>
      <h3>求和：{{sum}}</h3>
      <button @click="changeSum">点我+1</button>

      <h2>2.ref定义的对象类型数据</h2>
      <h3>姓名：{{person.name}},年龄：{{person.age}}</h3>
      <button @click="changeName">修改姓名</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changePerson">修改对象</button>

      <h2>3.reactive定义的对象类型数据</h2>
      <h3>reactive 姓名：{{person_re.name}},年龄：{{person_re.age}}</h3>
      <button @click="changeREName">修改姓名</button>
      <button @click="changeREAge">修改年龄</button>
      <button @click="changeREPerson">修改对象</button>

      <h2>4.reactive或ref所定义的对象类型数据中的某个属性（建议写成函数形式监听，即一个有返回值的函数）</h2>
      <h3>汽车：{{car.name}},价格：{{car.price}}万</h3>
      <h3>产地：{{car.address.country}},{{car.address.city}}</h3>
      <button @click="changeCarName">修改名称</button>
      <button @click="changeCarPrice">修改价格</button>
      <button @click="changeCarCity">修改产地城市</button>
      <button @click="changeCarAdress">修改产地</button>

      <h2>5.监视上述多个数据</h2>
      <h3>姓名：{{person.name}},价格：{{car.price}}万</h3>
      <button @click="changeCarPrice">修改价格</button>
      <button @click="changeName">修改姓名</button>

    </div>
    
</template>

<script setup lang="ts">

import {ref,computed, watch, reactive} from 'vue' 

//1.ref定义的基本类型数据
let sum = ref(0)
//监视
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

//2.ref定义的对象类型数据
let person = ref({
    name:'章三',
    age:18
})
//监视，ref定义的对象类型数据，监视的是对象的地址值，若想监视对象内部属性变化，需要手动开启deep（深度监视）,
// immediate 表示 立即执行一次
//deep 监听，对象的属性newValue，oldValue是一样的，因为指向的是同一地址，值变后都变了
watch(person,(newValue,oldValue)=>{
  console.log('ref watch ',newValue,oldValue);
},{deep:true,immediate:true})
function changePerson () {
    person.value = {name:'里斯', age:1000}
}
function changeName () {
    person.value.name += '~';
}

function changeAge() {
    person.value.age += 1;
}


//3.监听 reactive定义的对象类型数据,默认自动开启deep（深度监视）,
let person_re = reactive({
    name:'章三re',
    age:18
})
//监视，reactive定义的对象类型数据，监视的是对象的地址值
watch(person_re,(newValue,oldValue)=>{
  console.log('reactive watch ',newValue,oldValue);
})
function changeREPerson () {
    // person_re = {name:'里斯re', age:1000} 没反应不能这个修改因为
    Object.assign(person_re,{name:'里斯re', age:1000});//遍历每个对象赋值

}
function changeREName () {
    person_re.name += '~';
}

function changeREAge() {
    person_re.age += 1;
}


//4.监听 reactive或ref所定义的对象类型数据中的某个属性，基本类型的要写成函数形式，对象类型可以直接写，也可以写成函数，更推荐写函数
let car = reactive({name:'奔驰',price:100,address:{
    country:'中国',
    city:'北京'
}})
///监听属性中的基本类型
//监听car.name会报错
// watch(car.name,(newValue,oldValue)=>{
//     console.log('car watch ',newValue,oldValue);
// })
watch(()=>{
    return car.name;
},(newValue,oldValue)=>{
    console.log('car watch ',newValue,oldValue);
})
///监听属性中的对象类型
///这样写只能监听对象类型中的属性变化,比如：city,对象变化监听不到 比如修改整个adress
watch(car.address,(newValue,oldValue)=>{
    console.log('属性方式 car address watch ',newValue,oldValue);
})
/// 这样写既能监听整个对象的变化，也可以监听对象属性的变化
watch(()=>{
    return car.address;
},(newValue,oldValue)=>{
    console.log('方法方式 car address watch ',newValue,oldValue);
},{deep:true})

function changeCarAdress () {
    car.address = {country:'日本', city:'东京'}

}
function changeCarName () {
    car.name += '~';
}

function changeCarPrice() {
    car.price += 10;
}

function changeCarCity () {
    car.address.city += "~";
}



//5.监听多个数据
watch([()=>{
    return person.value.name;
},()=>{
    return car.price
}],(newValue,oldValue)=>{
    console.log('watch 多个数据 ',newValue,oldValue);
})




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