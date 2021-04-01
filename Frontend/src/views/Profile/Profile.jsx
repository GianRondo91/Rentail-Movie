import React, { useEffect, useState } from 'react';
import HeaderUser from '../../components/User/Header-user/Header-user';
// import {useHistory} from 'react-router-dom';


const Profile =()=>{
   

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
            <p>{favouritesMovies[0].title}</p>
            
        </div>
    )
}


export default Profile;