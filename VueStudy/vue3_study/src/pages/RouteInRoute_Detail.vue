<template>
    <div class="page">
        query参数:{{query.content}}
    </div>
</template>

<script lang="ts" setup>

import { reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';

let route = useRoute();
let {query} = toRefs(route);
let {params} = toRefs(route);

</script>



<style scoped>
 .page {
    background-color: white;
}

</style>