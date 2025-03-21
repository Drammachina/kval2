<template>
  <button v-on:click="logout">vyhod</button>
</template>

<script>
import router from '@/router';

export default {
  methods: {
    /**
     * 
     */
    logout() {
      localStorage.removeItem("token");
      router.push('/login')
    }
  }
}
</script>