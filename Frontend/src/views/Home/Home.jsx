import React, { useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie';
import video from '../../video/videoplayback.mp4';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx';
import { } from '@fortawesome/free-solid-svg-icons';
import AddFavourite from '../../components/Add-fav/AddFavourite';
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
   let urlGenre = `http://api.themoviedb.org/3/`
   let base_url = `http://api.themoviedb.org/3/movie/`;
   let urlSearch = `http://api.themoviedb.org/3/search/movie?`;
   let language = "language=es-ES";


   // https://api.themoviedb.org/3/search/movie?api_key=e34f732b92a2e7dbe69709d0433150c3&language=es&query=${query}
   //Buscar Pelis
   const search = async (query) => {
      let resultSearch = await axios.get(`${urlSearch}api_key=${key}&language=es&query=${query}`);
      setSearchQuery(query);
      return setSearch(resultSearch.data.results);
   }
   //https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
   //Busqueda por genero
   const searchGenre = async (genres) => {
      let genreFilms = await axios.get(`${urlGenre}discover/movie?api_key=${key}&${language}&with_genres=${genres}`);
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
   console.log("soy el return de", genreDictionary())


   useEffect(() => {
      //Ultimas Peliculas
      let Latest = `${base_url}now_playing?api_key=${key}&${language}&page=1`;
      let destacado = `${base_url}now_playing?api_key=${key}&${language}&page=2`;
      let populares = `${base_url}popular?api_key=${key}&${language}`;
      let recomendaciones = `${base_url}top_rated?api_key=${key}&${language}`;

      getFavouriteMovies()
      //Populares
      fetch(populares)
         .then(res => (res.json()))
         .then(data => {
            setLatest(data.results)
         });

      //Latest page1 and page2
      fetch(Latest)
         .then(res => (res.json()))
         .then(data => {
            setPopulares(data.results)
         });

      fetch(destacado)
         .then(res => (res.json()))
         .then(data => {
            setDestacado(data.results.slice(0, 5))
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
      history.push('/MovieProfile')
   };

   const GotoMovies = () => {
      history.push('/peliculas')
   };

   const getFavouriteMovies = () =>{
      let allFavourites = JSON.parse(localStorage.getItem('favoritos'));
      setFavoritos(allFavourites)
   }

   const addFavouriteMovie = (id,title,posther_path) => {
      if(favoritos === null){
         const listaFavoritos = [{id,title,posther_path}]
         setFavoritos(listaFavoritos)
         localStorage.setItem("favoritos", JSON.stringify(listaFavoritos)) 
      }
      else if(!(favoritos.filter(movie => movie.id === id).length > 0)) { 
         const listaFavoritos = [...favoritos, {id,title,posther_path}]
         setFavoritos(listaFavoritos)
         localStorage.setItem("favoritos", JSON.stringify(listaFavoritos))    
      }
   }

   if (movieSearch.length === 0 && movieGenreSearch.length===0) {
      return (
         <div className="contenedorHome">
            < Header onSearch={search} onGenre={searchGenre}/>
            <video className='myVideo' autoPlay muted loop id="myVideo" src={video}></video>
            <div class="content">
               <p>AQUA-MAN</p>
               <button id="myBtn" onClick={GotoMovies}> Mas información </button>
            </div>
            <div className="separador"></div>
            <h2 className='tituloDelGenero'>Ultimas Peliculas Añadidas</h2>
            <div className="ultimas">
               {latest.map(latest => <Movie style='uno' key={latest.id} addFavouriteMovie={addFavouriteMovie} {...latest} onClick={() => takeMeTo(latest)} />)}
            </div>

            <div className="separador"></div>
            <h2 className='tituloDelGenero'>Populares</h2>
            <div className="populares">
               {populares.map(populares => <Movie style='uno' key={populares.id} {...populares} addFavouriteMovie={addFavouriteMovie} onClick={() => takeMeTo(populares)} />)}
            </div>

            <div className="separador"></div>
            <h2 className='tituloDelGenero'>Destacadas</h2>
            <div className="destacado">
               {destacado.map(destacado => <Movie style='dos' key={destacado.id} {...destacado} addFavouriteMovie={addFavouriteMovie} onClick={() => takeMeTo(destacado)} />)}
            </div>
            <div className="separador"></div>
            <h2 className='tituloDelGenero'>Recomendaciones</h2>
            <div className="recomendaciones">
               {recomendaciones.map(recomendaciones => <Movie style='uno' key={recomendaciones.id} addFavouriteMovie={addFavouriteMovie} {...recomendaciones} onClick={() => takeMeTo(recomendaciones)} />)}
            </div>
            <Footer />
         </div>
      );

   } else {
      return (
         <div className="contenedorHome">
            < Header onSearch={search} onGenre={searchGenre}/>
            <video className='myVideo' autoPlay muted loop id="myVideo" src={video}></video>
            <div class="content">
               <p>AQUA-MAN</p>
               <button id="myBtn" onClick={GotoMovies}> Mas información </button>
            </div>
            <div className="separador"></div>
            <h2 className='search-genre'>Resultado de la búsqueda por género {genreDictionary(genreQuery)}</h2>
            <div className="search-genre-array">
               {movieGenreSearch.map(genre => <Movie style='uno' key={genre.id} addFavouriteMovie={addFavouriteMovie} {...genre} onClick={() => takeMeTo(genre)} />)}
            </div>
            <div className="separador"></div>
            <h2 className='search-title'>Resultado de la búsqueda {searchQuery}</h2>
            <div className="search-array">
               {movieSearch.map(finded => <Movie style='uno' key={finded.id} addFavouriteMovie={addFavouriteMovie} {...finded} onClick={() => takeMeTo(finded)} />)}
            </div>
            <div className="separador"></div>
            <h2 className='tituloDelGenero'>Ultimas Peliculas Añadidas</h2>
            <div className="ultimas">
               {latest.map(latest => <Movie style='uno' key={latest.id} addFavouriteMovie={addFavouriteMovie} {...latest} onClick={() => takeMeTo(latest)} />)}
            </div>

            <div className="separador"></div>
            <h2 className='tituloDelGenero'>Populares</h2>
            <div className="populares">
               {populares.map(populares => <Movie style='uno' key={populares.id} {...populares} addFavouriteMovie={addFavouriteMovie} onClick={() => takeMeTo(populares)} />)}
            </div>

            <div className="separador"></div>
            <h2 className='tituloDelGenero'>Destacadas</h2>
            <div className="destacado">
               {destacado.map(destacado => <Movie style='dos' key={destacado.id} {...destacado} addFavouriteMovie={addFavouriteMovie} onClick={() => takeMeTo(destacado)} />)}
            </div>
            <div className="separador"></div>
            <h2 className='tituloDelGenero'>Recomendaciones</h2>
            <div className="recomendaciones">
               {recomendaciones.map(recomendaciones => <Movie style='uno' key={recomendaciones.id} addFavouriteMovie={addFavouriteMovie} {...recomendaciones} onClick={() => takeMeTo(recomendaciones)} />)}
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
export default connect(mapStateToProps)(Home);