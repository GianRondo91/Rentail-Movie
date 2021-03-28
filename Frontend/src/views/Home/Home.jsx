import React, { useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie';
import video from '../../video/videoplayback.mp4';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 



const Home = (props) => {

   const [latest, setLatest] = useState([]);
   const [destacado,setDestacado]=useState([]);
   const [populares, setPopulares] = useState([]);
   const [recomendaciones, setRecomendaciones] = useState([]);

   useEffect(() => {

      //Ultimas Peliculas

      let Latest = "https://api.themoviedb.org/3/movie/now_playing?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1";
      let destacado ="https://api.themoviedb.org/3/movie/now_playing?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=2";

      let populares = 'https://api.themoviedb.org/3/movie/popular?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1';

      let recomendaciones = 'https://api.themoviedb.org/3/movie/top_rated?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1'

     //Populares

      fetch(populares)
         .then(res => (res.json()))
         .then(data => {
          
            setLatest(data.results)
         })
     //Latest page1 and page2

      fetch(Latest)
         .then(res => (res.json()))
         .then(data => {
        
            setPopulares(data.results)
         })

         
      fetch(destacado)
      .then(res => (res.json()))
      .then(data => {
        
         setDestacado(data.results.slice(0,5))
      })
      

      //Recomendaciones



      fetch(recomendaciones)
         .then(res => (res.json()))
         .then(data => {
            console.log(data.results.slice(0,5))
          
            setRecomendaciones(data.results);
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

   
   return (


    <div>

      < Header/>
         <div className="contenedorHome">
         
         <video className='myVideo' autoPlay   loop id="myVideo" src={video}></video>
         <div class="content">
              
             <h1 className='h1'></h1> 
            <p>AQUA-MAN</p>
            <button id="myBtn" onClick={()=>GotoMovies()}> Mas información </button>
            </div>
            
            <div className="separador"></div>
            <h2 className='tituloDelGenero'>Ultimas Peliculas Añadidas</h2>
            <div className="ultimas">
            <Carousel>
               {latest.map(latest => <Movie key={latest.id} {...latest} onClick={() => takeMeTo(latest)} />)} 
            </Carousel>
            </div>

            
            <div className="separador"></div>
            <h2 className='tituloDelGenero'>Populares</h2>
            <div className="populares">
            <Carousel>
              {populares.map(populares => <Movie key={populares.id} {...populares} onClick={() => takeMeTo(populares)} />)}
            </Carousel>
            </div>

            <div className="destacado">
            {destacado.map(destacado => <Movie key={destacado.id} {...destacado} onClick={() => takeMeTo(destacado)} />)}
            </div>

            <div className="separador"></div>
            <h2 className='tituloDelGenero'>Recomendaciones</h2>
            <div className="Destacado">
             <Carousel>
               {recomendaciones.map(recomendaciones => <Movie key={recomendaciones.id} {...recomendaciones} onClick={() => takeMeTo(recomendaciones)} />)}
            </Carousel>
            </div>



         </div>

      </div>
   )

}




export default Home;