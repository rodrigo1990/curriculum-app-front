<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// You might choose this based on an API call or logged-in status
const route = useRoute()
let layout = null
if(!route.params.user)
  layout = "default";
else {
  if( route.path.includes("admin"))
    layout = "admin"
  else
    layout = "user";
}
</script>
