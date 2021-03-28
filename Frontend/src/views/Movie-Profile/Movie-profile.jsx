import React from 'react';
import Header from '../../components/Header/Header';




const MovieProfile =()=>{

   let movieData = JSON.parse(localStorage.getItem('movieData'));
   


    return(
      <>
         <Header/>
        <div className='movieProfileContainer'>
            <div className="MoviePanel">
               <div className="dataMovie">

                  <div className="movieTtile"><h1 className='titleSize'>Blade Runner 2049</h1></div>
                  <div className="movieRateAndMore"></div>
                  <div className="comprarMovie"></div>
               </div>
            <div className="MoviePoster"></div>
            </div>
        </div>
       </>
    )
}

export default MovieProfile;