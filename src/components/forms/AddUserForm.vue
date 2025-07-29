<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/UserStore';
import { useSlideoutStore } from '@/stores/SlideoutStore';
import type { User } from '@/types/userType';
import IconChevron from '../icons/IconChevron.vue';

const userStore = useUserStore();
const slideoutStore = useSlideoutStore();

const newUser = ref<User>({
  id: 0,
  name: '',
  email: '',
  password: '',
  password2: '',
});
const isOpen = ref(true);

function toggleAccordion() {
  isOpen.value = !isOpen.value;
}

function handleAddNewUser() {
  userStore.createUser(newUser.value);
  slideoutStore.closeModal();
}
</script>

<template>
  <div class="flex flex-col items-start gap-3 max-w-sm">
    <div 
    @click="toggleAccordion"
    class="cursor-pointer flex gap-5 w-full items-center p-3 bg-emerald-600/15 rounded-lg"
    >
      <IconChevron :class="[
        'text-emerald-600 size-5 transition-all duration-300 ease-in-out',
        isOpen ? '' : '-rotate-90'
        ]" />
      <h4 class="font-semibold text-md text-emerald-600">Add a new user</h4>
    </div>
    <div
    :class="[
        'overflow-hidden transition-all duration-300 ease-in-out w-full flex flex-col gap-3',
        isOpen ? 'h-full opacity-100' : 'h-0 opacity-0 pointer-events-none'
      ]">
      <div class="flex flex-col items-start">
      <input v-model="newUser.name" class="border-b border-gray-300 px-2 py-1" type="text" placeholder="Name*" />
    </div>
    <div class="flex flex-col items-start">
      <input v-model="newUser.email" class="border-b border-gray-300 px-2 py-1" type="email" placeholder="Email*" />
    </div>
    <div class="flex flex-col items-start">
      <input v-model="newUser.password" class="border-b border-gray-300 px-2 py-1" type="password" placeholder="Password*" />
    </div>
    <div class="flex flex-col items-start">
      <input v-model="newUser.password2" class="border-b border-gray-300 px-2 py-1" type="password" placeholder="Repeat Password*" />
    </div>
    
    <button 
            @click="handleAddNewUser"
            class="!bg-emerald-700 px-6 py-1 text-white rounded-2xl hover:!bg-emerald-800 !transition-all !duration-300 !ease-in-out cursor-pointer group overflow-hidden relative h-8 w-22 mb-3" 
            >
            <span class="absolute left-1/2 top-1/2 w-fit text-nowrap -translate-y-1/2 -translate-x-1/2 group-hover:-translate-y-[200%] transition-translate duration-90 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ">Add User</span>
        <span class="absolute left-1/2 top-1/2 w-fit text-nowrap -translate-x-1/2 translate-y-[200%] group-hover:-translate-y-1/2 transition-translate duration-90 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ">+</span>
          </button>
    </div>
  </div>
</template>
