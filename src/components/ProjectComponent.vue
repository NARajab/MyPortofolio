<template>
  <div
    id="projects"
    class="w-4/5 py-14 md:py-32 md:w-1/2 font-poppins"
    data-aos="fade-left"
    data-aos-duration="1500"
  >
    <div class="items-center hidden mb-7 md:flex">
      <h1 class="text-xl font-bold text-left">Projects</h1>
      <img :src="line" class="w-1/6 pt-1 pl-4 rounded-full" alt="" />
    </div>

    <div class="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-duration="1000">
      <a
        v-for="(project, index) in projects"
        :key="index"
        :href="project.githubLink"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block w-auto border border-[#7f7f7f] rounded-xl shadow-md transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        <img
          :src="project.image"
          alt="Project Image"
          class="object-cover object-top w-full h-56 rounded-t-xl"
        />
        <div class="flex flex-col gap-1 p-4">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold">{{ project.title }}</h2>
            <Github :size="20" class="text-gray-700 dark:text-white" />
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-300">
            {{ project.type }} • {{ project.language }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'
import { Github } from 'lucide-vue-next'

const projects = ref([])

const { isDarkMode } = useDarkMode()
const line = computed(() => (isDarkMode.value ? '/images/Line.png' : '/images/Line2.png'))

onMounted(async () => {
  try {
    const response = await fetch('/data/projects.json')
    projects.value = await response.json()
  } catch (error) {
    console.error('Gagal memuat projects.json:', error)
  }
})
</script>

<style scoped></style>
