<template>
  <div class="panel">
    <h2>Personal data</h2>
    <Form novalidate @submit="onSubmit">
      <Field name="name" type="name" class="form-control" placeholder="Name" :rules="validateName"  />
      <ErrorMessage name="name" />
      <br>
      <Field name="surname" type="surname"  class="form-control" placeholder="Surname" :rules="validateName"/>
      <ErrorMessage name="surname" />
      <br>
      <input type="text" class="form-control" placeholder="Birthday" />
      <br>
      <button class="btn btn-primary">Next</button>
<!--      <NuxtLink :to="'/admin/'+$route.params.user+'/curriculum/fill/profile-picture'"-->
<!--                class="btn btn-primary">-->
<!--        Next-->
<!--      </NuxtLink>-->
    </Form>
  </div>
</template>
<script setup>
  const onSubmit = (values) => {
    console.log(values);
  }

  const validateName = (name) => {
    if(!name) return 'This field is required';
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name) ? true : 'This field must contain only letters and spaces';
  };


</script>
<style scoped lang="scss">
@import url("~/assets/styles/admin/curriculum/fill/personal-data.scss");
</style>