<template>
    <header class="fixed top-2 left-4 bg-zinc-50 rounded-full shadow-md p-2">
        <RouterLink :to="{ name: 'home' }" class="!text-inherit flex items-center">
            <IconInicio/>
            <p class="text-sm px-1 ">Inicio</p>
        </RouterLink>
    </header>

    <main class="w-full h-screen flex flex-col items-center justify-center">
        <UserTable />
    </main>

    <SlideoutComponent />
    <BannerComponent />
</template>

<script setup lang="ts">
import BannerComponent from '@/components/banner/BannerComponent.vue';
import IconInicio from '@/components/icons/IconInicio.vue';
import SlideoutComponent from '@/components/SlideoutComponent.vue';
import UserTable from '@/components/UserTable.vue';
</script>