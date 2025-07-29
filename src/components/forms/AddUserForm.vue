<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/UserStore';
import { useSlideoutStore } from '@/stores/SlideoutStore';
import type { User } from '@/types/userType';

const userStore = useUserStore();
const slideoutStore = useSlideoutStore();

const newUser = ref<User>({
  id: 0,
  name: '',
  email: '',
  password: '',
});

function handleAddNewUser() {
  userStore.createUser(newUser.value);
  slideoutStore.closeModal();
}
</script>

<template>
  <div class="flex flex-col items-start gap-3 max-w-sm">
    <h4 class="font-semibold text-sm">Add a new user</h4>
    <div class="flex flex-col items-start">
      <!-- <label class="text-sm" for="name">Name*</label> -->
      <input v-model="newUser.name" class="border-b border-gray-300 px-2 py-1" type="text" placeholder="Name*" />
    </div>
    <div class="flex flex-col items-start">
      <!-- <label class="text-sm" for="email">Email*</label> -->
      <input v-model="newUser.email" class="border-b border-gray-300 px-2 py-1" type="email" placeholder="Email*" />
    </div>
    <div class="flex flex-col items-start">
      <!-- <label class="text-sm" for="password">Password*</label> -->
      <input v-model="newUser.password" class="border-b border-gray-300 px-2 py-1" type="password" placeholder="Password*" />
    </div>
    <div class="flex flex-col items-start">
      <!-- <label class="text-sm" for="2password">Repeat Password*</label> -->
      <input v-model="newUser.password" class="border-b border-gray-300 px-2 py-1" type="password" placeholder="Repeat Password*" />
    </div>
    <button 
            @click="handleAddNewUser"
            class="!bg-emerald-800 px-6 py-1 w-fit text-white rounded-2xl hover:!bg-emerald-950 transition-all duration-300 ease-in-out cursor-pointer" 
            >Add User</button>
  </div>
</template>
