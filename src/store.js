import { reactive } from "vue";
import axios from 'axios';
import flags from "../src/assets/data/Flags";
export const store = reactive({
    querySerch: null,
    arrayShow: null,
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=57f5adf44da9194b28f4b759dda8f20f&language=it-IT&page=1&include_adult=false&query=',
    apiUrlImg: 'https://image.tmdb.org/t/p/w500/',
    apiUrlFlag: 'https://flagsapi.com/',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=57f5adf44da9194b28f4b759dda8f20f&language=it-IT&page=1&include_adult=false&query=',
    compatibleFlags: flags,
    getDataByApi() {
        if (this.querySerch != null) {
            let urlMovie
            let urlTv
            urlMovie = this.apiUrlMovie + this.querySerch
            urlTv = this.apiUrlSeries + this.querySerch
            this.arrayShow = []
            axios
                .get(urlMovie)
                .then((response) => {
                    response.data.results.forEach(element => {
                        this.arrayShow.push(element)
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
            axios
                .get(urlTv)
                .then((response) => {
                    response.data.results.forEach(element => {
                        this.arrayShow.push(element)
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
})
