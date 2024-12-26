export default defineEventHandler (async (event) => {
    const user = String(getRouterParam(event, 'user'))
    const response = await $fetch('http://localhost/api/'+user);
    return response.data;
})