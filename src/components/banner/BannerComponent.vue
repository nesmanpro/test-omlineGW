
<script setup lang="ts">
import { useSlideoutStore } from '@/stores/SlideoutStore';
import { useBannerStore } from '@/stores/BannerStore';
import BannerModal from './BannerModal.vue';

const slideoutStore = useSlideoutStore();
const BannerStore = useBannerStore();

</script>

<template>
    <div 
    @click="slideoutStore.openModal"
    class="group fixed top-4 left-1/2 -translate-x-1/2 rounded-lg text-white bg-emerald-600 shadow-md py-1 px-3 z-50 cursor-pointer h-9 w-45 overflow-hidden">
        <span class="absolute left-1/2 w-fit text-nowrap -translate-x-1/2 group-hover:-translate-y-[200%] transition-translate duration-90 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ">Show Sideout Menu</span>
        <span class="absolute left-1/2 w-fit text-nowrap -translate-x-1/2 translate-y-[200%] group-hover:-translate-y-[0%] transition-translate duration-90 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ">👉 👉 👉</span>
    </div>
    <BannerModal v-if="BannerStore.show"  :msg="BannerStore.message" />
</template>
