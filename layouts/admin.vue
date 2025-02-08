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

onBeforeMount(() => {
  checkAuthenticated()
})

watch(() => route.fullPath, () => {
  checkAuthenticatedComparingUrls()
})

const checkAuthenticated = () => {
  const user = useSanctumUser()

  if(user.value && route.params.user) {
    if (user.value.username !== route.params.user)
      navigateTo('/admin/'+user.value.username)
  }

  if(user.value) {
    isAuthenticated.value = true
    if ((route.params.user && !isAuthenticated.value)) {
      forwardLogin()
    }
  }else{
    isAuthenticated.value = false
    forwardLogin()
  }
}

const checkAuthenticatedComparingUrls = () => {
  const user = useSanctumUser()
  if(user.value && route.params.user) {
    isAuthenticated.value = true
    if (user.value.username !== route.params.user) {
      forwardLogin()
    }
  }else{
    isAuthenticated.value = false
  }
}

const logout = async () => {
  const { logout } = useSanctumAuth();
  await logout();
}

const forwardLogin = () => {
  navigateTo('/admin/login')
}
</script>

<style lang="scss" scoped>
a{
  cursor: pointer;
}
</style>
