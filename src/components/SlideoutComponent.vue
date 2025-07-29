<template>
    <Transition name="fade">
        <div v-if="slideoutStore.show" class="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-70"></div>
    </Transition>

    <Transition name="slide">
        <div 
        v-if="slideoutStore.show" 
        class="h-screen fixed top-0 right-0 min-w-[400px] max-w-[800px] bg-white shadow-md z-80 p-4">
        <header class="flex justify-end">
            <ModalCloseBtn />
        </header>
        <main >
            <div class="flex flex-col items-start gap-3 max-w-sm">
      <h4 class="font-semibold text-sm">Add a new user </h4>
      <div class="flex flex-col items-start">
        <label 
        class="text-sm"
        for="name">Name*</label>
        <input
        name="name"
        class="border-1 border-gray-300 px-2 py-1" 
        type="text" 
        placeholder="Enter a title..">
      </div>
      <div class="flex flex-col items-start">
        <label 
        class="text-sm"
        for="email">Email*</label>
        <input 
        class="border-1 border-gray-300 px-2 py-1" 
        name="email" 
        type="email"
        placeholder="Enter Description.."
        ></input>
      </div>
      <button 
      class="!bg-emerald-800 px-6 py-1 w-fit text-white rounded-2xl hover:!bg-emerald-950 transition-all duration-300 ease-in-out cursor-pointer" 
      >Add User</button>
    </div>
    <div class="flex flex-col items-start gap-3 max-w-sm mt-10 border-t-1 border-emerald-700/20 pt-10">
      <h4 class="font-semibold text-sm">Delete user </h4>
      <div class="flex flex-col items-start">
        <label 
        class="text-sm"
        for="name">Id*</label>
        <input
        name="name"
        class="border-1 border-gray-300 px-2 py-1" 
        type="text" 
        placeholder="Enter id...">
      </div>
      
      <button 
      class="!bg-emerald-800 px-6 py-1 w-fit text-white rounded-2xl hover:!bg-emerald-950 transition-all duration-300 ease-in-out cursor-pointer" 
      >Delete this User</button>
    </div>
    
        </main>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { useSlideoutStore } from '@/stores/SlideoutStore';
import ModalCloseBtn from './ModalCloseBtn.vue';

const slideoutStore = useSlideoutStore();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 200ms;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 200ms;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}
</style>