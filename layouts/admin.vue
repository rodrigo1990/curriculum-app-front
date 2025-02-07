<template>
    <div>
        <div style="border:1px solid lightgray;padding:20px 20px;">
          <h3 style="color:lightgray">CV Maker</h3>
          <a @click="logout" v-if="isAuthenticated">Logout</a>
        </div>
      <br><br>
        <slot />
    </div>
</template>
<script setup>
const user = useSanctumUser()
const isAuthenticated = !!user.value
const logout = async () => {
  const { logout } = useSanctumAuth();
  await logout();
}

useHead({
  style: [
    {
      children: `
        body {
          background-color: orange;
        }
      `
    }
  ]
})
</script>

<style lang="scss" scoped>
a{
  cursor: pointer;
}
</style>
