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
      <Field name="email" type="email"  class="form-control" placeholder="Email" :rules="validateEmail"/>
      <ErrorMessage name="email" />
      <br>
      <Field name="telephone" type="telephone"  class="form-control" placeholder="Telephone" />
      <ErrorMessage name="telephone" />
      <br>
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
      <br>
      <button class="btn btn-primary">Next</button>
    </Form>
  </div>
</template>
<script setup>
  const route = useRoute()
  const birthday = ref(new Date());
  const showCalendar = ref(false);
  const calendarBox = ref(null);
  const client = useSanctumClient();
  const onSubmit = async (values) => {
    await client('/api/admin/curriculum/fill-personal-data', {
      method: 'POST',
      body: {
        name: values.name,
        surname: values.surname,
        email: values.email,
        telephone: values.telephone,
        birthday: values.birthday
      }
    }).then(() => {
      navigateTo('/admin/'+route.params.user+'/curriculum/fill/profile-picture')
    }).error((err) => {
      console.log(err)
    });
  }

  const validateName = (name) => {
    if(!name) return 'This field is required';
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name) ? true : 'This field must contain only letters and spaces';
  };

  const validateBirthday = (date) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if(!date) return 'This field is required';
    return regex.test(date) ? true : 'This field must be a date in the format dd/mm/yyyy';
  };

  const validateEmail = (email) => {
    if(!email) return 'This field is required';
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    return regex.test(email) ? true : 'Add a valid email';
  };


  const handleClickOutside = (event) => {
    if (calendarBox.value && !calendarBox.value.contains(event.target)) {
      showCalendar.value = false;
    }
  }

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


  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });

</script>
<style scoped lang="scss">
@import url("~/assets/styles/admin/curriculum/fill/personal-data.scss");
@import url("~/assets/styles/calendar-box.scss");
</style>