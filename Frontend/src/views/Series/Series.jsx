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

   let language = "language=es-ES"
   let colectionSeries = 'https://api.themoviedb.org/3/tv/popular?api_key=ef2edc9da61e81787a8079a7df721936&language=es-ES&page=1'

   useEffect(() => {
     

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
            return "Acción y aventura"
         case "10762":
            return "Infantil"
         case "16":
            return "Animación"
         case "35":
            return "Comedia"
         case "80":
            return "Crimen"
         case "99":
            return "Documental"
         case "18":
            return "Drama"
         case "10751":
            return "Familia"
         case "10767":
            return "Monólogos"
         case "10764":
            return "Reality"
         case "9648":
            return "Misterio"
         case "10766":
            return "Telenovela"
         case "10765":
            return "Ciencia ficción"
         case "10763":
            return "Noticias"
         case "10768":
            return "Bélicas & política"
         case "37":
            return "Western"
         default:
            break;
      };

   };

   const addFavouriteMovie = (id, title, posther_path) => {
      const listaFavoritos = [...favoritos, { id, title, posther_path }]
      setFavoritos(listaFavoritos)
      localStorage.setItem("favoritos", JSON.stringify(favoritos))
   };

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

   if(seriesSearch.length === 0 && movieGenreSearch.length === 0){
      return(
         <div className='contenedor-padre-series'>
            < HeaderSeries onSearch={search} onGenre={searchGenre} />
            <div className="imagen-portada">
               <img className='portada' src={casaDePapel} alt="Casa de papel" />
            </div>

            <div className="serie-search">
               <h2 className='series-title'>Las más vistas</h2>
               <div className="portada-series">
                  {series.map(series => <Movie style='other-card-style' key={series.id}  {...series} onClick={() => takeMeTo(series)} />)}
               </div>
            </div>
            <Footer />
         </div>
      )
   
   }else{
      return (
         <div className='contenedor-padre-series'>
            < HeaderSeries onSearch={search} onGenre={searchGenre} />
            <div className="imagen-portada">
               <img className='portada' src={casaDePapel} alt="Casa de papel" />
            </div>
   
            <div className="serie-search">
               <h2 className='series-title'>Resultado de la búsqueda por género <em class="title-search">{genreDictionary(genreQuery)}</em></h2>
               <div className="carousel-series">
                  {movieGenreSearch.map(genre => <Movie style="other-card-style" key={genre.id} addFavouriteMovie={addFavouriteMovie} {...genre} onClick={() => takeMeTo(genre)} />)}
               </div>
   
               <h2 className='series-title'>Resultado de la búsqueda <em class="title-search">{searchQuery}</em></h2>
               <div className="carousel-series">
                  {seriesSearch.map(serie => <Movie style='other-card-style' key={serie.id}  {...serie} onClick={() => takeMeTo(serie)} />)}
               </div>
               
               
               <h2 className='series-title'>Las más vistas</h2>
               <div className="portada-series">
                  {series.map(series => <Movie style='other-card-style' key={series.id}  {...series} onClick={() => takeMeTo(series)} />)}
               </div>
            </div>
            <Footer />
         </div>
      )

   }
   
};

const mapStateToProps = state => {
   return {
      user: state.user,
      token: state.token
   }
};

export default connect(mapStateToProps)(Series);