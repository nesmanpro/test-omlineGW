
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
    class="fixed top-4 left-1/2 -translate-x-1/2 rounded-full text-white bg-emerald-600 shadow-md py-1 px-3 z-50 cursor-pointer">
        <span>Show Sideout Menu</span>
    </div>
    <BannerModal v-if="BannerStore.show"  :msg="BannerStore.message" />
</template>
