<script >
import { store } from "../store.js";
export default {
    name: 'SelectsHeader',
    data() {
        return {
            store
        }
    },
    mounted() {
        store.getGenreslist(store.apiUrlGenresMovie, store.apiUrlGenresSeries)
    },
    
}
</script>
<template>
    <section>
        <!-- select for genres serch-->
        <select name="" id="" v-model="store.selectGenre" @change="store.getDataByApi()">
            <option value=''></option>
            <option v-for="genre in store.arrayListGenres" :value="genre.id">{{ genre.name }}</option>
        </select>
    </section>
    <section class="serch_bar">
        <!-- input ter for serch by query -->
        <input type="text" name="" id="" v-model="store.querySerch" @change="store.getDataByApi()">
    </section>
</template>