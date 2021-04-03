import React, { useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie';
import video from '../../video/videoplayback.mp4';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx';
import { } from '@fortawesome/free-solid-svg-icons';
// import AddFavourite from '../../components/Add-fav/AddFavourite';
import axios from "axios";
import { connect } from 'react-redux';


const Home = (props) => {

   const [latest, setLatest] = useState([]);
   const [destacado, setDestacado] = useState([]);
   const [populares, setPopulares] = useState([]);
   const [recomendaciones, setRecomendaciones] = useState([]);
   const [favoritos, setFavoritos] = useState([""]);
   /* const [favoritos, setFavoritos] = useState([]); */
   const [movieSearch, setSearch] = useState([]);
   const [movieGenreSearch, setGenre] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");
   const [genreQuery, setGenreQuery] = useState("");

   //Constuccion de URL consultas TMDB
   let key = "ef2edc9da61e81787a8079a7df721936";
   let base_url = `http://api.themoviedb.org/3/`
   let base = `http://api.themoviedb.org/3/movie/`;
   let movie = `movie?`;
   let base_search = `search`;
   let language = "language=es-ES";


   // https://api.themoviedb.org/3/search/movie?api_key=e34f732b92a2e7dbe69709d0433150c3&language=es&query=${query};

   //Buscar Pelis
   const search = async (query) => {
      let resultSearch = await axios.get(`${base_url}${base_search}/${movie}api_key=${key}&language=es&query=${query}`);
      setSearchQuery(query);
      return setSearch(resultSearch.data.results);
   }
   //https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
   //Busqueda por genero
   const searchGenre = async (genres) => {
      let genreFilms = await axios.get(`${base_url}discover/${movie}api_key=${key}&${language}&with_genres=${genres}`);
      setGenreQuery(genres);
      return setGenre(genreFilms.data.results);
   }
   //Genres dictionary

   const genreDictionary = (genreQuery) => {
      switch (genreQuery) {
         case "28":
            return "Acción"
         case "12":
            return "Aventura"
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
         case "14":
            return "Fantasía"
         case "36":
            return "Historia"
         case "27":
            return "Terror"
         case "10402":
            return "Música"
         case "9648":
            return "Misterio"
         case "10749":
            return "Romance"
         case "878":
            return "Ciencia ficción"
         case "53":
            return "Thriller"
         case "10752":
            return "Bélico"
         case "37":
            return "Western"
         default:
            break;
      };
   };
   // console.log("soy el return de", genreDictionary())


   useEffect(() => {
      //Ultimas Peliculas
      let Latest = `${base}now_playing?api_key=${key}&${language}&page=1`;
      let destacado = `${base}now_playing?api_key=${key}&${language}&page=2`;
      let populares = `${base}popular?api_key=${key}&${language}`;
      let recomendaciones = `${base}top_rated?api_key=${key}&${language}`;

      getFavouriteMovies()
      //Populares
      fetch(populares)
         .then(res => (res.json()))
         .then(data => {
            setLatest(data.results);
         });

      //Latest page1 and page2
      fetch(Latest)
         .then(res => (res.json()))
         .then(data => {
            setPopulares(data.results);
         });

      fetch(destacado)
         .then(res => (res.json()))
         .then(data => {
            setDestacado(data.results.slice(0, 5));
         });

      //Recomendaciones
      fetch(recomendaciones)
         .then(res => (res.json()))
         .then(data => {
            setRecomendaciones(data.results);
         });
   }, []);

   let history = useHistory();

   if (!props.token) {
      history.push('/');
      return null;
   };

   //Functions:
   const takeMeTo = (movie) => {
      localStorage.setItem('movie', JSON.stringify(movie));
      let LittleJson = JSON.parse(localStorage.getItem('movie'));
      console.log(LittleJson);
      history.push('/home/movie');
   };

   const GotoMovies = () => {
      history.push('/home');
   };

   const getFavouriteMovies = () => {
      let allFavourites = JSON.parse(localStorage.getItem('favoritos'));
      setFavoritos(allFavourites);
   }

   const addFavouriteMovie = (id, title, posther_path) => {
      if (favoritos === null) {
         const listaFavoritos = [{ id, title, posther_path }]
         setFavoritos(listaFavoritos)
         localStorage.setItem("favoritos", JSON.stringify(listaFavoritos))
      }
      else if (!(favoritos.filter(movie => movie.id === id).length > 0)) {
         const listaFavoritos = [...favoritos, { id, title, posther_path }]
         setFavoritos(listaFavoritos)
         localStorage.setItem("favoritos", JSON.stringify(listaFavoritos))
      }
   }

   if (movieSearch.length === 0 && movieGenreSearch.length === 0) {
      return (
         <div className="content-home">
            < Header onSearch={search} onGenre={searchGenre} />
            <div className="content-movies">
               <video className='my-video' autoPlay muted loop id="my-video" src={video}></video>
               <div class="content-button-info">
                  <p>AQUA-MAN</p>
                  <button id="button-info" onClick={GotoMovies}> Mas información </button>
               </div>
               <div className="separator"></div>
               <h2 className="genre-title">Destacadas</h2>
               <div className="print-movie">
                  {destacado.map(destacado => <Movie style="other-card-style" key={destacado.id} {...destacado} addFavouriteMovie={addFavouriteMovie} onClick={() => takeMeTo(destacado)} />)}
               </div>
               <div className="separator"></div>
               <h2 className="genre-title">Ultimas Peliculas Añadidas</h2>
               <div className="print-movie">
                  {latest.map(latest => <Movie style="card-style" key={latest.id} addFavouriteMovie={addFavouriteMovie} {...latest} onClick={() => takeMeTo(latest)} />)}
               </div>

               <div className="separator"></div>
               <h2 className="genre-title">Populares</h2>
               <div className="print-movie">
                  {populares.map(populares => <Movie style="card-style" key={populares.id} {...populares} addFavouriteMovie={addFavouriteMovie} onClick={() => takeMeTo(populares)} />)}
               </div>
               <div className="separator"></div>
               <h2 className='genre-title'>Recomendaciones</h2>
               <div className="print-movie">
                  {recomendaciones.map(recomendaciones => <Movie style="card-style" key={recomendaciones.id} addFavouriteMovie={addFavouriteMovie} {...recomendaciones} onClick={() => takeMeTo(recomendaciones)} />)}
               </div>
            </div>
            <Footer />
         </div>
      );

   } else {
      return (
         <div className="content-home">
            < Header onSearch={search} onGenre={searchGenre} />
            <div className="content-movies">
               <video className='my-video' autoPlay muted loop id="my-video" src={video}></video>
               <div class="content-button-info">
                  <p>AQUA-MAN</p>
                  <button id="button-info" onClick={GotoMovies}> Mas información </button>
               </div>
               <div className="separator"></div>
               <h2 className='genre-title'>Resultado de la búsqueda por género <em class="title-color">{genreDictionary(genreQuery)}</em></h2>
               <div className="print-movie-search">
                  {movieGenreSearch.map(genre => <Movie style="other-card-style" key={genre.id} addFavouriteMovie={addFavouriteMovie} {...genre} onClick={() => takeMeTo(genre)} />)}
               </div>
               <div className="separator"></div>
               <h2 className='genre-title'>Resultado de la búsqueda <em class="title-color">{searchQuery}</em></h2>
               <div className="print-movie-search">
                  {movieSearch.map(finded => <Movie style="other-card-style" key={finded.id} addFavouriteMovie={addFavouriteMovie} {...finded} onClick={() => takeMeTo(finded)} />)}
               </div>
               <div className="separator"></div>
               <h2 className="genre-title">Ultimas Peliculas Añadidas</h2>
               <div className="print-movie">
                  {latest.map(latest => <Movie style="card-style" key={latest.id} addFavouriteMovie={addFavouriteMovie} {...latest} onClick={() => takeMeTo(latest)} />)}
               </div>

               <div className="separator"></div>
               <h2 className="genre-title">Populares</h2>
               <div className="print-movie">
                  {populares.map(populares => <Movie style="card-style" key={populares.id} {...populares} addFavouriteMovie={addFavouriteMovie} onClick={() => takeMeTo(populares)} />)}
               </div>

               <div className="separator"></div>
               <h2 className="genre-title">Destacadas</h2>
               <div className="print-movie">
                  {destacado.map(destacado => <Movie style='other-card-style' key={destacado.id} {...destacado} addFavouriteMovie={addFavouriteMovie} onClick={() => takeMeTo(destacado)} />)}
               </div>
               <div className="separator"></div>
               <h2 className="genre-title">Recomendaciones</h2>
               <div className="print-movie">
                  {recomendaciones.map(recomendaciones => <Movie style="card-style" key={recomendaciones.id} addFavouriteMovie={addFavouriteMovie} {...recomendaciones} onClick={() => takeMeTo(recomendaciones)} />)}
               </div>
               <Footer />
            </div>
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
export default connect(mapStateToProps)(Home);