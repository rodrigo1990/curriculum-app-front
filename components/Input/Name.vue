<script setup lang="ts">
  defineProps({
    name: {
      type: String,
      required:true
    },
    placeholder: {
      type: String,
      required:false
    },
  })

  const emit = defineEmits(['input']);

  const validateName = (name) => {
    if(!name) return 'This field is required';
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name) ? true : 'This field must contain only letters and spaces';
  };
</script>

<template>
  <Field :name="name"
         :type="name"
         class="form-control"
         :placeholder="placeholder"
         :rules="validateName"
         @input="(event) => emit('input', event.target.value)" />

  <ErrorMessage :name="name" />
</template>

<style scoped lang="scss">

</style>