<template>
  <div class="container">
    <div style="width:55rem;margin:auto;border:1px solid lightgray;border-radius:5px;padding:2rem;">
      <h2>Hello, please login =)</h2>
      <br>
      <input v-model="username" class="form-control" placeholder="Username..." />
      <br><br>
      <input v-model="password" class="form-control" placeholder="Password..." />
      <br><br>
      <button type="button" class="btn btn-default">Login</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .btn{
    border-color: lightgray;
    padding:15px 20px;
    line-height: 1;
    &:hover{
      background-color: lightgray;
    }
  }

</style>
<script setup>
  const username = ref(null);
  const password = ref(null);
</script>