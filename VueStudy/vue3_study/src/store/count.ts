import { defineStore } from "pinia";

/// 选项式写法
// export const useCountStore = defineStore('count',{
//     actions:{
//          addNumber(value: number) {
//         console.log('addNumber');
//           this.sum+=value;
//         }
//     },

//     state(){
//         return {
//             sum:0,
//             name:'章三',
//             age:10,
//         }
//     },
//     getters:{

//         bigSum(state):number{
//             return this.sum*10;
//         }
//     }
// })


import { computed, ref } from "vue";
/// 组合式写法
export const useCountStore = defineStore('count',()=>{

    let sum = ref(0);
    let name = ref('章三');
    let age = ref(10);

    function addNumber(value: number) {
        console.log('addNumber');
          sum.value+=value;
    }
    

    let bigSum = computed({
        get() {
            return sum.value*10;
        },
        
       set(val) {
        console.log('set - ',val)
       }
        
    })

    return {sum,name,age,addNumber,bigSum};

})