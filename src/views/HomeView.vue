<template>
  <main>
    <div class="container py-4">
      <div v-for="(post, index) in data" :key="index" class="mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.text }}</p>
            <RouterLink class="btn btn-primary" :to="{ name: 'blog', params: { id: post.id } }">Read More</RouterLink>
            <RouterLink class="btn btn-warning ms-2" :to="{ name: 'redact', params: { id: post.id } }">Edit</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      data: null
    }
  },
  async created() {
    let access_token = localStorage.getItem("access_token");
    let refresh_token = localStorage.getItem("refresh_token");

    const ditetoken = await axios.post('http://127.0.0.1:5000/refresh', { refresh_token: refresh_token });
    localStorage.setItem("access_token", ditetoken.data.access_token);
    localStorage.setItem("refresh_token", ditetoken.data.refresh_token);
    access_token = localStorage.getItem("access_token");

    const response2 = await axios.post('http://127.0.0.1:5000/blogs', { access_token: access_token });
    this.data = response2.data.blogs;
  }
}
</script>
