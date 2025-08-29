<template>
  <TopBar />
  <PageHeader />
  <main class="main">
    <div class="container">
      <RouterView />
    </div>
  </main>
  <PageFooter />
  <PodcastPlayer />
</template>
<script setup>
import { RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import PodcastPlayer from './components/PodcastPlayer.vue'
</script>
