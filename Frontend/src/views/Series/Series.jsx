<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie';
//import video from '../../video/videoplayback.mp4';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx';
import { } from '@fortawesome/free-solid-svg-icons';
import casaDePapel from '../../img/casa02.jpg';




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
   const takeMeTo = () => {

    localStorage.setItem('serie', JSON.stringify(series));
    let LittleJson = JSON.parse(localStorage.getItem('serie'));
    console.log(LittleJson);

    history.push('/MovieProfile')
 }

    return (

      <>
      <div className="series-container">
         
            <img src={casaDePapel} alt="casa" className="imagen-principal"/>
            < Header />
            <div class="informacion-dentro-del-div">

               <h1 className='h1-series'></h1>
               <p>La Casa De Papel</p>
               <button id="myBtn-series" > Ver Mas </button>
            </div>

            <div className="separador-series"></div>
            <h2 className='titulo-del-genero-series'>Ultimas Series Añadidas</h2>
            <div className="ultimas-series">
            {series.map(series => <Movie style='uno' key={series.id} {...series} onClick={() => takeMeTo(series)} />)}
            </div>
        </div>
        <Footer />
      </>  

   )

}




=======
import React from 'react';
import Header from '../../components/Header/Header';
import ReactPlayer from 'react-player';

const Series =()=>{


    return(

        <div className='component-series'>
            <Header/>
            <div className='video-player'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=0U9BGCry6ho"
                controls
                />
            </div>
           
            
        </div>
    )
}

>>>>>>> 0a597b1953c26bf764976f87c012644f8e2a629b
export default Series;