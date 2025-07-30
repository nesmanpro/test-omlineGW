<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

</script>
<template>
    
    <NavBar />

    <main class="w-full max-w-screen flex flex-col gap-8 items-center justify-center px-2 sm:px-12 md:px-22 ">
        <section class="flex flex-col justify-center md:justify-start w-full h-min gap-y-8">
            
        <RouterView  />
        </section>
    </main>
    <Footer />
    

</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 200ms;
}

.v-enter-from,
.v-leave-to {
  opacity: 0; 
}
</style>