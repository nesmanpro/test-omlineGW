<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/UserStore';
import { useSlideoutStore } from '@/stores/SlideoutStore';

const userStore = useUserStore();
const slideoutStore = useSlideoutStore()
const userId = ref('');

function handleDeleteUser() {
    if (userId.value.length < 1) {
        slideoutStore.closeModal();
        return
    }
    const id = parseInt(userId.value);
    userStore.deleteUserById(id);
    userId.value = '';
    slideoutStore.closeModal();
}
</script>

<template>
    <div class="flex flex-col items-start gap-3 max-w-sm mt-10 border-t-1 border-emerald-700/20 pt-10">
        <h4 class="font-semibold text-md text-emerald-600">Delete user </h4>
        <div class="flex flex-col items-start">
            <input v-model="userId" name="name" class="border-b border-gray-300 px-2 py-1" type="text"
                placeholder="User id*">
        </div>
        <button @click="handleDeleteUser"
            class="!bg-emerald-700 px-6 py-1 w-fit text-white rounded-2xl hover:!bg-emerald-800 !transition-all !duration-300 !ease-in-out cursor-pointer">Delete
            this User</button>
    </div>

</template>
