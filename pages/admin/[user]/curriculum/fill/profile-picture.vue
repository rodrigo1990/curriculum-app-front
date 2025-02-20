<template>
  <div class="panel">
    <h2>Profile picture</h2>
    <div style="border:1px solid gray;width: 10vw;height: 10vh;position:relative;">
      <span style="margin: auto;display:block;position:absolute;text-align: center;">Picture</span>
    </div>
    <br>
    <NuxtLink :to="'/admin/'+$route.params.user+'/fill-curriculum'"
              style="margin-right: 1vw;"
              class="btn btn-primary">
      Do it later
    </NuxtLink>
    <NuxtLink :to="'/admin/'+$route.params.user+'/fill-curriculum'"
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