import React, { useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie';
//import video from '../../video/videoplayback.mp4';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { } from '@fortawesome/free-solid-svg-icons';
import casaDePapel from '../../img/casa02.jpg';
import BasicPagination from '../../components/Pagination/Pagination';
import axios from 'axios';



const Series = (props) => {

   const [series, setSeries] = useState([]);
   const [favoritos, setFavoritos] = useState([]);
   const [query, setSearch] = useState("");

   //Constuccion de URL consultas TMDB

   let key = "ef2edc9da61e81787a8079a7df721936";
   let base_url = `http://api.themoviedb.org/3/movie/`;
   let language = "language=es-ES"
   let colectionSeries = 'https://api.themoviedb.org/3/tv/popular?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1'

   useEffect(() => {

      //Ultimas Peliculas

      let Latest = `${base_url}now_playing?api_key=${key}&${language}&page=1`;
      let destacado = `${base_url}now_playing?api_key=${key}&${language}&page=2`;
      let populares = `${base_url}popular?api_key=${key}&${language}`;
      let recomendaciones = `${base_url}top_rated?api_key=${key}&${language}`

      //Populares

      fetch(colectionSeries)
         .then(res => (res.json()))
         .then(data => {
            console.log(data.results)
            setSeries(data.results)
         })

   }, []);

    // Busqueda de series por titulo
    let url_Base_series = 'https://api.themoviedb.org/3/search/tv?';
    let api_key = 'ef2edc9da61e81787a8079a7df721936';
    const [searchQuery, setSearchQuery] = useState("");
    const [seriesSearch, setSeriesSearch] = useState([]);
   
    const search = async (query) => {
      let resultSearch = await axios.get(`${url_Base_series}api_key=${api_key}&language=es&query=${query}`);
      setSearchQuery(query);
      console.log(resultSearch.data)
      return setSeriesSearch(resultSearch.data.results);
      
   }

   //Busqueda por Genero
   let url_Base_Genge=`http://api.themoviedb.org/3/`;
   let url_genre ='http://api.themoviedb.org/3/discover/tv?api_key=ef2edc9da61e81787a8079a7df721936&language=es&query=aventura'
   
   const [movieGenreSearch, setGenre] = useState([]);
   const [genreQuery, setGenreQuery] = useState("");
   const searchGenre = async (genres) => {
      let genreFilms = await axios.get(`${url_Base_Genge}discover/tv?api_key=${api_key}&${language}&with_genres=${genres}`);
      setGenreQuery(genres);
      return setGenre(genreFilms.data.results);
   }
   //Genres dictionary

   const genreDictionary = (genreQuery) => {
      switch (genreQuery) {
         case "28":
            return "acción"
         case "12":
            return "aventura"
         case "16":
            return "animación"
         case "35":
            return "comedia"
         case "80":
            return "crimen"
         case "99":
            return "documental"
         case "18":
            return "drama"
         case "10751":
            return "familia"
         case "14":
            return "fantasía"
         case "36":
            return "historia"
         case "27":
            return "terror"
         case "10402":
            return "música"
         case "9648":
            return "misterio"
         case "10749":
            return "romance"
         case "878":
            return "ciencia ficción"
         case "53":
            return "thriller"
         case "10752":
            return "bélico"
         case "37":
            return "western"
         default:
            break;
      };

   };
   
   const addFavouriteMovie = (id, title, posther_path) => {
      const listaFavoritos = [...favoritos, { id, title, posther_path }]
      setFavoritos(listaFavoritos)
      localStorage.setItem("favoritos", JSON.stringify(favoritos))
   }
   

   //Functions:

   let history = useHistory();

   if (!props.token) {
      history.push('/');
      return null;
   };

   const takeMeTo = (movie) => {

      localStorage.setItem('movie', JSON.stringify(movie));
      let LittleJson = JSON.parse(localStorage.getItem('movie'));
      console.log(LittleJson);

      history.push('/home/movie')
   }

   return (

      <div className='contenedor-padre-series'>

        < Header onSearch={search} onGenre={searchGenre} />
         <div className="imagen-portada">
            <img className='portada' src={casaDePapel} alt="Casa de papel" />
         </div>
         <div className="separadorSeries"></div>
         <h2 className='series-title'>Resultado de la búsqueda {searchQuery}</h2>
            <div className="carousel-series">
               {seriesSearch.map(serie => <Movie style='card-style' key={serie.id}  {...serie} onClick={() => takeMeTo(serie)} />)}

            </div>
            <div className="series-genre">
               <div className="carousel-series">
               {movieGenreSearch.map(genre => <Movie style='card-style' key={genre.id} addFavouriteMovie={addFavouriteMovie} {...genre} onClick={() => takeMeTo(genre)} />)}
               </div>
            </div>
         <div className="separadorSeries"></div>
         <div className="portada-series">
            {series.map(series => <Movie style='other-card-style' key={series.id}  {...series} onClick={() => takeMeTo(series)} />)}
         </div>


      </div>

   )

}
const mapStateToProps =state =>{
   return{
     user : state.user,
     token : state.token
   }
 };
export default connect(mapStateToProps)(Series);
