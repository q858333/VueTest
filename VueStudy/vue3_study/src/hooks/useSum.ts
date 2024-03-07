

import {ref } from 'vue';

export default function () {
    let sum = ref(0);
    function updateData () {
    sum.value+=1;
    }

    return {sum,updateData};
}