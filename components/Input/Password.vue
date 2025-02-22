<script setup lang="ts">
const props = defineProps({
  isHardMode:{
    type: Boolean,
    required: false,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false
  },
})

const emit = defineEmits(['input']);

const validatePassword = (password) => {
  if (!password) {
    return 'This field is required';
  }
  if(props.isHardMode) {
    return validateHardPassword(password);
  }
  return true;
}

const validateHardPassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    return `Password must be at least ${minLength} characters long`;
  }
  if (!hasUpperCase) {
    return 'Password must contain at least one uppercase letter';
  }
    if (!hasNumber) {
      return 'Password must contain at least one number';
    }
    if (!hasSpecialChar) {
      return 'Password must contain at least one special character';
    }
    return true;

}
</script>

<template>
  <Field :name="name"
         :type="name"
         class="form-control"
         :placeholder="placeholder"
         :rules="validatePassword"
         @input="(event) => emit('input', event.target.value)"/>
  <ErrorMessage :name="name" />
</template>

<style scoped lang="scss">

</style>