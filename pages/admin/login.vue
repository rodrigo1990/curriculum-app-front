<template>
  <div class="container">
    <div style="width:55rem;margin:auto;border:1px solid lightgray;border-radius:5px;padding:2rem;">

      <h2>Hello, please login =)</h2>
      <br>
      <Form novalidate @submit="onSubmit">
        <InputEmail />
        <br><br>
        <InputPassword name="password" placeholder="Password"/>
        <br><br>
        <button class="btn btn-default">Login</button>
        <NuxtLink to="/admin/register" style="margin-left:1rem;">Are you new here ? Please register here</NuxtLink>
      </Form>
    </div>
  </div>
</template>
<script setup>
const { login } = useSanctumAuth()

const onSubmit = async (values) => {
  console.log(values)
  const credentials = {
    email: values.email,
    password: values.password,
  }

  try {
    await login(credentials).then(() => {
      const user = useSanctumUser();
      navigateTo('/admin/' + user.value.username)
    })
  }catch(err) {
    if(err.response.status === 401) {
      alert('You have not registered yet!')
    }
  }
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