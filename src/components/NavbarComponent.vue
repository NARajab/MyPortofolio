<template>
  <div
    class="fixed z-10 flex flex-row justify-between w-full py-4 px-7 md:px-10 lg:px-20 navbar"
    :class="{ 'navbar-scrolled': isScrolled }"
  >
    <!-- Logo -->
    <div class="flex">
      <a href="#" class="pt-1 text-2xl font-amita">AliRajabPorto;</a>
    </div>

    <!-- Desktop Navbar -->
    <div class="hidden md:flex">
      <ul class="flex items-center pt-2 text-xl gap-9 font-anta">
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
    </div>

    <!-- Mobile Hamburger -->
    <div class="relative flex items-center md:hidden">
      <button @click="toggleMobileNav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          :class="isDarkMode ? 'text-white' : 'text-black'"
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

      <!-- Floating Popup -->
      <transition name="fade">
        <div
          v-if="isMobileNavOpen"
          class="absolute right-0 flex flex-col gap-3 px-6 py-4 text-base text-white bg-gray-900 rounded-lg shadow-lg top-12 bg-opacity-80 backdrop-blur-md"
        >
          <a href="#education" @click="closeMobileNav">Education</a>
          <a href="#skills" @click="closeMobileNav">Skills</a>
          <a href="#projects" @click="closeMobileNav">Project</a>
          <a :href="githubUrl" target="_blank" class="flex justify-center pt-2">
            <Github
              :size="32"
              :stroke-width="2.2"
              class="transition-all duration-300 transform hover:scale-110 hover:rotate-6"
            />
          </a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'
import { Github } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMobileNavOpen = ref(false)
const { isDarkMode } = useDarkMode()
const githubUrl = 'https://github.com/NARajab'

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}
const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}
const closeMobileNav = () => {
  isMobileNavOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  transition: background-color 0.3s ease;
  background-color: transparent;
}
.navbar-scrolled {
  background-color: rgba(0, 0, 0, 0.214);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
  transform-origin: top right;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
