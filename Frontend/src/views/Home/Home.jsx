import React, { useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie';
import video from '../../video/videoplayback.mp4';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


import './Home.scss';



const Home = (props) => {

   const [latest, setLatest] = useState([])
   const [populares, setPopulares] = useState([])
   const [recomendaciones, setRecomendaciones] = useState([])

   useEffect(() => {

      //Ultimas Peliculas

      let Latest = "https://api.themoviedb.org/3/movie/now_playing?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1";

      let populares = 'https://api.themoviedb.org/3/movie/popular?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1';

      let recomendaciones = 'https://api.themoviedb.org/3/movie/top_rated?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1'



      fetch(populares)
         .then(res => (res.json()))
         .then(data => {
            console.log(data)
            setLatest(data.results)
         })

      //Populares




      fetch(Latest)
         .then(res => (res.json()))
         .then(data => {
            console.log(data)
            setPopulares(data.results)
         })

      //Recomendaciones



      fetch(recomendaciones)
         .then(res => (res.json()))
         .then(data => {
            console.log(data)
            setRecomendaciones(data.results)
         })




   }, []);

   //Functions:

   let history = useHistory();

   const takeMeTo = (latest) => {

      localStorage.setItem('latest', JSON.stringify(latest))

      setTimeout(() => { history.push('/movieProfile') }, 500)


   }
   const GotoMovies=()=>{

      history.push('/peliculas')
   }

   // Carousel 

  const getRecommendMovies = () => {
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=bb78e4cf3442e302d928f2c5edcdbee1`)
          .then(res => res.json())
          .then(data => {
              let carousel = document.querySelector('.recommended-films .carousel');
  
              data.results.forEach(pelicula => {
                  let imagePath = 'img/no-image.png';
  
                  if (pelicula.poster_path) {
                      imagePath = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
                  }
  
                  carousel.innerHTML += `<div class='film'><a href="#"><img src='${imagePath}' class='img-fluid float-end'></img></a></div>`
                      // console.log(pelicula.poster_path);
              });
              //createPagination(data.results, document.querySelector('.recommended-films .indicators'));
          });
  };
  
  //attachCarouselEvents(document.querySelector('.recommended-films'));
  //getRecommendMovies();
      
   // Fin Carousel
      
   return (


    <div>

      < Header/>
         <div className="contenedorHome">
         
         <video className='myVideo' autoPlay muted loop id="myVideo" src={video}></video>
         <div class="content">
              
              <p>AQUA-MAN</p>
              <button id="myBtn" onClick={()=>GotoMovies()}> Mas información </button>
             </div>
            
              <div className="separador"></div>
            <h2 className='h2'>Ultimas Peliculas Añadidas</h2>

            <Carousel>
             {latest.map(latest => <Movie key={latest.id} {...latest} onClick={() => takeMeTo(latest)} />)} 
             </Carousel>

            <div className="ultimas">
               
            </div>
              <div className="separador"></div>
            <h2 className='h2'>Populares</h2>

            <div className="populares">
               {populares.map(populares => <Movie key={populares.id} {...populares} onClick={() => takeMeTo(populares)} />)}
            </div>
              <div className="separador"></div>
            <h2 className='h2'>Recomendaciones</h2>

            <div className="recomendadas">
               {recomendaciones.map(recomendaciones => <Movie key={recomendaciones.id} {...recomendaciones} onClick={() => takeMeTo(recomendaciones)} />)}
            </div>



         </div>

      </div>
   )

}




export default Home;