<template>
    <header class="fixed top-0 bg-zinc-100 w-full shadow-sm py-1 px-4">
        <p>ℹ️ Recuerda revisar el README en el <a href="https://github.com/Omline-Globalweb/test" target="_blank">repositorio</a>.</p>
    </header>

    <main class="w-screen h-screen grid grid-cols-2 gap-x-8 items-center justify-center px-26">
        <section class="flex flex-col gap-y-8">
            <h1 class="!text-8xl">¡Hola!</h1>
            
            <div>
                <p class="text-lg">Esta prueba técnica nos dará una idea de tu nivel con Vue.js + TypeScript, TailwindCSS y Pinia.</p>
                <p class="text-lg">Realízala lo mejor que puedas. ¡Suerte!</p>
            </div>

            <RouterLink
                :to="{ name: 'test' }"
                class="text-center w-max bg-blue-500 !text-white rounded-xl transition-all duration-200 hover:shadow-md hover:shadow-zinc-200 hover:translate-x-0.5 py-2 px-4"
            >
                Comenzar la prueba
            </RouterLink>
        </section>

        <section class="flex flex-col items-center justify-center gap-y-8 py-4">
            <div class="w-full px-6">
                <h3 class="text-3xl mb-6">Objetivos obligatorios</h3>
                <ol class="flex flex-col gap-y-4">
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">Crea una tabla usando <i>DataTables</i>.</li>
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">Crea e implementa un formulario para crear registros.</li>
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">Crea e implementa un formulario para actualizar registros.</li>
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">Crea e implementa un formulario para borrar registros.</li>
                </ol>
            </div>
            
            <div class="w-full px-6">
                <h3 class="text-3xl mb-6">Objetivos opcionales</h3>
                <ol class="flex flex-col gap-y-4">
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">Haz uso del <i>BannerComponent</i> para mostrar el estado de las consultas.</li>
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">Haz uso del <i>SlideoutComponent</i> para mostrar, al menos, un formulario.</li>
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">Completa los atributos y métodos de las <i>«stores»</i> <i>SlideoutStore</i> y <i>BannerStore</i> para mostrar, ocultar y modificar los componentes mencionados.</li>
                </ol>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">

</script>