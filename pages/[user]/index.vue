<template>
    <div></div>
</template>
<script setup>
const route = useRoute()
/*TODO: Reforwar to the default page of the user*/
if(route.params.slug == null)
    navigateTo('/'+route.params.user+'/home')

</script>