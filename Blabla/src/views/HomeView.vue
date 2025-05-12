<template>
  <main>
    <p>Все посты</p>
    <div v-for="post in data">
      <RouterLink :to="{ name: 'edit', params: { id: post.id }}">Ссылка на пост</RouterLink>
      <p>{{ post.title }}</p>
      <p>{{ post.text }}</p>
      <br>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import axios from 'axios';
import router from '@/router';

const data = ref([]);


onMounted(async () => {
  let data1 = {
    access_token: localStorage.getItem('access_token')
  }
  data.value = await axios.post('http://127.0.0.1:5000/blogs', data1);
  data.value = data.value.data.blogs
})
</script>
