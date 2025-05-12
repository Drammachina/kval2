<template>
  <main>
    <div>
      <p>Username</p>
      <input v-model="username">
    </div>
    <div>
      <p>Password</p>
      <input type="password" v-model="password">
    </div>
    
    <button @click="register" type="submit">Регистрация</button>
  </main>
</template>

<script setup>
import axios from 'axios';
import router from '@/router';
import { ref } from 'vue'


const username = ref('')
const password = ref('')

async function register() {
  let data1 = {
    username: username.value,
    password: password.value,
  }
  await axios.post('http://127.0.0.1:5000/register', data1)
  const token = await axios.post('http://127.0.0.1:5000/login', data1)
  localStorage.setItem('access_token', token.data.access_token)
  localStorage.setItem('refresh_token', token.data.refresh_token)
  router.push('/')
}

</script>
