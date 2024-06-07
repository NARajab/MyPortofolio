<template>
  <div
    class="flex flex-col-reverse items-center justify-center px-5 mt-24 md:flex-row gap-7 md:mt-40 lg:mt-56 lg:w-2/3 md:px-10 identity-container"
  >
    <div class="flex flex-col items-center md:items-start">
      <h2 class="pb-2 text-3xl font-caveat">Hello, my name is</h2>
      <h1 class="pb-3 text-5xl font-bold md:text-6xl font-poppins">Nur Ali Rajab</h1>
      <p class="flex items-center px-5 text-xl md:px-0 justify font-poppins">
        I am an Informatics student who is very focused on improving my skills. I aspire to build a
        career in the IT industry and continuously strive to develop myself to stay current with the
        latest technology.
      </p>
    </div>
    <div class="flex justify-center">
      <img
        class="w-1/2 rounded-full md:w-full"
        src="../assets/images/Ellipse 1.png"
        alt="my-foto"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes slide-in-top {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.identity-container {
  animation: slide-in-top 2s ease-out;
}

.justify {
  text-align: justify;
}
</style>
