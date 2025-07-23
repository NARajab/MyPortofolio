<template>
  <!-- Contact Bar -->
  <div
    class="fixed z-50 flex flex-col items-center gap-4 top-64 left-24"
    data-aos="fade-left"
    data-aos-duration="1000"
  >
    <div v-for="(contact, index) in contacts" :key="index" class="relative group">
      <a
        :href="contact.link"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center w-10 h-10 transition-transform border border-black dark:border-white rounded-full shadow-md hover:bg-[#7f7f7f64] hover:scale-110"
      >
        <component :is="icons[contact.icon]" :size="20" class="text-black dark:text-white" />
      </a>

      <span
        class="absolute px-2 py-1 text-xs text-white transition-transform origin-right scale-0 -translate-y-1/2 bg-gray-800 rounded-md right-12 top-1/2 group-hover:scale-100 whitespace-nowrap"
      >
        {{ contact.type }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { Mail, Phone, Linkedin, Instagram } from 'lucide-vue-next'
const icons = { Mail, Phone, Linkedin, Instagram }

const contacts = ref([])

onMounted(async () => {
  const res = await fetch('src/assets/data/contacts.json')
  contacts.value = await res.json()
})
</script>

<style scoped></style>
