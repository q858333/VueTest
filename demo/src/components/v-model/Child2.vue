<template>
    <div class="child2">
        <p>child2</p>
        <button @click="clickParams1"> 多个数据params1 {{params1}}</button>
        <button @click="clickParams2"> 多个数据params2 {{params2}}</button>
    </div>
</template>

<script setup lang="ts">
let myProps = defineProps(['params1','params2']);
/// myclick是自定义事件名词
let myEmits = defineEmits(['update:params1','update:params2',]);

function clickParams1() {
    myEmits('update:params1',myProps.params1+2);
}
function clickParams2() {
    myEmits('update:params2',myProps.params2+4);

}

</script>


<style scoped>
.child2 {
    width: 200px;
    height: 200px;
    background: burlywood;
}

</style>