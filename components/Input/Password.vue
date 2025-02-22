<script setup lang="ts">
  const validatePassword = (password) => {
    if(!password)
      return 'This field is required'
    else
      return true;
  }
</script>

<template>
  <Field name="password" type="password" class="form-control" placeholder="Password..." :rules="validatePassword" />
  <ErrorMessage name="password" />
</template>

<style scoped lang="scss">

</style>