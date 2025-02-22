export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const response = await $fetch('http://localhost/api/admin/login',{
        method: 'POST',
        body:{
            email: body.email,
            password: body.password
        }
    });
    return { response }
})