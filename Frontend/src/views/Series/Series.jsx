import React, { useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie';
import HeaderSeries from '../../components/Header-Series/Header-Series';
import Footer from '../../components/Footer/Footer';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { } from '@fortawesome/free-solid-svg-icons';
import casaDePapel from '../../img/casa02.jpg';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';

const Series = (props) => {
   let history = useHistory();

   const [series, setSeries] = useState([]);
   const [favoritos, setFavoritos] = useState([]);
   const [query, setSearch] = useState("");

   //Constuccion de URL consultas TMDB
   let key = "ef2edc9da61e81787a8079a7df721936";
   let base_url = `http://api.themoviedb.org/3/movie/`;
   let language = "language=es-ES"
   let colectionSeries = 'https://api.themoviedb.org/3/tv/popular?api_key=ef2edc9da61e81787a8079a7df721936&language=es-ES&page=1'

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
            setSeries(data.results);
         })
   }, []);


   let url_Base_series = 'https://api.themoviedb.org/3/search/tv?';
   let api_key = 'ef2edc9da61e81787a8079a7df721936';
   let url_Base_Genre = `http://api.themoviedb.org/3/`;

   const [searchQuery, setSearchQuery] = useState("");
   const [seriesSearch, setSeriesSearch] = useState([]);
   const [movieGenreSearch, setGenre] = useState([]);
   const [genreQuery, setGenreQuery] = useState("");

   // Busqueda de series por titulo
   const search = async (query) => {
      let resultSearch = await axios.get(`${url_Base_series}api_key=${api_key}&language=es&query=${query}`);
      setSearchQuery(query);
      return setSeriesSearch(resultSearch.data.results);
   };

   //Busqueda por Genero

   let url_genre = 'http://api.themoviedb.org/3/discover/tv?api_key=ef2edc9da61e81787a8079a7df721936&language=es&query=aventura';


   const searchGenre = async (genres) => {
      let genreFilms = await axios.get(`${url_Base_Genre}discover/tv?api_key=${api_key}&${language}&with_genres=${genres}`);
      setGenreQuery(genres);
      return setGenre(genreFilms.data.results);
   };

   //Genres dictionary
   const genreDictionary = (genreQuery) => {
      switch (genreQuery) {
         case "10759":
            return "acción y aventura"
         case "10762":
            return "infantil"
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
         case "10767":
            return "monólogos"
         case "10764":
            return "reality"
         case "9648":
            return "misterio"
         case "10765":
            return "telenovela"
         case "10765":
            return "ciencia ficción"
         case "10763":
            return "noticias"
         case "10768":
            return "bélicas & política"
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

   if (!props.token) {
      setTimeout(() => {
         history.push('/');
      }, 2000);

      return (
         <div className="container-gif">
            <div className="gif">
               <Loading />
            </div>

         </div>
      );
   };

   const takeMeTo = (movie) => {
      localStorage.setItem('movie', JSON.stringify(movie));
      let LittleJson = JSON.parse(localStorage.getItem('movie'));
      console.log(LittleJson);
      history.push('/series/profile')
   }


   return (
      <div className='contenedor-padre-series'>
         < HeaderSeries onSearch={search} onGenre={searchGenre} />
         <div className="imagen-portada">
            <img className='portada' src={casaDePapel} alt="Casa de papel" />
         </div>
         <div className="separator"></div>
         <h2 className='genre-title'>Resultado de la búsqueda por género <em class="title-color">{genreDictionary(genreQuery)}</em></h2>
         <div className="print-movie-search">
            {movieGenreSearch.map(genre => <Movie style="other-card-style" key={genre.id} addFavouriteMovie={addFavouriteMovie} {...genre} onClick={() => takeMeTo(genre)} />)}
         </div>
         <div className="separator"></div>
         <h2 className='genre-title'>Resultado de la búsqueda <em class="title-color">{searchQuery}</em></h2>
         <div className="print-movie-search">
            {seriesSearch.map(serie => <Movie style='card-style' key={serie.id}  {...serie} onClick={() => takeMeTo(serie)} />)}
         </div>
         {/* <div className="separadorSeries"></div>
         <h2 className='series-title'>Resultado de la búsqueda {searchQuery}</h2>
         <div className="carousel-series">
            {seriesSearch.map(serie => <Movie style='card-style' key={serie.id}  {...serie} onClick={() => takeMeTo(serie)} />)}
         </div> */}
         <div className="series-genre">
            <div className="carousel-series">
               {movieGenreSearch.map(genre => <Movie style='card-style' key={genre.id} addFavouriteMovie={addFavouriteMovie} {...genre} onClick={() => takeMeTo(genre)} />)}
            </div>
         </div>
         <div className="separadorSeries"></div>
         <div className="portada-series">
            {series.map(series => <Movie style='other-card-style' key={series.id}  {...series} onClick={() => takeMeTo(series)} />)}
         </div>
         <Footer />
      </div>
   )
};

const mapStateToProps = state => {
   return {
      user: state.user,
      token: state.token
   }
};

export default connect(mapStateToProps)(Series);
