<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Регистрация</h2>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="username" class="form-label">Имя пользователя</label>
        <input type="text" class="form-control" id="username" v-model="username" placeholder="Введите имя пользователя" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input type="password" class="form-control" id="password" v-model="password" placeholder="Введите пароль" required />
      </div>
      <button type="submit" class="btn btn-primary w-100">Зарегистрироваться</button>
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
    };
  },
  methods: {
    async register() {
      try {
        const ditetoken = await axios.post('http://127.0.0.1:5000/register', {
          username: this.username,
          password: this.password,
        });

        console.log(ditetoken.data);

        const daitetoken = await axios.post('http://127.0.0.1:5000/login', {
          username: this.username,
          password: this.password,
        });

        console.log(daitetoken.data);

        localStorage.setItem('access_token', daitetoken.data.access_token);
        localStorage.setItem('refresh_token', daitetoken.data.refresh_token);

        router.push('/');
      } catch (error) {
        console.error('Ошибка при регистрации или логине:', error);
        //     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
      }
    },
  },
};
</script>
