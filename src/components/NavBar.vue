<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="fixed top-0 left-0 w-full z-50 flex justify-center items-center bg-white">
    <div class="flex justify-between w-full max-w-5xl px-5 py-6">
        <RouterLink
            to="/">
            <img
        alt="Vue logo"
        class="logo size-[40px] hover:scale-115 hover:-rotate-8 transition-all duration-300 ease-in-out" 
        src="@/assets/logo.svg" />
            </RouterLink>
        
        <div class="wrapper">
            <nav class="flex gap-9 font-bold">
            <RouterLink
            class="text-emerald-500 hover:text-emerald-600 transition-all duration-300 ease-in-out" 
            to="/">
            Home
            </RouterLink>
            <RouterLink
            class="text-emerald-500 hover:text-emerald-600"
            to="/test">
            Test
            </RouterLink>
            </nav>
        </div>
    </div>
  </header>
</template>