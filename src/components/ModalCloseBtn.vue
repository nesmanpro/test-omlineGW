<script setup lang="ts">
import IconClose from './icons/CloseBtn.vue';
import { useSlideoutStore } from '@/stores/SlideoutStore';

const slideoutStore = useSlideoutStore();
</script>

<template>
    <button
    @click="slideoutStore.closeModal"
    class="cursor-pointer">
        <IconClose />
    </button>
    
</template>