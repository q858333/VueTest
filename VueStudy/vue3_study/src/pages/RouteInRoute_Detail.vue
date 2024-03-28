<template>
    <div class="page">
        参数:id:{{id}} content:{{content}}
    </div>
</template>

<script lang="ts" setup>

import { reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';

// let route = useRoute();
// let {query} = toRefs(route);
// let {params} = toRefs(route);
defineProps(['content','id']);

</script>



<style scoped>
 .page {
    background-color: white;
}

</style>