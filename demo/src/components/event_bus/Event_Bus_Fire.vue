<template>
    <div class="fire">
        <button @click="click">发送消息总线事件：Fire</button>
    </div>

</template>

<script setup lang="ts">
import $bus from '../../utils/bus.ts';

function click () {
    console.log("event bus fire");
    $bus.emit("event","fire");
}

</script>


<style scoped>
.fire{
    width: 200px;
    height: 300px;
    background: pink;
}

</style>