<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div style="width:55rem;margin:auto;border:1px solid lightgray;border-radius:5px;padding:2rem;">

      <h2>Hey welcome! ;) </h2>
      <br>
      <Form novalidate @submit="onSubmit">
        <InputEmail />
        <br><br>
        <InputPassword name="password" placeholder="Password" is-hard-mode="true"/>
        <br><br>
        <InputPassword name="repeat-password" placeholder="Repeat Password"/>
        <br><br>
        <button class="btn btn-default">Sign up!</button>
      </Form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.btn{
  border-color: lightgray;
  padding:15px 20px;
  line-height: 1;
  &:hover{
    background-color: lightgray;
  }
}
</style>