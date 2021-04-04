import React from 'react';
import { useState } from 'react'
import AddFavourite from '../Add-fav/AddFavourite'


const Movie = ({ title, poster_path, id, onClick, style, addFavouriteMovie }) => {

  //-----ADDING A FAV-------------//
  const [heartStyle, setHeartStyle] = useState('one');

  //---------DELETING A FAV---------//


  let FirstPartOflinkimage = 'https://image.tmdb.org/t/p/original';

  //Preparando los dos tamaños
  let movieStyelOne =
    <div className="movie">
      <img className="movieStyelOne" src={FirstPartOflinkimage + poster_path} alt={title} onClick={onClick} />
      <div className="overlay" onClick={() => { setHeartStyle('two'); addFavouriteMovie(id, title, poster_path) }}>
        <AddFavourite heartStyle={heartStyle} />
      </div>
    </div>

  let movieStyelDos =
    <div className="movie">
      <img className="movieStyelDos" src={FirstPartOflinkimage + poster_path} alt={title} onClick={onClick} />
      <div className="overlay-two" onClick={() => { setHeartStyle('two'); addFavouriteMovie(id, title, poster_path) }}>
        <AddFavourite heartStyle={heartStyle} />
      </div>
    </div>

  //renderizando

  if (style === "card-style") {
    return (
      [movieStyelOne]
    )
  };

  if (style === "other-card-style") {
    return (
      [movieStyelDos]
    )
  };
};

export default Movie;
