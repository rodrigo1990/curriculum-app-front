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
      <InputCalendar />
      <br>
      <button class="btn btn-primary">Next</button>
    </Form>
  </div>
</template>
<script setup>
  const route = useRoute()

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



  const validateEmail = (email) => {
    if(!email) return 'This field is required';
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    return regex.test(email) ? true : 'Add a valid email';
  };




</script>
<style scoped lang="scss">
@import url("~/assets/styles/admin/curriculum/fill/personal-data.scss");
@import url("~/assets/styles/calendar-box.scss");
</style>