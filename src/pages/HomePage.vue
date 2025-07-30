<script setup lang="ts">
import IntroScreen from '@/components/IntroScreen.vue';
import { useIntroLoaderStore } from '@/stores/LoaderStore';
import { onMounted, ref } from 'vue';

const introLoader = useIntroLoaderStore();
const showIntro = ref(false);


onMounted(() => {
  if (!introLoader.hasLoadedIntro) {
    showIntro.value = true
    introLoader.markIntroLoaded()
  }
})

</script>
<template>

    <main class="w-full flex flex-col gap-8 items-center justify-center py-26 ">
        <section class="flex flex-col sm:grid grid-cols-12 justify-center w-full h-min gap-y-3">
          <div class="flex flex-col gap-2 sm:gap-5 col-span-4 text-left">
            <h2 class="text-emerald-600 font-bold text-4xl leading-6 sm:leading-10 sm:text-6xl">
               Technical assessment
            </h2>
            <h5 class="text-emerald-800 font-semibold text-xl">(Click on Test 😊)</h5>
          </div>
        </section>
    </main>
        <IntroScreen v-if="showIntro" />
</template>

