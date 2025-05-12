<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted  } from 'vue';
import axios from 'axios';
// import imageUrl from './assets/static/photo/1.png'

onMounted(async () => {
  try {
    await axios.post('http://127.0.0.1:5000/blogs', {access_token: localStorage.getItem('access_token')});
  } catch(err) {
    const token = await axios.post('http://127.0.0.1:5000/refresh', {refresh_token: localStorage.getItem('refresh_token')});
    localStorage.setItem('access_token', token.data.access_token);
    localStorage.setItem('refresh_token', token.data.refresh_token);
  }
})

</script>

<template>
  <header>

    <div class="wrapper">
      <!-- <img :src="imageUrl" alt="Моё фото" /> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/add">Add</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
