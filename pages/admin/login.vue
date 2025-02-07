<template>
  <div class="container">
    <div style="width:55rem;margin:auto;border:1px solid lightgray;border-radius:5px;padding:2rem;">
      <h2>Hello, please login =)</h2>
      <br>
      <input v-model="email" class="form-control" placeholder="Email..." />
      <br><br>
      <input v-model="password" class="form-control" placeholder="Password..." />
      <br><br>
      <button type="button" class="btn btn-default" @click="submit">Login</button>
    </div>
  </div>
</template>
<script setup>
const { login } = useSanctumAuth()
const email = ref(null)
const password = ref(null)

const submit = async () => {

  const credentials = {
    email: email.value,
    password: password.value,
  }

  await login(credentials).then( () =>  {
    const user = useSanctumUser();
    navigateTo('/admin/'+user.value.username)
  })
}

</script>

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