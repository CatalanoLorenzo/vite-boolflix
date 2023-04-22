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
            if (movie.original_language != null && store.compatibleFlags.includes(movie.original_language.toUpperCase())) {
                let url = store.apiUrlFlag + movie.original_language.toUpperCase() + '/shiny/64.png'
                return url
            } else if (movie.original_language.toUpperCase() == 'JA'){
                let url = store.apiUrlFlag + 'JP' + '/shiny/64.png'
                return url
            }else if (movie.original_language.toUpperCase() == 'EN'){
                let url = store.apiUrlFlag + 'GB' + '/shiny/64.png'
                return url
            }else if (movie.original_language.toUpperCase() == 'US'){
                let url = store.apiUrlFlag + 'GP' + '/shiny/64.png'
                return url
            }else {
                return 'https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/03/question-mark-flag-emoji-coloring-page.png'
            }
        },
    },
}
</script>
<template>
    <img :src="getFlagByApi(element)">
</template>
