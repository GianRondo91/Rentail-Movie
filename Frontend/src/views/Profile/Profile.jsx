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



    return (

        <div className='component-profile'>
            <HeaderUser />
            <div className='content-favourites'>

                <h3 className='content-favourites-title'>MIS FAVORITOS</h3>

                <div className='content-favourites-container'>
                    {favouritesMovies.map(fav => <div className='favourite-container'><h5 className='title-movie'>{fav.title}</h5><img className='favourite-img' alt={fav.title} src={FirstPartOfLinkImage + fav.posther_path} /></div>)}
                </div>
            </div>
        </div>
    )
}
<<<<<<< HEAD
const mapStateToProps =state =>{
    return{
      user : state.user,
      token : state.token
    }
  };
export default connect(mapStateToProps)(Profile);
=======
const mapStateToProps = state => {
    return {
      user: state.user,
      token: state.token
    }
  };
  export default connect(mapStateToProps)(Profile);
>>>>>>> a32f610cb1f5095fbe6e1103e47b3323a69f32aa
