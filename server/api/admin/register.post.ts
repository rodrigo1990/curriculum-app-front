export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const response = await $fetch('http://localhost/api/admin/register',{
        method: 'POST',
        body:{
            email: body.email,
            password: body.password,
            username: body.username,
        }
    });
    return { response }
})