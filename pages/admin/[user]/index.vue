<template>
  <div class="panel">
    <h2>Lets fill your curriculum first</h2>
    <p>Here you can fill your curriculum with your personal information, education, experience, skills and more.</p>
    <p>Click on the button below to start filling your curriculum.</p>

    <NuxtLink :to="'/admin/'+$route.params.user+'/curriculum/fill/personal-data'"
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