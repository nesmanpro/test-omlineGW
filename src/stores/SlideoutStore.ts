import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSlideoutStore = defineStore('slideout', () => {
    /** 
     * @var { Ref<boolean> }
     */
    const show = ref<boolean>(false);

    /*
     * Crea los atributos y los métodos que consideres necesarios para mostrar y ocultar 
     * el componente `SlideoutComponent` y modificar su contenido.
     * 
     * De ser posible, añade comentarios JSDoc como los ejemplificados en el atributo `show`.
     */

    return { 
        show
    }
});