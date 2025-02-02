export default defineEventHandler (async () => {
    const response = await $fetch('http://localhost/api/users/get');
    return response.data;
})