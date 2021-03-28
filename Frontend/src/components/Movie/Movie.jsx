import React from 'react';



const Movie =({title,poster_path,overview,release_date,vote_average,id,onClick,style})=>{

    let FirstPartOflinkimage ='https://image.tmdb.org/t/p/original';

   
   let movieStyelOne =<div className="movie">
   <img className ="movieCardUno" src={FirstPartOflinkimage+poster_path} alt={title} onClick={onClick}/>
   </div>

   let movieStyelDos = <div className="movie">
   <img className ="movieCardDos" src={FirstPartOflinkimage+poster_path} alt={title} onClick={onClick}/>
   </div>
    
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
