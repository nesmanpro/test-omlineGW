<template>
    <header class="fixed top-0 bg-zinc-100 w-full shadow-sm py-1 px-4">
        <p>ℹ️ Recuerda revisar el README en el <a href="https://github.com/Omline-Globalweb/test" target="_blank">repositorio</a>.</p>
    </header>

    <main class="w-full max-w-screen min-h-screen flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center justify-center py-26 lg:py-0 px-8 sm:px-12 md:px-22 lg:px-26">
        <section class="flex flex-col justify-center md:justify-start w-full h-min gap-y-8">
            <div class="flex flex-col lg:flex-row items-center gap-x-8">
                <img height="100" width="100" src="/vite.svg" class="min-h-[100px] min-w-[100px]" />
                <h1 class="!text-7xl text-center lg:text-start">Prueba técnica</h1>
            </div>
            
            <div class="text-center lg:text-start">
                <p class="text-lg mb-2">Esta prueba técnica nos dará una idea de tu nivel con Vue.js + TypeScript, TailwindCSS y Pinia.</p>
                <p class="text-lg">¡Suerte!</p>
            </div>

            <RouterLink
                :to="{ name: 'test' }"
                class="text-center w-max mx-auto lg:mx-0 bg-blue-500 !text-white rounded-xl transition-all duration-200 hover:shadow-md hover:shadow-zinc-200 hover:translate-x-0.5 py-2 px-4"
            >
                Comenzar la prueba
            </RouterLink>
        </section>

        <section class="flex flex-col items-center justify-center gap-y-8 py-4">
            <div class="w-full">
                <h3 class="text-3xl mb-6">🚀 Objetivos obligatorios</h3>
                <ol class="flex flex-col gap-y-4">
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">
                        Implementa <i>DataTables</i> y úsalo para crear una tabla que muestre todos los registros de la base de datos.
                    </li>
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">
                        Crea e implementa un formulario para crear registros.
                    </li>
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">
                        Crea e implementa un formulario para actualizar registros.
                    </li>
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">
                        Crea e implementa un formulario para borrar registros.
                    </li>
                </ol>
            </div>
            
            <div class="w-full">
                <h3 class="text-3xl mb-6">✨ Objetivos opcionales</h3>
                <ol class="flex flex-col gap-y-4">
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">
                        Haz uso del <i>BannerComponent</i> para mostrar el estado de las consultas.
                    </li>
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">
                        Haz uso del <i>SlideoutComponent</i> para mostrar, al menos, un formulario.
                    </li>
                    <li class="border border-zinc-200 rounded-xl shadow-md shadow-zinc-200/50 py-4 px-6">
                        Completa los atributos y métodos de las <i>«stores»</i> <i>SlideoutStore</i> y <i>BannerStore</i> para mostrar, ocultar y modificar los componentes mencionados.
                    </li>
                </ol>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">

</script>