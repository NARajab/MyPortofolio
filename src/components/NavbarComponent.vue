<template>
  <div
    class="fixed z-10 flex flex-row justify-between w-full py-4 px-7 md:px-10 lg:px-20 navbar"
    :class="{ 'navbar-scrolled': isScrolled, 'md:mobile-nav': isMobileNavOpen }"
  >
    <div class="flex">
      <a href="#" class="pt-1 text-2xl font-amita">AliRajabPorto;</a>
    </div>
    <div class="flex mobile-nav">
      <ul v-show="isMobileNavOpen" class="items-center text-xl md:flex gap-9 font-poppins">
        <li><a href="#education" @click="isMobileNavOpen.valueOf = false">Education</a></li>
        <li><a href="#skills" @click="isMobileNavOpen.valueOf = false">Skills</a></li>
        <li><a href="#projects" @click="isMobileNavOpen.valueOf = false">Project</a></li>
        <li class="pl-10">
          <a :href="githubUrl" target="_blank">
            <Github
              :size="38"
              :stroke-width="2.2"
              class="transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              :class="isDarkMode ? 'text-white' : 'text-black'"
            />
          </a>
        </li>
      </ul>
      <button class="md:hidden" @click="toggleMobileNav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-white"
          :class="['menu-button', { 'light-mode': !isDarkMode, 'dark-mode': isDarkMode }]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
    <div class="hidden md:flex">
      <ul class="items-center pt-2 text-xl md:flex gap-9 font-anta">
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Project</a></li>
        <li class="pr-4">
          <a :href="githubUrl" target="_blank">
            <Github
              :size="38"
              :stroke-width="2.2"
              class="transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              :class="isDarkMode ? 'text-white' : 'text-black'"
            />
          </a>
        </li>
      </ul>
      <button class="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="['menu-button', { 'light-mode': isDarkMode, 'dark-mode': !isDarkMode }]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { provide, ref, onMounted, onUnmounted } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'
import { Github } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMobileNavOpen = ref(false)
provide('isMobileNavOpen', isMobileNavOpen)
const { isDarkMode } = useDarkMode()

const githubUrl = 'https://github.com/NARajab'

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.navbar {
  position: fixed;
  width: 100%;
  transition: background-color 0.3s ease;
  background-color: transparent;
  font-family: 'Poppins';
}
.navbar-scrolled {
  background-color: rgba(0, 0, 0, 0.214);
}
.mobile-nav ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.mobile-nav ul li {
  padding: 0.5rem;
}
.mobile-nav button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.menu-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition:
    color 0.3s,
    border-color 0.3s;
}

.menu-button.light-mode {
  color: #000;
}

.menu-button.dark-mode {
  color: #fff;
}
</style>
