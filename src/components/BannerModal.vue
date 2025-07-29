<script setup lang="ts">
defineProps<{ msg?: string }>()
</script>

<template>
    <div class="fixed top-20 left-1/2 -translate-x-1/2 h-20 max-w-xl w-full rounded-2xl text-emerald-900 bg-gray-100 shadow-md py-1 px-3 z-50 cursor-pointer flex justify-center items-center">
        {{ msg  }}
    </div>
</template>