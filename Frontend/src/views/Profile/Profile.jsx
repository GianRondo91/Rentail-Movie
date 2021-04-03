import React, { useEffect, useState } from 'react';
import HeaderUser from '../../components/User/Header-user/Header-user';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Movie from '../../components/Movie/Movie'

const Profile = (props) => {
    let FirstPartOfLinkImage = 'https://image.tmdb.org/t/p/original';


    const [favouritesMovies, setFavouritesMovies] = useState([]);
    const [showRent,setShowRent]=useState([]);
    const [image,setImage]=useState([]);


    console.log(favouritesMovies)
    useEffect(() => {
        allFavouritesMovies()


        //let firstPart='https://image.tmdb.org/t/p/original';


        // Traer todos los alquileres del usuario
        const GetMyRents= async()=>{
            let MyEndPoint = `http://localhost:3002/users/${props.user.userId}/orders`;
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
    }
    


    return (

        <div className='component-profile'>
            <HeaderUser />
            <div className='content-favourites'>

                <h3 className='content-favourites-title'>Historial de mi Alquiler</h3>

                 <div className="historial">
               
                {showRent.map(rent => <Movie style='dos' key={showRent._id} {...showRent}/>)}
                       
                 </div>

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
