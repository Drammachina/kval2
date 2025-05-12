<template>
  <main>
    <h2>Пост</h2>
    <div>
      <p>Title</p>
      <input v-model="data.title">
    </div>
    <div>
      <p>Text</p>
      <input v-model="data.text">
    </div>
    
    <button @click="save">Сохранить</button>
    <button @click="remove">Удалить</button>

    <br>
    <h2>Создать сообщение</h2>
    <div>
      <p>Text</p>
      <input v-model="text">
    </div>
    <button @click="save_message">Сохранить</button>
    <h2>Сообщения</h2>
    <div v-for="mes in messages">
      <p>{{ mes.username }}</p>
      <input v-model="mes.text">
      <button @click="edit_message(mes.id, mes.text)">Сохранить</button>
      <button @click="remove_message(mes.id)">Удалить</button>
      <br>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import axios from 'axios';
import router from '@/router';
import { useRoute } from 'vue-router'

const data = ref([]);
const messages = ref([]);
const text = ref('');

const blog_id = useRoute().params.id

async function save() {
  let data1 = {
    title: data.value.title,
    text: data.value.text,
    blog_id: blog_id,
    access_token: localStorage.getItem('access_token')
  }
  await axios.post('http://127.0.0.1:5000/edit_blog', data1);
};
async function remove() {
  let data1 = {
    blog_id: blog_id,
    access_token: localStorage.getItem('access_token')
  }
  await axios.post('http://127.0.0.1:5000/delete_blog', data1);
  router.push('/')
}

async function save_message() {
  let data1 = {
    text: text.value,
    blog_id: blog_id,
    access_token: localStorage.getItem('access_token')
  }
  await axios.post('http://127.0.0.1:5000/add_message', data1);
  router.go(0);
};

async function edit_message(message_id, text) {
  let data1 = {
    message_id: message_id,
    text: text,
    access_token: localStorage.getItem('access_token')
  }
  await axios.post('http://127.0.0.1:5000/edit_message', data1);
  router.go(0);
};

async function remove_message(message_id) {
  let data1 = {
    message_id: message_id,
    access_token: localStorage.getItem('access_token')
  }
  await axios.post('http://127.0.0.1:5000/delete_message', data1);
  router.go(0);
};

onMounted(async () => {
  let data1 = {
    access_token: localStorage.getItem('access_token'),
    blog_id: blog_id
  }
  data.value = await axios.post('http://127.0.0.1:5000/get_blog', data1);
  data.value = data.value.data

  messages.value = await axios.post('http://127.0.0.1:5000/get_messages', data1);
  messages.value = messages.value.data.messages;

})
</script>