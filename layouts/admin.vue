<template>
    <div>
        <div style="border:1px solid lightgray;padding:20px 20px;">
          <h3 style="color:lightgray">CV Maker</h3>
        </div>
      <br><br>
        <slot />
    </div>
</template>
<script setup>

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
