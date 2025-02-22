<script setup lang="ts">
const passwordState = ref('');
const client = useSanctumClient();

const onSubmit = async (values) => {
  await client('/api/admin/sign-up', {
    method: 'POST',
    body: {
      email: values.email,
      password: values.password
    }
  }).then(() => {
    navigateTo('/admin/'+route.params.user+'/curriculum/fill/profile-picture')
  }).error((err) => {
    console.log(err)
  });
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


</script>

<template>
  <div class="container">
    <div style="width:55rem;margin:auto;border:1px solid lightgray;border-radius:5px;padding:2rem;">

      <h2>Hey welcome! ;) </h2>
      <br>
      <Form novalidate @submit="onSubmit">
        <InputEmail />
        <br><br>
        <InputPassword name="password" placeholder="Password" :is-hard-mode="true" @input="setPasswordInState"/>
        <br><br>
        <Field name="repeatPassword" type="password" class="form-control" placeholder="Repeat Password" :rules="validateRepeatPassword" />
        <ErrorMessage name="repeatPassword" />
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