<template>
  <div class="container py-4">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="Username" v-model="username" required>
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" placeholder="Password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      const ditetoken = await axios.post('http://127.0.0.1:5000/login', {
        password: this.password,
        username: this.username,
      })
      localStorage.setItem("access_token", ditetoken.data.access_token);
      localStorage.setItem("refresh_token", ditetoken.data.refresh_token);
      router.push('/');
    }
  }
}
</script>
