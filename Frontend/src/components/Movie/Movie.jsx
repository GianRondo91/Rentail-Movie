import React from 'react';
import AddFavourite from '../Add-fav/AddFavourite'



const Movie =({title,poster_path,overview,release_date,vote_average,id,onClick,style})=>{

  //---------------------//

  let FirstPartOflinkimage ='https://image.tmdb.org/t/p/original';

  //Preparando los dos tamaños

   let movieStyelOne =<div className="movie">
   <img className ="movieStyelOne" src={FirstPartOflinkimage+poster_path} alt={title} onClick={onClick}/>
   <div className="overlay">
     <AddFavourite/>
   </div>
   </div>

   let movieStyelDos = <div className="movie">
   <img className ="movieStyelDos" src={FirstPartOflinkimage+poster_path} alt={title} onClick={onClick}/>
   <div className="overlay-two">
   <AddFavourite/>
   </div>
   </div>

   //renderizando
    
      if (style ==='uno'){

    return(
     
        [movieStyelOne] 
        
    )}
      if(style === 'dos'){
   
    return(
        
        [movieStyelDos]
        
     )}
}

export default Movie;
