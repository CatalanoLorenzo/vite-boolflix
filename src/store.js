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
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=57f5adf44da9194b28f4b759dda8f20f&language=it-IT&page=1&include_adult=false&query=',
    apiUrlImg: 'https://image.tmdb.org/t/p/w500/',
    apiUrlFlag: 'https://flagsapi.com/',
    apiUrlCastSeriesStart: 'https://api.themoviedb.org/3/tv/',
    apiUrlCastMovieStart: 'https://api.themoviedb.org/3/movie/',
    apiUrlCastEnd: '/credits?api_key=e99307154c6dfb0b4750f6603256716d&language=it_it',
    apiUrlGenresMovie: 'https://api.themoviedb.org/3/genre/movie/list?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT',
    apiUrlGenresSeries: 'https://api.themoviedb.org/3/genre/tv/list?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT',
    compatibleFlags: flags,
    /**Get Elemnt-API into Array
     *  
     */
    getElemntApiIntoArray(url){
        //effetua una chiamata all'API
        axios
            //utilizza la stringa url passatagli per effettuare la chimata
            .get(url)
            //se ottiene esito positivo
            .then((response) => {

                //cicla all'interno della risposta >.data.results per ottenere il singolo film/serie
                response.data.results.forEach(element => {

                    //se il genere selezionato è incluso nel genere del film/serie o il genere selezionato è una stringa vuota
                    if (element.genre_ids.includes(store.selectGenre) || store.selectGenre == '') {

                        //inserisce nell'array da mostrare l'elemento    
                        this.arrayShow.push(element)

                    }else{

                        //senno cambia il valore in tue di this.erronNotFoudGenres
                        this.erronNotFoudGenres = true

                    }

                });

            })
            //se ottiene esito negativo
            .catch((error) => {

                //logga in console l'errore ottenuto
                console.log(error);

            });
    },
    /**Get Url-API
     * 
     */
    getUrlApi(baseUrl){

        //ritorna la somma di stringhe tra la stringa passata e la rischerca fatta dall'utente
        return baseUrl + this.querySerch

    },
    /**Get Data by API
     * 
     */
    getDataByApi() {

        //controlla che il nome inserito dall'untente non è nullo
        if (this.querySerch != null) {
        //se lo è 

            //crea una variabile e le associa il ritorno della funzione che genra L'Url
            let urlMovie = this.getUrlApi(this.apiUrlMovie)
            //crea una variabile e le associa il ritorno della funzione che genra L'Url
            let urlTv = this.getUrlApi(this.apiUrlSeries)
            //svuota l'array contenente tutti gli elementi da mostra a schermo 
            this.arrayShow = []
            //utilizza la funzione per inserire gli elementi appena generati nell'array
            this.getElemntApiIntoArray(urlMovie)
            //utilizza la funzione per inserire gli elementi appena generati nell'array
            this.getElemntApiIntoArray(urlTv)

        }
    },
    /**Get Genres-List by API
     * 
     */
    getGenreslist(urlmMvieGenres,urlSeriesGenres){

        //effetua una chiamata all'API
        axios

            //utilizza la prima stringa url passatagli per effettuare la chimata
            .get(urlmMvieGenres)
            //se ottiene esito positivo
            .then((response) => {

                //inserisce la risposta >.data.genres dentro all'array contenente la lista dei generi
                this.arrayListGenres = response.data.genres

            })
            //se ottiene esito negativo
            .catch((error) => {

                //logga in console l'errore ottenuto
                console.log(error);

            });
        //effetua una chiamata all'API
        axios
            //utilizza la seconda stringa url passatagli per effettuare la chimata
            .get(urlSeriesGenres)
            //se ottiene esito positivo
            .then((response) => {
                
                //cicla all'interno della risposta > .data.genres per  ottenere il singolo genere
                response.data.genres.forEach((genre) => {

                    //lo inserisce dentro all'array  all'array contenente la lista dei generi
                        this.arrayListGenres.push(genre)
                })

            })
            //se ottiene esito negativo
            .catch((error) => {

                //logga in console l'errore ottenuto
                console.log(error);

            });
    },
    /**Get Cast by API
     * 
     */
    getCastByApi(id,urlBase) {
        //crea una constante e le inserissce una stringa composta da this.apiUrlCastMovie + id (passatogli) + this.apiUrlCastEnd
        const urlcast = `${urlBase}${id}${this.apiUrlCastEnd}`
        //svuota l'array da mostrare per il cast
        this.arrayCastShow = []
        //effetua una chiamata all'API
        axios
            //utilizza lacostante creata per effettuare la chimata
            .get(urlcast)
            //se ottiene esito positivo
            .then((response) => {

                //cicla all'interno della risposta > .data.cast e prende il singolo attore e la posizione dell'array
                response.data.cast.forEach((actor,index) => {
                    //se la posizione dell'array è compresa tra 0 e 4
                   if (index < 5) {

                    //inserisce i dati dell'attore dentro l'array da mostrare
                    this.arrayCastShow.push(actor)
                
                    }    
                });
                
            })
            //se ottiene esito negativo
            .catch((error) => {

                //logga in console l'errore ottenuto
                console.log(error);

            })
    },
    /**Condition for generate Cast-List
     * 
     */
    conditionForGenerateCast(titlemovie,id){
        //se il titolo del film è definito
        if (titlemovie != undefined) {

            //utilizza la funzione per generare la lista del cast tramite l'id passatogli e l'url base this.apiUrlCastMovieStart)
            this.getCastByApi(id,this.apiUrlCastMovieStart)
        
        //Sennò
        }else{

            //utilizza la funzione per generare la lista del cast tramite l'id passatogli e l'url base this.apiUrlCastSeriesStart
            this.getCastByApi(id,this.apiUrlCastSeriesStart)
        }
    },
    /**Chage Status
     * 
     */
    chagestatus(){
        //se la lunghezza dell'array da mostrare è zero
        if (this.arrayShow.length == 0) {

            //cambia il valore di this.erronNotFoudGenres in tue
            this.erronNotFoudGenres = true

        }

    }

})
