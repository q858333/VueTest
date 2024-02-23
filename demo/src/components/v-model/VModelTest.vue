<template>
    <h1>v-model number:{{number}} params1:{{params1}} params2:{{params2}}</h1>
    <div class="v_model">
        <!--  v-model相当于传了modelValue参数，和定义了update:modelValue自定义事件 -->
        <Child1 v-model="number"></Child1>
        <Child2 v-model:params1="params1" v-model:params2="params2"></Child2>
    </div>
</template>
<script setup lang="ts">

import { ref } from 'vue';
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

let number = ref(0);
let params1 = ref(2);
let params2 = ref(4);


</script>


<style scoped>

.v_model {
    width: 100vw;
    height: 400px;
    background: black;
    display: flex;
    /* justify-content: ; */

}

</style>