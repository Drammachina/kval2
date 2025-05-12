<template>
  <main>
    <div>
      <p>Title</p>
      <input v-model="title">
    </div>
    <div>
      <p>Text</p>
      <input v-model="text">
    </div>
    
    <button @click="create" type="submit">Создать</button>
  </main>
</template>

<script setup>
import axios from 'axios';
import router from '@/router';
import { ref } from 'vue'


const title = ref('')
const text = ref('')

async function create() {
  let data1 = {
    title: title.value,
    text: text.value,
    access_token: localStorage.getItem('access_token')
  }
  await axios.post('http://127.0.0.1:5000/add_blog', data1);
  router.push('/')
}

</script>
