<script setup lang="ts">
  const emit = defineEmits(['input']);

  const validateUsername = async (name) => {
    await useFetch('/api/admin/get-username', {
      method: 'POST',
      body: {
        email: values.email,
        password: values.password
      }
    }).then((response) => {
      console.log('validate user',response)
    })
  };
</script>

<template>
  <Field name="username"
         type="username"
         class="form-control"
         placeholder="Username"
         :rules="validateUsername"

         @input="(event) => emit('input', event.target.value)" />
  <ErrorMessage :name="name" />
</template>

<style scoped lang="scss">

</style>