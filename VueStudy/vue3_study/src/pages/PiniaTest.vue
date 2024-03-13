<template>
    <div class="page">
       <PiniaSum/>
        <h2>求和为:{{sum}}</h2>
    </div>
</template>

<script lang="ts" setup name="PiniaTest">

import PiniaSum from '@/components/PiniaSum.vue';
import { storeToRefs } from 'pinia';
import { useCountStore } from '@/store/count';

let n = 1;
let countStore = useCountStore()

//不能建议使用torefs，因为会吧store里的方法也变成ref类型，没有必要，我们只需要数据变成ref
let {sum,name,age,bigSum} = storeToRefs(countStore);

</script>



<style scoped>
 .page {
    padding: 10px;
}


</style>