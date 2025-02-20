<template>
  <div class="panel">
    <h2>Personal data</h2>
    <input type="text" class="form-control" placeholder="Name" />
    <br>
    <input type="text" class="form-control" placeholder="Surname" />
    <br>
    <input type="text" class="form-control" placeholder="Birthday" />
    <br>
    <NuxtLink :to="'/admin/'+$route.params.user+'/curriculum/fill/profile-picture'"
              class="btn btn-primary">
      Next
    </NuxtLink>

  </div>
</template>
<script setup>
</script>
<style scoped lang="scss">
@import url("~/assets/styles/admin/curriculum/fill/personal-data.scss");
</style>