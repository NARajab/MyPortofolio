<template>
  <main id="app" :class="containerClass">
    <Navbar />
    <Identity />
    <Education />
    <Skills />
    <Project />
    <Contact />
    <button v-if="showDarkModeButton" @click="toggleDarkMode()" class="z-50 toggle-dark-mode">
      <Sun v-if="isDarkMode" class="menu-button light-mode" :size="40" />
      <Moon v-else class="menu-button dark-mode" :size="40" />
    </button>
    <button
      id="buntton"
      v-if="isVisible"
      @click="scrollToTop"
      :class="['scroll-to-top', { 'light-mode': !isDarkMode, 'dark-mode': isDarkMode }]"
    >
      <ChevronUp />
    </button>
  </main>
</template>

<script setup>
import Navbar from './components/NavbarComponent.vue'
import { ref, onMounted, computed, onUnmounted, inject } from 'vue'
import { useDarkMode } from './composables/useDarkMode'
import Identity from './components/IdentityComponent.vue'
import Education from './components/EducationComponent.vue'
import Skills from './components/SkillsComponent.vue'
import Project from './components/ProjectComponent.vue'
import Contact from './components/ContactComponent.vue'
import { Moon, Sun, ChevronUp } from 'lucide-vue-next'

const { isDarkMode, toggleDarkMode, containerClass } = useDarkMode()

const isMobileNavOpen = inject('isMobileNavOpen', ref(false))

const isMobile = ref(false)

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const showDarkModeButton = computed(() => !(isMobile.value && isMobileNavOpen.value))

const isVisible = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  isVisible.value = window.scrollY > 100
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
  background-image: url('/images/background.avif');
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
  background-color: #e9e9e9;
  color: #000000;
}

button svg {
  transition: transform 0.3s ease;
}
button:hover svg {
  transform: rotate(20deg);
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
  padding: 16px;
  color: #fff;
  border: solid 1px #585858;
  border-radius: 50%;
  cursor: pointer;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-to-top svg {
  transition: transform 0.3s ease;
}
.scroll-to-top:hover svg {
  transform: translateY(-4px);
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
  border-color: #fff;
}
</style>
