<template>
  <div
    id="skills"
    class="items-center justify-center w-4/5 py-14 md:py-32 md:w-1/2 font-poppins"
    data-aos="fade-left"
    data-aos-duration="1500"
  >
    <div class="items-center hidden md:flex">
      <img :src="line" class="w-1/6 pt-1 pr-4 rounded-full" alt="" />
      <h1 class="text-xl font-bold text-left font-poppins">Skills</h1>
    </div>
    <h1 class="text-xl font-bold text-left md:hidden font-poppins">Skills</h1>
    <div class="mt-4">
      <button
        @click="showTechStack"
        :class="{
          'bg-slate-700 text-sky-700': activeTab === 'techStack',
          'hover:bg-slate-700 ': activeTab !== 'techStack'
        }"
        class="px-2 py-1 mr-4 font-semibold rounded text-sky-500"
      >
        Tech Stack
      </button>

      <button
        @click="showTools"
        :class="{
          'bg-slate-700 text-sky-700': activeTab === 'tools',
          'hover:bg-slate-700': activeTab !== 'tools'
        }"
        class="px-2 py-1 font-semibold rounded text-sky-500"
      >
        Tools
      </button>
    </div>

    <h1 v-if="activeTab === 'techStack'" class="mt-4" data-aos="fade-left" data-aos-duration="1500">
      Use Regulary
    </h1>
    <div
      v-if="activeTab === 'techStack'"
      class="grid grid-cols-2 gap-4 mt-2 md:grid-cols-3"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div
        v-for="(item, index) in skill.techStack?.useRegularly"
        :key="index"
        class="flex items-center px-2 border rounded-md border-[#7f7f7f] h-14 hover:bg-[#7f7f7f64] transform transition-transform duration-300 hover:-translate-y-1"
      >
        <a class="flex items-center" target="_blank" :href="item.url">
          <img :src="item.image" class="w-10 pr-1" alt="" />
          <h1>{{ item.name }}</h1>
        </a>
      </div>
    </div>
    <h1
      v-if="activeTab === 'techStack'"
      class="mt-4"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      Had Contact With
    </h1>
    <div
      v-if="activeTab === 'techStack'"
      class="grid grid-cols-2 gap-4 mt-2 md:grid-cols-3"
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <div
        v-for="(item2, index) in skill.techStack?.hadContact"
        :key="index"
        class="flex items-center hover:bg-[#7f7f7f64] px-2 border rounded-md border-[#7f7f7f] h-14 transform transition-transform duration-300 hover:-translate-y-1"
      >
        <a class="flex items-center" target="_blank" :href="item2.url">
          <img :src="item2.image" class="w-10 pr-1" alt="" />
          <h1>{{ item2.name }}</h1>
        </a>
      </div>
    </div>
    <h1 v-if="activeTab === 'tools'" class="mt-4" data-aos="fade-left" data-aos-duration="1500">
      Tools
    </h1>
    <div
      v-if="activeTab === 'tools'"
      class="grid grid-cols-2 gap-4 mt-2 md:grid-cols-3"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div
        v-for="(item2, index) in skill.tools"
        :key="index"
        class="flex items-center px-2 border rounded-md hover:bg-[#7f7f7f64] border-[#7f7f7f] h-14"
      >
        <a class="flex items-center" target="_blank" :href="item2.url">
          <img :src="item2.image" class="w-10 pr-1" alt="" />
          <h1>{{ item2.name }}</h1>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'
import Line1 from '../../public/images/Line.png'
import Line2 from '../../public/images/Line2.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { isDarkMode } = useDarkMode()
const line = computed(() => (isDarkMode.value ? Line1 : Line2))

const skill = ref([])
const activeTab = ref('techStack')

const showTechStack = () => {
  activeTab.value = 'techStack'
}

const showTools = () => {
  activeTab.value = 'tools'
}

const fetchEducationData = async () => {
  try {
    const response = await fetch('../../public/data/skills.json')
    const data = await response.json()
    skill.value = data.skills
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
