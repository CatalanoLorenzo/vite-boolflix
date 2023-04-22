<script>
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
   
}
</script>
<template>
    <!-- title movie or title series -->
    <li class="list-unstyled">titolo :{{ arrayMovie.title }}{{ arrayMovie.name }}</li>
    <!-- not generated if title ita is = originalk title -->
    <li class="list-unstyled" v-if="(arrayMovie.title != arrayMovie.original_title) || (arrayMovie.name != arrayMovie.original_name)">
        originaltitle: {{ arrayMovie.original_title }} {{ arrayMovie.original_name }}
    </li>
    <!-- description -->
    <li class=" overflow-hidden list-unstyled">description: {{ arrayMovie.overview }}</li>
    <!-- lenguage + flag -->
    <li class="list-unstyled">
        lenguage: <ImgGeneration :element="arrayMovie"></ImgGeneration>
    </li>
    <!-- vote + stars -->
    <li class="list-unstyled">
        <VoteGeneration :element="arrayMovie"></VoteGeneration>
    </li>
    <!-- generate list of actor by array cast show -->
    <li v-for="act in arrayMovie.attori">Personaggio:{{ act.character }}
        Attore:{{ act.name }}
    </li>
</template>