import React from 'react';
import {useState, useEffect} from 'react'
import AddFavourite from '../Add-fav/AddFavourite'



const Movie =({title,poster_path,overview,release_date,vote_average,id,onClick,style,addFavouriteMovie})=>{
  
  //-----ADDING A FAV-------------//


 //---------DELETING A FAV---------//

 /* const removeFavouriteMovie = (movie) => {
  const newFavouriteList = favourites.filter(
    (favourite) => favourite.imdbID !== movie.imdbID
  );

  setFavourites(newFavouriteList);
  
}; */

  let FirstPartOflinkimage ='https://image.tmdb.org/t/p/original';

  //Preparando los dos tamaños

   let movieStyelOne =<div className="movie">
   <img className ="movieStyelOne" src={FirstPartOflinkimage+poster_path} alt={title}  onClick={onClick}/>
   <div className="overlay" onClick={() => addFavouriteMovie(id,title,poster_path)}>
     <AddFavourite/>
   </div>
   </div>

   let movieStyelDos = <div className="movie">
   <img className ="movieStyelDos" src={FirstPartOflinkimage+poster_path} alt={title} onClick={onClick}/>
   <div className="overlay-two" onClick={() => addFavouriteMovie(id,title,poster_path)}>
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
