<template>
    <section id="header">
        <div class="container-fluid">
        <div class="header">
            <div class="row">
                <div class="col-lg-6">
                  <ClientOnly>
                    <div class="logo" :style="{ 'background-image': 'url(/images/site/logo/'+logo+'' }"> </div>
                    <template #fallback>
                      <!-- this will be rendered on server side -->
                      <span class="loader"></span>>
                    </template>
                  </ClientOnly>
                </div>
                <div class="col-lg-6">
                    <ButtonsListHeader :buttons="props.buttons"/>
                </div> 
            </div>
        </div>
        </div>
  </section>
</template>

<script setup>
const props = defineProps({
  buttons: {
    type: Array,
    required:false
  },
  logo:{
    type:String,
    required:false
  }
})
</script>

<style scoped lang="scss">
.logo {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 13px;
  width: 4rem;
  height: 5rem;
  float:left;
  position:relative;
  animation: fadeIn 1.5s;
}
</style>