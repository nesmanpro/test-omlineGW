
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBannerStore = defineStore('banner', () => {
    const show = ref(false)
    const message = ref('')
    const type = ref<'success' | 'error'>('success')

    function showBanner(msg: string) {
        message.value = msg
        show.value = true
        setTimeout(() => {
            show.value = false
        }, 2000)
    }

    return { show, message, type, showBanner }
})