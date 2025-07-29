import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSlideoutStore = defineStore('slideout', () => {

    const show = ref<boolean>(false);

    function openModal() {
        show.value = true;
    }
    function closeModal() {
        show.value = false;
    }

    return {
        show,
        openModal,
        closeModal
    }
});