export default defineEventHandler (async (event) => {
    let slug = String(getRouterParam(event, 'slug'))
    let user = String(getRouterParam(event, 'user'))
    const response = await $fetch('http://localhost/api/page/'+user+'/'+slug);
    return response.data;
})