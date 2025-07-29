
import { defineStore } from 'pinia'
import { ref } from 'vue'



export const useBannerStore = defineStore('banner', () => {

    const show = ref(false)
    const message = ref('')
    const success = ref<boolean>(true)

    function showBanner(msg: string) {
        message.value = msg;
        show.value = true;
        setTimeout(() => {
            show.value = false;
            success.value = true;
        }, 3000);
    }

    return { show, message, success, showBanner }
})