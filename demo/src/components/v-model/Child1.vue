<template>
    <div class="child1">
        <p>child1</p>
        <button @click="click"> 单个数据--{{modelValue}}</button>
    </div>
</template>
<script setup lang="ts">

let myProps = defineProps(['modelValue']);
/// myclick是自定义事件名词
let myEmits = defineEmits(['update:modelValue']);

function click(){
 myEmits("update:modelValue",myProps.modelValue+1);

}
</script>

<style scoped>
.child1 {
    width: 200px;
    height: 200px;
    background: red;
}

</style>