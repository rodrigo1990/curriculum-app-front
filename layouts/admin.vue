<template>
    <div>
        <div style="
          border:1px solid lightgray;
          padding:20px 20px;
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          align-items: center;"
        >
          <h3 style="color:lightgray;margin:0">CV Maker</h3>
          <a @click="logout" v-if="isAuthenticated" style="font-weight: bold;">Logout</a>
        </div>
      <br><br>
        <slot />
    </div>
</template>
<style lang="scss">
  @import url("~/assets/styles/app.scss");
</style>
<script setup>
import {navigateTo} from "#app";

const route = useRoute()
const isAuthenticated = ref(false);

onMounted(() => {
  checkAuthenticated()
})

watch(() => route.fullPath, () => {
  checkAuthenticated()
})

const checkAuthenticated = () => {
  const user = useSanctumUser()
  isAuthenticated.value = !!user.value
  if(route.params.user && !isAuthenticated.value){
    navigateTo('/admin/login');
  }
}
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
