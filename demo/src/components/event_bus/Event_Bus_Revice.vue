<template>
    <div class="revice">
        <button>接受消息总线事件</button>
    </div>

</template>

<script setup lang="ts">
import $bus from '../../utils/bus.ts';
import { onMounted } from 'vue';

onMounted(()=>{
    console.log('onMounted');
    $bus.on("event",(params)=>{
        console.log("event bus data:"+params);

    });

})


</script>

<style scoped>
.revice{
    width: 200px;
    height: 300px;
    background: skyblue;
}

</style>