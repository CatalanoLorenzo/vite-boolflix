<script>
import { store } from "../store";
export default {
    name: 'ImgGeneration',
    props: {
        element: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getFlagByApi(movie) {
            // se la lingua originale è presente ed è inclusa nell array di bandiere disponibili
            if (movie.original_language != null && store.compatibleFlags.includes(movie.original_language.toUpperCase())) {
                //ritorna una stringa composta da store.apiUrlFlag + la sigla della lingua in maiuscolo + /shiny/64.png
                return  store.apiUrlFlag + movie.original_language.toUpperCase() + '/shiny/64.png'
            //se la lingua originale è JA
            } else if (movie.original_language.toUpperCase() == 'JA'){

                //ritorna una stringa composta da store.apiUrlFlag + JP + /shiny/64.png
                return store.apiUrlFlag + 'JP' + '/shiny/64.png'

            //se la lingua originale è EN o US
            }else if (movie.original_language.toUpperCase() == 'EN' || movie.original_language.toUpperCase() == 'US'){

                //ritorna una stringa composta da store.apiUrlFlag + GB + /shiny/64.png
                return store.apiUrlFlag + 'GB' + '/shiny/64.png'
            //sennò
            }else {

                //ritorna una stringa con un link di una bandiera presolder
                return 'https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/03/question-mark-flag-emoji-coloring-page.png'
                
            }
        },
    },
}
</script>
<template>
    <img :src="getFlagByApi(element)">
</template>
