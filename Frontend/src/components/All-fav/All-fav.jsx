import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';

const AllFavourites =()=>{

    const [favouritesMovies, setFavouritesMovies] = useState()

    useEffect(() => {
        allFavouritesMovies()
      });


    const allFavouritesMovies = () => {
        const allFavourites = localStorage.getItem("favoritos")
        console.log(allFavourites)
        setFavouritesMovies(allFavourites)
    }


    return(

        <div className='component-allfavs'>
            
            <p>{favouritesMovies}</p>
            
        </div>
    )
}



export default AllFavourites;