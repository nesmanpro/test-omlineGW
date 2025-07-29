<template>
    <div 
    @click="slideoutStore.openModal"
    class="fixed top-4 left-1/2 -translate-x-1/2 rounded-full text-white bg-emerald-600 shadow-md py-1 px-3 z-50 cursor-pointer">
        <span>Show Modal</span>
    </div>

    <BannerModal v-if="BannerStore.show" :msg="BannerStore.message" />
</template>

<script setup lang="ts">
import { useSlideoutStore } from '@/stores/SlideoutStore';
import { useBannerStore } from '@/stores/BannerStore';
import BannerModal from './BannerModal.vue';
import { ref } from 'vue';

const slideoutStore = useSlideoutStore();
const BannerStore = useBannerStore();
const bannerMessage = ref('');

</script>