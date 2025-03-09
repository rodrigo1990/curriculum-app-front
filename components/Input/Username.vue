<script setup lang="ts">
  const emit = defineEmits(['input']);

  const validateUsername = async (values) => {
   const exists = await useFetch('/api/admin/get/username/'+values).then((response) => {
      return !response.data.value.response;
    })
    return exists ?? 'Username already exists';
  };
</script>

<template>
  <Field name="username"
         type="username"
         class="form-control"
         placeholder="Username"
         :rules="validateUsername"
         @input="(event) => emit('input', event.target.value)" />
  <ErrorMessage name="username" />
</template>

<style scoped lang="scss">

</style>