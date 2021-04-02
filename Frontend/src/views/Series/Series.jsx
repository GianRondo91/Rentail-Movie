import React, { useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie';
//import video from '../../video/videoplayback.mp4';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx';
import { } from '@fortawesome/free-solid-svg-icons';
import casaDePapel from '../../img/casa02.jpg';
//import HeaderUser from '../../components/User/Header-user/Header-user';




const Series = (props) => {

   const [series, setSeries] = useState([]);
   const [favoritos, setFavoritos] = useState([]);
  

   //Constuccion de URL consultas TMDB

   let key = "ef2edc9da61e81787a8079a7df721936";
   let base_url = `http://api.themoviedb.org/3/movie/`;
   let language = "language=es-ES"
   let colectionSeries ='https://api.themoviedb.org/3/tv/popular?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1'

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

   //Functions:

   let history = useHistory();
   const takeMeTo = (movie) => {

    localStorage.setItem('movie', JSON.stringify(movie));
    let LittleJson = JSON.parse(localStorage.getItem('movie'));
    console.log(LittleJson);

    history.push('/MovieProfile')
 }

    return (

    <div className='contenedor-padre-series'>

           <Header/>
           <div className="imagen-portada">
              <img className='portada' src={casaDePapel} alt="Casa de papel"/>
           </div>

           <div className="portada-series">
           {series.map(series => <Movie style='dos' key={series.id}  {...series} onClick={() => takeMeTo(series)} />)}
           </div>


    </div>

   )

}




export default Series;