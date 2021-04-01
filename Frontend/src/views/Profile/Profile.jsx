import React, { useEffect, useState } from 'react';
import HeaderUser from '../../components/User/Header-user/Header-user';
// import {useHistory} from 'react-router-dom';


const Profile =()=>{
    let FirstPartOfLinkImage ='https://image.tmdb.org/t/p/original';


    const [favouritesMovies, setFavouritesMovies] = useState([])

    useEffect(() => {
        allFavouritesMovies()

      },[]);


    const allFavouritesMovies = () => {
        const allFavourites = JSON.parse(localStorage.getItem("favoritos"))

        
        setFavouritesMovies(allFavourites)
        console.log(favouritesMovies)
        }   

  

    return(

        <div className='component-profile'>
            <HeaderUser/>
            <div>
            {favouritesMovies.map(fav => <img alt={fav.title} src={FirstPartOfLinkImage+fav.poster_path}/>)}
            </div>
        </div>
    )
}


export default Profile;