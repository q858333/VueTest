<script setup lang="ts">
import { ref } from 'vue'
/// msg是接受外部数据的参数名
defineProps(['msg']);
/// myclick是自定义事件名词
let myEmits = defineEmits(['myclick']);


const count = ref(0);

function buttonClick(){
  count.value++;
  myEmits("myclick",count);
}

</script>

<template>
  <div class="son">
    <h1>{{ msg }}</h1>
  </div>

  <div class="card">
    <button type="button" @click="buttonClick">自定义组建事件 {{$props.msg}} count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.son {
  width: 50vw;
  height: 100px;
  background: red;
}
</style>

<!-- function defineProps<T>() {
  throw new Error('Function not implemented.')
} -->
