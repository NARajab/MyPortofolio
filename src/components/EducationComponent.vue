<template>
  <div
    id="education"
    class="items-center justify-center w-4/5 py-32 md:w-1/2 mt-36 font-poppins"
    data-aos="fade-left"
    data-aos-duration="1500"
  >
    <div class="flex items-center">
      <h1 class="text-xl font-bold text-left font-poppins">Education</h1>
      <img :src="line" class="w-1/4 pt-1 pl-4 rounded-full" alt="" />
    </div>
    <div
      v-for="(item, index) in education"
      :key="index"
      class="flex flex-col border border-spacing-10 border-[#7f7f7f] justify-center px-5 md:px-10 py-5 mt-4 bg-transparent rounded-3xl"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div class="flex flex-col items-center">
        <h1 class="text-lg font-poppins">{{ item.institution }}</h1>
        <p class="pt-3 font-poppins">
          {{ item.description }}
        </p>
      </div>
      <div class="flex flex-row items-center gap-3 mt-3">
        <div class="flex flex-col gap-3 md:flex-row">
          <div
            v-for="(skill, skillIndex) in item.skills"
            :key="skillIndex"
            class="flex items-center px-2 border rounded-md border-[#7f7f7f] h-14"
          >
            <a class="flex items-center" target="_blank" :href="skill.url">
              <img :src="skill.image" class="w-10 pr-1" alt="" />
              <h1>{{ skill.name }}</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'
import Line1 from '../assets/images/Line.png'
import Line2 from '../assets/images/Line2.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { isDarkMode } = useDarkMode()
const line = computed(() => (isDarkMode.value ? Line1 : Line2))

const education = ref([])

const fetchEducationData = async () => {
  try {
    const response = await fetch('src/assets/data/education.json')
    const data = await response.json()
    education.value = data.education
  } catch (error) {
    console.error('Error fetching education data:', error)
  }
}
onMounted(() => {
  fetchEducationData()
  AOS.init()
})
</script>
<style scoped></style>
