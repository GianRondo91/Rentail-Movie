import React, { useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie';
import video from '../../video/videoplayback.mp4';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx';
import { } from '@fortawesome/free-solid-svg-icons';


const Home = (props) => {

   const [latest, setLatest] = useState([]);
   const [destacado, setDestacado] = useState([]);
   const [populares, setPopulares] = useState([]);
   const [recomendaciones, setRecomendaciones] = useState([]);
   const [favoritos, setFavoritos] = useState([]);

   //Constuccion de URL consultas TMDB
   let key = "ef2edc9da61e81787a8079a7df721936";
   let base_url = `http://api.themoviedb.org/3/movie/`;
   let language = "language=es-ES";

   useEffect(() => {
      //Ultimas Peliculas
      let Latest = `${base_url}now_playing?api_key=${key}&${language}&page=1`;
      let destacado = `${base_url}now_playing?api_key=${key}&${language}&page=2`;
      let populares = `${base_url}popular?api_key=${key}&${language}`;
      let recomendaciones = `${base_url}top_rated?api_key=${key}&${language}`;

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

   //Functions:

   let history = useHistory();

   const takeMeTo = (movie) => {
      localStorage.setItem('movie', JSON.stringify(movie));
      let LittleJson = JSON.parse(localStorage.getItem('movie'));
      console.log(LittleJson);
      history.push('/MovieProfile')
   };

   const GotoMovies = () => {
      history.push('/peliculas')
   };

   const addFavouriteMovie = (id,title,posther_path) => {
      const listaFavoritos = [...favoritos, {id,title,posther_path}]
      setFavoritos(listaFavoritos)
      localStorage.setItem("favoritos", JSON.stringify(favoritos))
   }

 

   return (
      <div className="contenedorHome">
         < Header />
         <video className='myVideo' autoPlay muted loop id="myVideo" src={video}></video>
         <div class="content">
            <h1 className='h1'></h1>
            <p>AQUA-MAN</p>
            <button id="myBtn" onClick={() => GotoMovies()}> Mas información </button>
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
};

export default Home;