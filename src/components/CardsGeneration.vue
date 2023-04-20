<script>
import { store } from "../store";
import VoteGeneration from "./VoteGeneration.vue";
import ImgGeneration from './ImgGeneration.vue'
export default {
    name: 'CardsGeneration',
    components: {
        VoteGeneration,
        ImgGeneration,
    },
    data() {
        return {
            store,

        }
    },
    methods: {
        getUrlImgByApi(movie) {
            let url
            if (movie.poster_path != null) {
                url = store.apiUrlImg + movie.poster_path
                return url
            }else{
                url = 'data:image/png;base64,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'
                return url
            }
        }
    }
}
</script>
<template>
    <div v-for="movie in store.arrayShow" class=" col  px-1 g-2 p-0 position-relative">
        <img v-if="movie.title != undefined" class="card-header" :src="getUrlImgByApi(movie)" :alt="movie.title" >
        <img v-else class="card-header" :src="getUrlImgByApi(movie)" :alt="movie.name" >
        <div class="info position-absolute">
            <div class="cardbody position-relative">
                <ul >
                    <li class="list-unstyled">titolo :{{ movie.title }}{{ movie.name }}</li>
                    <li class="list-unstyled" v-if=" (movie.title !=  movie.original_title ) || (movie.name != movie.original_name)">originaltitle: {{ movie.original_title }} {{ movie.original_name }}</li>
                    <li class=" overflow-hidden list-unstyled">description: {{ movie.overview }}</li>
                    <li class="list-unstyled"> lenguage: <ImgGeneration :element="movie"></ImgGeneration></li>
                    <li class="list-unstyled"><VoteGeneration :element="movie"></VoteGeneration></li>
                </ul>
            </div>
            
        </div>
    </div>
</template>
<style lang="scss"></style>
