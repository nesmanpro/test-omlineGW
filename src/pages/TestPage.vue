<template>
    <main class="w-full flex flex-col items-center justify-center">
        <UserTable />
    </main>

    <SlideoutComponent />
    <BannerComponent />
</template>

<script setup lang="ts">
import BannerComponent from '@/components/banner/BannerComponent.vue';
import SlideoutComponent from '@/components/SlideoutComponent.vue';
import UserTable from '@/components/UserTable.vue';
</script>