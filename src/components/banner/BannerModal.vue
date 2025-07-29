<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useBannerStore } from '../../stores/BannerStore';
import IconError from '../icons/IconError.vue';
import IconSuccess from '../icons/IconSuccess.vue';

defineProps<{ msg?: string }>()
const banner = useBannerStore();
const { success } = storeToRefs(banner)

</script>

<template>
    <div 
    @click="banner.show = false"
    class="absolute z-50 top-0 left-0 inset-0 flex justify-center items-center bg-gray-900/30">
        <div class="max-w-xl w-full h-40 rounded-2xl text-emerald-900 bg-gray-100 shadow-md py-1 px-3 z-50 cursor-pointer flex justify-center items-center gap-5 relative">
            <IconError
            class="absolute left-5 translate-x-1/2"
            v-if="!success"
            />
            <IconSuccess
            class="absolute left-5 translate-x-1/2"
            v-else="success"
            />
            {{ msg  }}
        </div>
    </div>
</template>