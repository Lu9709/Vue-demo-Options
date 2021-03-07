<template>
  <div id="pink">
    {{n}}
    <button @click="num_div">/2</button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        n:100
      }
    },
    created() {
      console.log("Demo2实例出现在内存中");
    },
    mounted() {
      console.log("Demo2实例出现在页面中");
    },
    updated() {
      console.log('Demo2实例跟新了');
    },
    destroyed() {
      console.log("Demo2实例消亡了");
    },
    methods:{
      num_div(){
        this.n /=2
      }
    }
  }
</script>
<style>
#pink{
  background: pink;
}
</style>