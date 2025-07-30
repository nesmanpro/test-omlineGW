import { defineStore } from 'pinia'

export const useIntroLoaderStore = defineStore('app', {
    state: () => ({
        hasLoadedIntro: false
    }),
    actions: {
        markIntroLoaded() {
            this.hasLoadedIntro = true
        }
    }
})