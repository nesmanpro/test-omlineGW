<script setup lang="ts">
import { useSlideoutStore } from '@/stores/SlideoutStore';
import SlideoutCloseBtn from './SlideoutCloseBtn.vue';
import AddUserForm from './forms/AddUserForm.vue';
import DeleteUserForm from './forms/DeleteUserForm.vue';

const slideoutStore = useSlideoutStore();

</script>

<template>
    <Transition name="fade">
        <div 
        @click="slideoutStore.closeModal"
        v-if="slideoutStore.show" class="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-70"></div>
    </Transition>

    <Transition name="slide">
        <div 
            v-if="slideoutStore.show"
            class="h-screen fixed top-0 right-0 min-w-[400px] max-w-[800px] bg-white shadow-md z-80 p-4">
            <header class="flex justify-end">
                <SlideoutCloseBtn />
            </header>
            <main>
                <AddUserForm />
                <DeleteUserForm />
            </main>
        </div>
    </Transition>
</template>



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