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
        <section class="grid grid-cols-12 justify-center w-full h-min gap-y-3">
          <div class="col-span-4 text-left">
            <h2 class="text-emerald-600 font-semibold text-6xl">
               Technical test
            </h2>
            <h5 class="text-emerald-800/50 font-semibold text-xl">(Click on Test 😊)</h5>
          </div>
        </section>
    </main>
        <IntroScreen v-if="showIntro" />
</template>

