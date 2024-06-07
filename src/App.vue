<template>
  <main id="app" :class="containerClass">
    <Navbar />
    <Identity />
    <Education />
    <Skills />
    <button @click="toggleDarkMode()" class="z-20 toggle-dark-mode">
      <img :src="isDarkMode ? Sun : Moon" alt="Dark Mode Toggle" />
    </button>
    <button
      v-if="isVisible"
      @click="scrollToTop"
      :class="['scroll-to-top', { 'light-mode': !isDarkMode, 'dark-mode': isDarkMode }]"
    >
      ↑
    </button>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDarkMode } from './composables/useDarkMode'
import Navbar from './components/NavbarComponent.vue'
import Identity from './components/IdentityComponent.vue'
import Education from './components/EducationComponent.vue'
import Skills from './components/SkillsComponent.vue'
import Sun from './assets/images/icons/sun.svg'
import Moon from './assets/images/icons/moon.svg'

const { isDarkMode, toggleDarkMode, containerClass } = useDarkMode()

const isVisible = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  isVisible.value = window.scrollY > 100 // Tampilkan tombol jika scrollY lebih dari 100px
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
#app {
  background-image: url('assets/images/background.avif');
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  transition:
    background-color 0.3s,
    color 0.3s;
}
html {
  scroll-behavior: smooth;
}

.animation-scroll {
  background-image: url('assets/images/background.avif');
}
.container-dark-theme {
  background-color: #1b1e23;
  color: #ffffff;
}
.container-light-theme {
  background-color: #fff;
  color: #000000;
}

.toggle-dark-mode {
  position: fixed;
  top: 23px;
  right: 23px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .toggle-dark-mode {
    position: fixed;
    top: 21px;
    right: 73px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}

.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 22px;
  color: #fff;
  border: solid 3px #585858;
  border-radius: 50%;
  cursor: pointer;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-to-top:hover {
  background-color: #6262629b;
  border: none;
}

.scroll-to-top.light-mode {
  color: #000;
  border-color: #000;
}

.scroll-to-top.dark-mode {
  color: #fff;
  border-color: #585858;
}
</style>
