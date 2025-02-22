<template>
  <div class="panel">
    <h2>Personal data</h2>
    <Form novalidate @submit="onSubmit">
      <InputName name="name" placeholder="Name" />
      <br>
      <InputName name="surname" placeholder="Surname" />
      <br>
      <InputEmail />
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
</script>
<style scoped lang="scss">
  @import url("~/assets/styles/admin/curriculum/fill/personal-data.scss");
  @import url("~/assets/styles/calendar-box.scss");
</style>