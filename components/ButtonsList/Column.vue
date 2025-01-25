<template>
  <div class="buttons-column">
    <ul>
        <li v-for="(item) in props.buttons" :key="item.button.id">
        
          <ButtonColumn :slug="item.button.slug"
           :description="item.button.name"
            :class="item.class"
            :styles="item.styles"
          />
        
        </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  buttons: {
    type: Array,
    required:true
  },
})
</script>

<style scoped lang="scss">
    @import url("~/assets/styles/buttons-column.scss");
</style>