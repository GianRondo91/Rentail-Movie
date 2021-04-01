import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { connect } from 'react-redux';

const MovieProfile = (props) => {
   const [rentFilm,setRentFilm] = useState(true)
   // let user = JSON.parse(localStorage.getItem('user'));
   // console.log(user._id);

   let link = 'https://image.tmdb.org/t/p/original';
   let dataMovie = JSON.parse(localStorage.getItem('movie'));
   console.log(dataMovie.id)

   const [trailer, setTrailer] = useState("")


   // Getting trailer link

   const getTrailer = async () => {
      let apiKey = "ef2edc9da61e81787a8079a7df721936";
      let base_url = `http://api.themoviedb.org/3/movie/`;
      let movieId = dataMovie.id;
      let keyLink = await axios.get(`${base_url}${movieId}/videos?api_key=${apiKey}`);
      console.log("soy el key link", keyLink);
      let trailerKey = keyLink.data.results[0]?.key;
      return setTrailer(`https://www.youtube.com/watch?v=${trailerKey}`)
   }

   let history = useHistory();
   const goto = () => {
      setTimeout(() => {
         history.push('/home')
      }, 1000);

   }

   // //USEEFFECTS

   useEffect(() => {
      getTrailer()
   }, []);




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


   const Alquilar = async () => {

      let endPointRent = 'http://localhost:3002/orders';

      //Datos de lel alquiler , Id del usuario , id de la pelicula y el  objeto completo de la pelicula//

      let rentData = {
         userId: props.user.id,
         filmId: dataMovie.id,
         film: dataMovie
      }

      
      let response = await axios.post(endPointRent, rentData);
      console.log("Soy la respuesta del aqluiler", response);
      localStorage.setItem('rentInfo', JSON.stringify(response))
      setRentFilm(false)
   }
      
   // let DatosRent = JSON.parse(localStorage.getItem('rentInfo'));
   
      
     
   
   let NotRented=<div className="rent" onClick={() => Alquilar()}>Alquilar <br />4.99€</div>
   let Rented=<div className="rent" >Estas Viendo <br /></div>
   

   if(rentFilm==false){
   return (


      <div className='movie-profile-container'>
         <Header />
         <div className="movie-panel">
            <div className="data-movie">

               <div className="movie-title">{dataMovie.title}</div>
               <div className="movie-rate">Rate : {dataMovie.vote_average}  votos : {dataMovie.vote_count}  Release date : {dataMovie.release_date}</div>
               <div className="movie-rent">
                  {Rented}
                  
                  <div className="mas-recomendaciones" onClick={() => goto()}> Ver Mas Recomendaciónes </div>

               </div>
               <div className="overview">
                  <h3 className='sinopsis'>Sinopsis:</h3>
                  <p className='overviewSize'>{dataMovie.overview}</p></div>
            </div>
            <div className="movie-poster">
               
               <img src={link + dataMovie.poster_path} alt={dataMovie.tite}/>
               
            </div>
         </div>
         <div className="show-video-movie">
            <div className="multimedia">
               <ReactPlayer

                  url={trailer}
                  controls
               />
            </div>

         </div>
      </div>

   )}else{
      return(
      
         <div className='movie-profile-container'>
         <Header />
         <div className="movie-panel">
            <div className="data-movie">

               <div className="movie-title">{dataMovie.title}</div>
               <div className="movie-rate">Rate : {dataMovie.vote_average}  votos : {dataMovie.vote_count}  Release date : {dataMovie.release_date}</div>
               <div className="movie-rent">
                  {NotRented}
                  
                  <div className="mas-recomendaciones" onClick={() => goto()}> Ver Mas Recomendaciónes </div>

               </div>
               <div className="overview">
                  <h3 className='sinopsis'>Sinopsis:</h3>
                  <p className='overviewSize'>{dataMovie.overview}</p></div>
            </div>
            <div className="movie-poster">
               
               <img src={link + dataMovie.poster_path} alt={dataMovie.tite}/>
               
            </div>
         </div>
         <div className="show-video-movie">
            <div className="multimedia">
               <ReactPlayer

                  url={trailer}
                  controls
               />
            </div>

         </div>
      </div>
      )
   }
}

const mapStateToProps =state =>{
   return{
     user : state.user,
     token : state.token
   }
 };
export default connect(mapStateToProps)(MovieProfile);
