<template>
    <div>
      <div style="
          border:1px solid lightgray;
          padding:20px 20px;
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          align-items: center;"
      >
        <h3 style="color:lightgray;margin:0">CV Maker</h3>
        <a style="font-weight: bold;color:black;margin-bottom:20px;float:right;text-decoration: none;" href="admin/login">login</a>
      </div>
      <br><br>
        <h1>Company Logo</h1>
        <p>Welcome to the first innovative curriculum creator, happy to have you here :) </p>
        <br><br>
        <h2>Check Cvs below:</h2>
        <ul class="flex" style="max-height: 50vh;
                              margin-left:1rem;
                              max-width: 50vw;
                              padding-top:10px;
                              padding-bottom:10px;
                              overflow-y: scroll;
                              border:1px solid gray;
                              border-radius:5px;">
          <li v-for="(user) in users">
            <a :href="user.username" target="_blank">
              {{ user.username }}
            </a>
          </li>
        </ul>
    </div>
</template>
<script setup>

useHead({
  style: [
    {
      children: `
        body {
          background-color: pink;
        }
      `
    }
  ]
})
const {data} = await useFetch('/api/users/get')
const users = ref(data.value.users)
</script>
