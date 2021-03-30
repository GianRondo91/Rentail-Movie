import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


const MovieProfile =()=>{

   let user =JSON.parse(localStorage.getItem('user'));
   console.log(user._id);

   
   
   let link ='https://image.tmdb.org/t/p/original';
     let dataMovie = JSON.parse(localStorage.getItem('movie'));
     console.log(dataMovie)
   let history = useHistory();
   const goto=()=>{
      setTimeout(() => {
        history.push('/home')  
      }, 1000);
     
   }

   //Envio de datos de la pelicula a almacenar en la base de datos//
   /*const AlmacenarMovie =async()=>{

      let EndpointAlmacenar ='http://localhost:3002/movies/';

      // comprobar si el id existe //

      let responseDataMovie = await axios.get(EndpointAlmacenar);
      let movieDB = responseDataMovie.data;
      // datos de la pelicula eligida//
      console.log(dataMovie);
      //datos de mis peliculas en mi base de datos//
      console.log(movieDB)
      
      console.log(EndpointAlmacenar+dataMovie.id)
      let movie;
      for(movie of movieDB){
         console.log(movie.id)
         console.log(dataMovie.id)
         if( movie.id === dataMovie._id){
            return console.log('la pelicula ya existe')
         }else{
            
            let peliGuardada =await axios.post(EndpointAlmacenar,dataMovie)
            let PeliculasEnMiDB = await axios.get(EndpointAlmacenar);
            console.log(peliGuardada)
            console.log(PeliculasEnMiDB)
         }
      }
      
   }*/

   //Alquilar un pelicula//
   

   const Alquilar =async()=>{

      let endPointRent = 'http://localhost:3002/orders';

      //Datos de lel alquiler , Id del usuario , id de la pelicula y el  objeto completo de la pelicula//

      let rentData={
           userId : user._id,
           filmId :dataMovie.id,
           film :dataMovie
           } 
     
      console.log('Los datos del alquiler',rentData)

      let response= await axios.post(endPointRent,rentData);
      console.log(response);
      localStorage.setItem('rentInfo',JSON.stringify(response))

   }

    return(
      <>
         <Header/>
        <div className='movieProfileContainer'>
            <div className="MoviePanel">
               <div className="dataMovie">

                  <div className="movieTtile"><h1 className='titleSize'>{dataMovie.title}</h1></div>
                  <div className="movieRateAndMore"><h4 className='rateSize'>Rate : {dataMovie.vote_average}  votos : {dataMovie.vote_count}  Release date : {dataMovie.release_date}</h4></div>
                  <div className="panelRentMovie">
                  <div className="rent"><p className='rentSize' onClick={()=>Alquilar()}>Alquilar <br/>4.99€</p></div>
                  <div className="MasRecomendaciones"><p className='rentSize' onClick={()=>goto()}> Ver Mas Recomendaciónes </p></div>
                  
                  </div>
                  <div className="overview">
                     <h3 className='sinopsis'>Sinopsis:</h3>
                     <p className='overviewSize'>{dataMovie.overview}</p></div>
               </div>
            <div className="MoviePoster">
               <img  className='poster' src={link+dataMovie.poster_path} alt={dataMovie.tite}/>
               </div>
            </div>
            <div className="showMovie">

            </div>
        </div>
       </>
    )
}

export default MovieProfile;