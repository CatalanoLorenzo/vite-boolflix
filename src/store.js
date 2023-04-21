import { reactive } from "vue";
import axios, { Axios } from 'axios';
import flags from "../src/assets/data/Flags";
export const store = reactive({
    querySerch: null,
    arrayShow: null,
    arrayCastShow: null,
    arrayListGenres: null,
    selectGenre : '',
    erronNotFoudGenres: false,
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=57f5adf44da9194b28f4b759dda8f20f&language=it-IT&page=1&include_adult=false&query=',
    apiUrlImg: 'https://image.tmdb.org/t/p/w500/',
    apiUrlFlag: 'https://flagsapi.com/',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=57f5adf44da9194b28f4b759dda8f20f&language=it-IT&page=1&include_adult=false&query=',
    apiUrlCastSeries: 'https://api.themoviedb.org/3/tv/',
    apiUrlCastMovie: 'https://api.themoviedb.org/3/movie/',
    apiUrlGenresMovie: 'https://api.themoviedb.org/3/genre/movie/list?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT',
    apiUrlGenresSeries: 'https://api.themoviedb.org/3/genre/tv/list?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT',
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
                    console.log(response.data.results);
                    response.data.results.forEach(element => {
                        if (element.genre_ids.includes(store.selectGenre) || store.selectGenre == '') {
                            this.arrayShow.push(element)
                        }else{
                            erronNotFoudGenres = true
                        }
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
            axios
                .get(urlTv)
                .then((response) => {
                    console.log(response.data.results);
                    response.data.results.forEach(element => {
                        if (element.genre_ids.includes(store.selectGenre) || store.selectGenre == '') {
                            this.arrayShow.push(element)
                        }else{
                            erronNotFoudGenres = true
                        }


                    })
                })
                .catch((error) => {
                    console.log(error);
                });

        }
    },
    getGenreslist(){
        axios
        .get(this.apiUrlGenresMovie)
        .then((response) => {
            console.log(response.data);
            this.arrayListGenres = response.data.genres
        })
        axios
        .get(this.apiUrlGenresSeries)
        .then((response) => {
            console.log(response.data);
            this.arrayListGenres = response.data.genres
        })
    },
    getCastByApi(id,) {
        
            let urlcast
        urlcast = `${this.apiUrlCastMovie}${id}/credits?api_key=e99307154c6dfb0b4750f6603256716d&language=it_it`
        console.log(urlcast);
        this.arrayCastShow = []
        axios
            .get(urlcast)
            .then((response) => {
                console.log(response.data.cast);
                let i = 0
                this.arrayCastShow = []
                response.data.cast.forEach(element => {
                   if (i < 5) {
                    this.arrayCastShow.push(element)
                    i++
                   }
                })
                console.log(this.arrayCastShow);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    chagestatus(){
        if (this.arrayShow.length == 0) {
            this.erronNotFoudGenres = true
            }
    }
            
        })
