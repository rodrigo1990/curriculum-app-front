<template>
    <div class="my-container" style="padding-left: 1px;width: 100%;">
        <div style="width: 100%;">
            <strong :style="{ 'color': ''+color+'' }">
                Current content id: {{ $route.params.id }}
            </strong> 
            <div class="content" v-for="(item, index) in data" :key="index" :style="{ 'color': ''+color+'' }">
                <div v-html="item"></div>
            </div>
        </div>
    </div>
</template>


<script setup>
    const route = useRoute()

    // const {data: getContent, pendingBtnsBody} = await useFetch('/api/dummy/content/'+route.params.id)
    // const data = ref(getContent.value.response)


    const {data: content} = await useFetch('/api/'+route.params.user+'/'+route.params.slug)
    console.log(content.value.page.content.content)
    const data = ref(content.value.page.content.content)
    const color = ref(content.value.page.content.content.color)
    console.log(color.value)
    // const dataReal = ref(content.value.response)
</script>

<style scoped lang="scss">
    @import url("~/assets/styles/content.scss");
</style>