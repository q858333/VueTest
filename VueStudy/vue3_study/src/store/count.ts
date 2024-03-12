import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
    actions:{
         addNumber(value: number) {
        console.log('addNumber');
          this.sum+=value;
        }
    },

    state(){
        return {
            sum:0,
            name:'章三',
            age:10,
        }
    }
})