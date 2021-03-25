import React from 'react';
import './Movie.scss';


const Movie =({title,poster_path,overview,release_date,vote_average,id,onClick,stylo})=>{

    let FirstPartOflinkimage ='https://image.tmdb.org/t/p/original';




    return(

        <div className="movie">
                <img className ="movieCard" src={FirstPartOflinkimage+poster_path} alt={title} onClick={onClick}/>
            

        </div>
    )
}

export default Movie;
