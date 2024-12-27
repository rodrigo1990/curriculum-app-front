export default defineEventHandler (async (event) => {
    let id = Number(getRouterParam(event, 'id'))
    let user = String(getRouterParam(event, 'user'))
    const response = await $fetch('http://localhost/api/'+user+'/'+id);
    return response.data;
})