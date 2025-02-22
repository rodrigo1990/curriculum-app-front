<template>
  <div class="calendar-box" ref="calendarBox">
        <span v-show="showCalendar">
          <VDatePicker v-model="birthday" style="position:absolute;" />
        </span>
    <Field name="birthday" type="birthday" class="form-control" placeholder="Birthday"
           v-model="formattedBirthday"
           @click="showCalendar = !showCalendar"
           :rules="validateBirthday" />
    <ErrorMessage name="birthday" />
  </div>
</template>

<script setup lang="ts">
  const birthday = ref(new Date());
  const showCalendar = ref(false);
  const calendarBox = ref(null);

  const validateBirthday = (date) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if(!date) return 'This field is required';
    return regex.test(date) ? true : 'This field must be a date in the format dd/mm/yyyy';
  };

  const formatDate = (date) => {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formattedBirthday = computed(() => {
    const date = new Date();
    if(birthday.value) {
      if(formatDate(birthday.value) === formatDate(date))
        return '';
      else
        return formatDate(birthday.value)
    }
  });

  const handleClickOutside = (event) => {
    if (calendarBox.value && !calendarBox.value.contains(event.target)) {
      showCalendar.value = false;
    }
  }


  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });

</script>

<style scoped lang="scss">

</style>