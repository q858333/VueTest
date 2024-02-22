<template>
    <div class="eventbus">
        <h1>消息总线</h1>
        <div class="box">
            <Event_Bus_Revice></Event_Bus_Revice>
            <Event_Bus_Fire></Event_Bus_Fire>

        </div>
    </div>
</template>
<script setup lang="ts">
import Event_Bus_Fire from './Event_Bus_Fire.vue';
import Event_Bus_Revice from './Event_Bus_Revice.vue';
</script>

<style scoped>
.eventbus {
    width: 100vw;
    height: 400px;
    background: black;

}

.box {
    display: flex;
    justify-content: space-between;
}
</style>