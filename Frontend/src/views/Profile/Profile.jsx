import React, { useEffect, useState } from 'react';
import HeaderUser from '../../components/User/Header-user/Header-user';
// import {useHistory} from 'react-router-dom';


const Profile =()=>{
    
    let key = "ef2edc9da61e81787a8079a7df721936";
    let base_url = `http://api.themoviedb.org/3/movie/`;
    let language = "language=es-ES"

    const [favouritesMoviesId, setFavouritesMoviesId] = useState([])
    const [allFavMovies, setAllFavMovies] = useState([])

    useEffect(() => {
        allFavouritesMovies()

      },[]);


    const allFavouritesMovies = () => {
        const allFavourites = localStorage.getItem("favoritos")
        
        setFavouritesMoviesId(allFavourites)
        console.log(favouritesMoviesId)
        favouritesMoviesId.forEach(movie_id => {
       
        console.log(movie_id, 'id')

            fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=ef2edc9da61e81787a8079a7df721936&language=en`)
            .then(res => (res.json()))
            .then(data => {

            setAllFavMovies([data])
            console.log(data)
         })
        })}   

  

    return(

        <div className='component-profile'>
            <HeaderUser/>
            <p>{favouritesMoviesId}</p>
            
        </div>
    )
}


export default Profile;