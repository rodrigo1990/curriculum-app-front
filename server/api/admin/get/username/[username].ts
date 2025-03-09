export default defineEventHandler(async (event) => {
    const username = String(getRouterParam(event, 'username'))
    const response = await $fetch('http://localhost/api/admin/get-username/'+username);
    return response.data;
})