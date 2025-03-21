<template>
    <main>
        <router-link :to="{ name: 'message', params: { id: post.id } }">create message</router-link>
        <h3>{{ post.title }}</h3>
        <p>{{ post.text }}</p>
        <button v-on:click="delete1"> delete </button>
        <div v-for="(message, index) in messages">

      <h3> {{ message.username }}</h3>
      <p>{{ message.text }}</p>
      <button v-on:click="delete2(message.id)"> delete </button>
      <router-link :to="{ name: 'redactmessage', params: { id: message.id } }">redact message</router-link>
    </div>
    </main>
  </template>
  
  <script>
  
  import axios from 'axios';
  import router from '@/router';
  
  export default {
    name: 'Home',
    data() {
      return {
        post: null,
        messages: null,
      }
    },
    methods: {
        async delete1() {
            let access_token = localStorage.getItem("access_token");
            let refresh_token = localStorage.getItem("refresh_token");

            const ditetoken = await axios.post('http://127.0.0.1:5000/refresh', {
                refresh_token: refresh_token,
            })
            console.log(ditetoken.data);
            localStorage.setItem("access_token", ditetoken.data.access_token);
            localStorage.setItem("refresh_token", ditetoken.data.refresh_token);
            access_token = localStorage.getItem("access_token");
            const ydaliti = await axios.post('http://127.0.0.1:5000/delete_blog', {
                blog_id: this.$route.params.id,
                access_token: access_token,
            })
            this.data = ydaliti.data
            console.log(ydaliti.data)
            router.push('/')
        },
        async delete2(message_id) {
            let access_token = localStorage.getItem("access_token");
            let refresh_token = localStorage.getItem("refresh_token");

            const ditetoken = await axios.post('http://127.0.0.1:5000/refresh', {
                refresh_token: refresh_token,
            })
            console.log(ditetoken.data);
            localStorage.setItem("access_token", ditetoken.data.access_token);
            localStorage.setItem("refresh_token", ditetoken.data.refresh_token);
            access_token = localStorage.getItem("access_token");
            const ydaliti = await axios.post('http://127.0.0.1:5000/delete_message', {
                message_id: message_id,
                access_token: access_token,
            })
            this.data = ydaliti.data
            console.log(ydaliti.data)
            router.push('/')
        }
    },
    async created() {
        let access_token = localStorage.getItem("access_token");
    let refresh_token = localStorage.getItem("refresh_token");
   
          const ditetoken = await axios.post('http://127.0.0.1:5000/refresh', {
            refresh_token: refresh_token,
          })
          console.log(ditetoken.data);
          localStorage.setItem("access_token", ditetoken.data.access_token);
          localStorage.setItem("refresh_token", ditetoken.data.refresh_token);
            access_token = localStorage.getItem("access_token");
      const response2 = await axios.post('http://127.0.0.1:5000/get_blog', {
        blog_id: this.$route.params.id,
        access_token: access_token,
      });
      this.post = response2.data
      console.log(response2.data)
      console.log(response2.status)
      const message = await axios.post('http://127.0.0.1:5000/get_messages', {
        blog_id: this.$route.params.id,
        access_token: access_token,
      });
      this.messages = message.data.messages
      console.log(this.messages)
    }
  }
  
  </script>

  