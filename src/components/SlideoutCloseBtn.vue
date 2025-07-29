<script setup lang="ts">
import IconClose from './icons/CloseBtn.vue';
import { useSlideoutStore } from '@/stores/SlideoutStore';

const slideoutStore = useSlideoutStore();
</script>

<template>
    <button
    @click="slideoutStore.closeModal"
    class="cursor-pointer !bg-transparent !transition-all !duration-300 !ease-in-out hover:scale-115 hover:rotate-90">
        <IconClose />
    </button>
    
</template>