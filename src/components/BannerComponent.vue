<template>
    <div 
    @click="slideoutStore.openModal"
    class="fixed top-4 left-1/2 -translate-x-1/2 rounded-full text-white bg-emerald-600 shadow-md py-1 px-3 z-50 cursor-pointer">
        <span>Show Modal</span>
    </div>

    <BannerMsg v-if="BannerStore.show" :msg="bannerMessage" />
</template>

<script setup lang="ts">
import { useSlideoutStore } from '@/stores/SlideoutStore';
import { useBannerStore } from '@/stores/BannerStore';
import BannerMsg from './BannerMsg.vue';
import { ref } from 'vue';

const slideoutStore = useSlideoutStore();
const BannerStore = useBannerStore();
const bannerMessage = ref('');

</script>