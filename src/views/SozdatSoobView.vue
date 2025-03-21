<template>
    <input type="text" placeholder="text" v-model="text">
    <button v-on:click="create"> sozdat</button>
</template>

<script>
import axios from 'axios'
import router from '@/router';
export default {
    data() {
        return {
            text: '',
            data: null,
        }

    },
    methods: {
        async create() {
            let access_token = localStorage.getItem("access_token");
    let refresh_token = localStorage.getItem("refresh_token");
   
          const ditetoken = await axios.post('http://127.0.0.1:5000/refresh', {
            refresh_token: refresh_token,
          })
          console.log(ditetoken.data);
          localStorage.setItem("access_token", ditetoken.data.access_token);
          localStorage.setItem("refresh_token", ditetoken.data.refresh_token);
          access_token = localStorage.getItem("access_token");
            const sozdaitemessage = await axios.post('http://127.0.0.1:5000/add_message', {
                text: this.text,
                access_token: access_token,
                blog_id: this.$route.params.id,
            })
            this.data = sozdaitemessage.data
            console.log(sozdaitemessage.data)
            router.push('/')
        }
    }
}
</script>