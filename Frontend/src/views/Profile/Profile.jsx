import React, { useEffect, useState } from 'react';
import HeaderUser from '../../components/User/Header-user/Header-user';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Movie from '../../components/Movie/Movie'
import Footer from '../../components/Footer/Footer';

const Profile = (props) => {
    let FirstPartOfLinkImage = 'https://image.tmdb.org/t/p/original';

    const [favouritesMovies, setFavouritesMovies] = useState([]);
    const [showRent, setShowRent] = useState([]);
    const [image, setImage] = useState([]);


    console.log(favouritesMovies)
    useEffect(() => {
        allFavouritesMovies();
        //let firstPart='https://image.tmdb.org/t/p/original';
        // Traer todos los alquileres del usuario
        const GetMyRents = async () => {
            let MyEndPoint = `http://localhost:3002/users/${props.user._id}/orders`;
            let rentData = await axios.get(MyEndPoint);
            console.log(rentData)
            setShowRent(rentData.data);
        }
        GetMyRents();
    }, []);

    console.log(showRent)

    let history = useHistory();

    if (!props.token) {
        history.push('/');
        return null;
    };

    const allFavouritesMovies = () => {
        const allFavourites = JSON.parse(localStorage.getItem("favoritos"))
        setFavouritesMovies(allFavourites)
        console.log(favouritesMovies)
    };

    const deleteItem = (id) => {
        const newFavouriteList = favouritesMovies.filter(
            (favouriteMovie) => favouriteMovie.id !== id
        );
        console.log("dsd")
        setFavouritesMovies(newFavouriteList);
        localStorage.setItem("favoritos", JSON.stringify(newFavouriteList))
    };

    return (
        <div className='component-profile'>
            <HeaderUser />
            <div className='content-favourites'>
                <h3 className='content-favourites-title'>MIS FAVORITOS</h3>
                <div className='content-favourites-container'>
                    {favouritesMovies.map(fav =>
                        <div className='favourite-container'>
                            <img className='favourite-img' alt={fav.title} src={FirstPartOfLinkImage + fav.posther_path} />
                            <p onClick={() => deleteItem(fav.id)} className="button-delete"> <FontAwesomeIcon icon={faTrashAlt} /></p>
                            <h5 className='title-movie'>{fav.title}</h5>
                        </div>)}
                </div>
                <h3 className='content-favourites-title'>Historial de mi Alquiler</h3>
                <div className="historial">
                   {/* {showRent.map(rent => <Movie style="other-card-style" key={rent._id} {...rent.movieData} />)}*/}
                    {showRent.map(showRent => <Movie style="other-card-style" key={showRent} {...showRent} />)}
                </div>
            </div>
            <Footer />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token
    }
};
export default connect(mapStateToProps)(Profile);
