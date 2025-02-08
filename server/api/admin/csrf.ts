export default defineEventHandler (async (event) => {
    const response = $fetch('http://localhost/sanctum/csrf-cookie');
})