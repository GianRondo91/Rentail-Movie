import React from 'react';
import Header from '../../components/Header/Header';
import {useHistory} from 'react-router-dom';




const MovieProfile =()=>{
   
   let link ='https://image.tmdb.org/t/p/original';
     let dataMovie = JSON.parse(localStorage.getItem('movie'));
     console.log(dataMovie)
   let history = useHistory();
   const goto=()=>{
      setTimeout(() => {
        history.push('/home')  
      }, 1000);
     
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
                  <div className="rent"><p className='rentSize'>Alquilar <br/>4.99$</p></div>
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
        </div>
       </>
    )
}

export default MovieProfile;