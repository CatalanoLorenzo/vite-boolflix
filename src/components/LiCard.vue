<script>
import { store } from "../store";
import ImgGeneration from './ImgGeneration.vue'
import VoteGeneration from './VoteGeneration.vue'
export default {
    name: 'LiCard',
    components:{
        VoteGeneration,
        ImgGeneration
    },
    props: {
                arrayMovie: Object
            },
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <li class="list-unstyled">titolo :{{ arrayMovie.title }}{{ arrayMovie.name }}</li>
    <li class="list-unstyled" v-if="(arrayMovie.title != arrayMovie.original_title) || (arrayMovie.name != arrayMovie.original_name)">
        originaltitle: {{ arrayMovie.original_title }} {{ arrayMovie.original_name }}
    </li>
    <li class=" overflow-hidden list-unstyled">description: {{ arrayMovie.overview }}</li>
    <li class="list-unstyled">
        lenguage: <ImgGeneration :element="arrayMovie"></ImgGeneration>
    </li>
    <li class="list-unstyled">
        <VoteGeneration :element="arrayMovie"></VoteGeneration>
    </li>
    <li v-for="act in store.arrayCastShow">Personaggio:{{ act.character }}
        Attore:{{ act.name }}
    </li>
</template>