<template>
  <div>
    <audio ref="audioRef" :src="audioSrc" preload="none" aria-label="Reproductor de podcast" />
    <button
      class="podcast-btn"
      :aria-label="isPlaying ? 'Pausar podcast' : 'Reproducir podcast'"
      :aria-pressed="isPlaying ? 'true' : 'false'"
      @click="togglePlay"
    >
      <span v-if="!isPlaying" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
      </span>
      <span v-else aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>
      </span>
      <span>Escuchar Podcast</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const audioSrc = '/audio.mp3' // Debe existir en /public o raíz del deploy
const audioRef = ref(null)
const isPlaying = ref(false)

function togglePlay() {
  const el = audioRef.value
  if (!el) return
  if (el.paused) el.play(); else el.pause()
}

function handlePlay() { isPlaying.value = true }
function handlePause() { isPlaying.value = false }

onMounted(() => {
  const el = audioRef.value
  if (!el) return
  el.addEventListener('play', handlePlay)
  el.addEventListener('pause', handlePause)
})

onBeforeUnmount(() => {
  const el = audioRef.value
  if (!el) return
  el.removeEventListener('play', handlePlay)
  el.removeEventListener('pause', handlePause)
})
</script>

<script>
export default { name: 'PodcastPlayer' }
</script>
