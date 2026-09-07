import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore("favoritos", () => {
    const favoritos = ref([]);

    const add = (poke) => {
        // Evita duplicados verificando si ya existe por su nombre
        const existe = favoritos.value.find((item) => item.name === poke.name);
        if (!existe) {
            favoritos.value.push(poke);
        }
    };

    return {
        favoritos,
        add,
    };
});