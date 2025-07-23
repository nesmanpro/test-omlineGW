<template>
    <header class="fixed top-2 left-4 bg-zinc-50 rounded-full shadow-md p-2">
        <RouterLink :to="{ name: 'home' }" class="!text-inherit flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

            <p class="text-sm px-1">Inicio</p>
        </RouterLink>
    </header>

    <main class="w-screen h-screen flex flex-col items-center justify-center">
        <h1 class="mb-16">Completa los objetivos</h1>
    </main>

    <SlideoutComponent />
    <BannerComponent />
</template>

<script setup lang="ts">
import BannerComponent from '@/components/BannerComponent.vue';
import SlideoutComponent from '@/components/SlideoutComponent.vue';
</script>