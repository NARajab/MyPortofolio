<template>
  <!-- Floating Contact Button (mobile) -->
  <div class="fixed z-50 bottom-6 left-6 md:hidden">
    <!-- Toggle Button -->
    <button
      @click="isOpen = !isOpen"
      class="flex items-center justify-center w-12 h-12 text-white bg-gray-800 rounded-full shadow-lg"
    >
      <CircleUserRound :size="40" :stroke-width="1" />
    </button>

    <!-- Smooth Popup -->
    <transition name="popup">
      <div
        v-if="isOpen"
        class="absolute left-0 flex flex-col gap-2 p-3 text-white bg-gray-900 rounded-lg shadow-lg bg-opacity-90 bottom-16 backdrop-blur-md"
      >
        <a
          v-for="(contact, index) in contacts"
          :key="index"
          :href="contact.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-3 py-2 transition rounded-md hover:bg-gray-700"
        >
          <component :is="icons[contact.icon]" :size="20" />
          <span>{{ contact.type }}</span>
        </a>
      </div>
    </transition>
  </div>

  <!-- Contact Bar (desktop) -->
  <div
    class="fixed z-50 flex-col items-center hidden gap-4 md:flex top-64 left-24"
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
import { Mail, CircleUserRound, Phone, Linkedin, Instagram } from 'lucide-vue-next'

const icons = { Mail, Phone, Linkedin, Instagram }
const contacts = ref([])
const isOpen = ref(false)

onMounted(async () => {
  const res = await fetch('/data/contacts.json')
  contacts.value = await res.json()
})
</script>

<style scoped>
/* Transition Animasi */
.popup-enter-active,
.popup-leave-active {
  transition: all 0.25s ease;
}
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}
</style>
