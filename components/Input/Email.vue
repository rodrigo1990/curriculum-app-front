<script setup lang="ts">
  const validateEmail = (email) => {
    if(!email) return 'This field is required';
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    return regex.test(email) ? true : 'Add a valid email';
  };
</script>

<template>
  <Field name="email" type="email"  class="form-control" placeholder="Email" :rules="validateEmail"/>
  <ErrorMessage name="email" />
</template>

<style scoped lang="scss">

</style>