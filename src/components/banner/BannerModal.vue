<script setup lang="ts">
defineProps<{ msg?: string }>()
</script>

<template>
    <div class="absolute z-50 top-0 left-0 inset-0 flex justify-center items-center bg-gray-900/30">
        <div class="max-w-xl w-full h-40 rounded-2xl text-emerald-900 bg-gray-100 shadow-md py-1 px-3 z-50 cursor-pointer flex justify-center items-center">
            {{ msg  }}
        </div>
    </div>
</template>