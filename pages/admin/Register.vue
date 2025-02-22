<script setup lang="ts">
const passwordState = ref('');

const onSubmit = async (values) => {
  await useFetch('/api/admin/register', {
    method: 'POST',
    body: {
      email: values.email,
      password: values.password
    }
  }).then(() => {
      console.log('User register ;)')
  })
}

const validateRepeatPassword = (password) => {
  if (!password) {
    return 'This field is required';
  }

  if (password != passwordState.value) {
    return 'Passwords do not match';
  }

  return true;
}

const setPasswordInState = (password) => {
  console.log('setPasswordInState');
  console.log(password)
  passwordState.value = password;
  console.log('password state',password.value)
}

const validateUsername = (username) => {
  console.log(username)
}
</script>

<template>
  <div class="container">
    <div style="width:55rem;margin:auto;border:1px solid lightgray;border-radius:5px;padding:2rem;">

      <h2>Hey welcome! ;) </h2>
      <br>
      <Form novalidate @submit="onSubmit">
        <InputEmail />
        <br>
        <InputName name="username" placeholder="Username" @input="validateUsername"/>
        <br>
        <InputPassword name="password" placeholder="Password" :is-hard-mode="true" @input="setPasswordInState"/>
        <br>
        <Field name="repeatPassword" type="password" class="form-control" placeholder="Repeat Password" :rules="validateRepeatPassword" />
        <ErrorMessage name="repeatPassword" />
        <br>
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