<template>
    <input type="text" placeholder="text" v-model="text">
    <input type="text" placeholder="title" v-model="title">
    <button v-on:click="redact"> redact</button>
</template>

<script>
import axios from 'axios'
import router from '@/router';
export default {
    data() {
        return {
            text: '',
            title: '',
            data: null,
        }

    },
    methods: {
        async redact() {
            let access_token = localStorage.getItem("access_token");
            let refresh_token = localStorage.getItem("refresh_token");

            const ditetoken = await axios.post('http://127.0.0.1:5000/refresh', {
                refresh_token: refresh_token,
            })
            console.log(ditetoken.data);
            localStorage.setItem("access_token", ditetoken.data.access_token);
            localStorage.setItem("refresh_token", ditetoken.data.refresh_token);
            access_token = localStorage.getItem("access_token");
            const obnoviti = await axios.post('http://127.0.0.1:5000/edit_blog', {
                text: this.text,
                title: this.title,
                blog_id: this.$route.params.id,
                access_token: access_token,
            })
            this.data = obnoviti.data
            console.log(obnoviti.data)
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
      this.title = response2.data.title
      this.text = response2.data.text
      console.log(response2.data)
      console.log(response2.status)
    }
}
</script>