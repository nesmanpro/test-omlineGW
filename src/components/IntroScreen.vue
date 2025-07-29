<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {motion}  from 'motion-v';

const yOffset = ref(0)
const opacity = ref(1)
const borderRadius = ref('0px')

onMounted(() => {
  setTimeout(() => {
    yOffset.value = -2500;
    opacity.value = 0; 
    borderRadius.value = '2000rem';
  }, 1000) 
})
</script>

<template>
      <motion.div
    class="absolute inset-0 flex justify-center items-center bg-emerald-950 z-80 text-white"
    :initial="{ opacity: 1, y: 0 }"
    :animate="{ 
      opacity, 
      y: yOffset,
      borderBottomLeftRadius: borderRadius,
      borderBottomRightRadius: borderRadius
    }"
    
    :transition="{ duration: 0.8, ease: 'easeInOut' }"
  >
    Welcome to my test!
  </motion.div>
</template>