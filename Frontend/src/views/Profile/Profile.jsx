import React, { useEffect, useState } from 'react';
import HeaderUser from '../../components/User/Header-user/Header-user';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const Profile = (props) => {
    let FirstPartOfLinkImage = 'https://image.tmdb.org/t/p/original';


    const [favouritesMovies, setFavouritesMovies] = useState([])
    console.log(favouritesMovies)
    useEffect(() => {
        allFavouritesMovies()

    }, []);

    let history = useHistory();

    if (!props.token) {
        history.push('/');
        return null;
    };

    const allFavouritesMovies = () => {
        const allFavourites = JSON.parse(localStorage.getItem("favoritos"))


        setFavouritesMovies(allFavourites)
        console.log(favouritesMovies)
    }
    
    const deleteItem = (id) => {
        const newFavouriteList = favouritesMovies.filter(
            (favouriteMovie) => favouriteMovie.id !== id
        );
        console.log("dsd")
        setFavouritesMovies(newFavouriteList);
        localStorage.setItem("favoritos", JSON.stringify(newFavouriteList)) 
    }


    return (

        <div className='component-profile'>
            <HeaderUser />
            <div className='content-favourites'>

                <h3 className='content-favourites-title'>MIS FAVORITOS</h3>

                <div className='content-favourites-container'>
                    {favouritesMovies.map(fav => <div className='favourite-container'><h5 className='title-movie'>{fav.title}</h5><img className='favourite-img' alt={fav.title} src={FirstPartOfLinkImage+fav.posther_path}/><button onClick={() => deleteItem(fav.id)}>x</button></div>)}
                    
                </div>
            </div>
        </div>
    )
}
const mapStateToProps =state =>{
    return{
      user : state.user,
      token : state.token
    }
  };
export default connect(mapStateToProps)(Profile);
