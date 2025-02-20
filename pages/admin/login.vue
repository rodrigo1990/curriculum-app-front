<template>
  <div class="container">
    <div style="width:55rem;margin:auto;border:1px solid lightgray;border-radius:5px;padding:2rem;">

      <h2>Hello, please login =)</h2>
      <br>
      <Form novalidate @submit="onSubmit">
        <Field name="email" type="email" class="form-control" placeholder="Email..." :rules="validateEmail" />
        <ErrorMessage name="email" />
        <br><br>
        <Field name="password" type="password" class="form-control" placeholder="Password..." :rules="validatePassword" />
        <ErrorMessage name="password" />
        <br><br>
        <button class="btn btn-default">Login</button>
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

const validateEmail = (email) => {
  if(!email) return 'This field is required';
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
  return regex.test(email) ? true : 'Add a valid email';
};

const validatePassword = (password) => {
  if(!password)
    return 'This field is required'
  else
    return true;
};

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