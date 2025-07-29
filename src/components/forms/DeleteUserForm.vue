<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/UserStore';
import { useSlideoutStore } from '@/stores/SlideoutStore';
import { useBannerStore } from '@/stores/BannerStore';

const userStore = useUserStore();
const slideoutStore = useSlideoutStore()
const userId = ref('');
const bannerStore = useBannerStore();

function handleDeleteUser() {
    if(userId.value.length < 1) {
        slideoutStore.closeModal();
        return
    }
    const id = parseInt(userId.value);
    if (!isNaN(id)) {
        userStore.deleteUserById(id);
        userId.value = '';
        slideoutStore.closeModal();
        bannerStore.showBanner('Usuario eliminado correctamente!🎉')
    }
}
</script>

<template>
    <div class="flex flex-col items-start gap-3 max-w-sm mt-10 border-t-1 border-emerald-700/20 pt-10">
        <h4 class="font-semibold text-sm">Delete user </h4>
        <div class="flex flex-col items-start">
            <label class="text-sm" for="name">Id*</label>
            <input
            v-model="userId"
            name="name" 
            class="border-1 border-gray-300 px-2 py-1" 
            type="text" 
            placeholder="Enter id...">
        </div>
        <button
        @click="handleDeleteUser"
            class="!bg-emerald-800 px-6 py-1 w-fit text-white rounded-2xl hover:!bg-emerald-950 transition-all duration-300 ease-in-out cursor-pointer">Delete
            this User</button>
    </div>

</template>
