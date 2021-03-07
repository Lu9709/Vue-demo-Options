<template>
  <div>
    props-外部数据(+2):{{ message }}
    <button @click="fn">fn call</button>
  </div>
</template>
<script>
export default {
  props: ['message', 'fn'],
  }
</script>
<style></style>