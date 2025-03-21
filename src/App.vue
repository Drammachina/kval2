<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="container py-4">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">Home</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/login">Login</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/register">Registration</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/create">Create</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <RouterView />
  </main>
</template>