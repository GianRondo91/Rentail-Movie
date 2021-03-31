import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import HeaderUser from '../../components/User/Header-user/Header-user';
// import {useHistory} from 'react-router-dom';


const Profile =(props)=>{

    const [favouritesMovies, setFavouritesMovies] = useState()

    useEffect(() => {
        allFavouritesMovies()
      });


    const allFavouritesMovies = () => {
        const allFavourites = localStorage.getItem("favoritos")
        console.log(allFavourites)
        setFavouritesMovies(allFavourites)
    }

    // let history = useHistory();

    let credentials=props.user.name;
    console.log(credentials);

    return(

        <div className='component-profile'>
            <HeaderUser/>
            <p>{favouritesMovies}</p>
            
        </div>
    )
}


const mapStateToProps = state => {
    return {
        user : state.userReducer.user,
        token : state.userReducer.token,
       }
}

export default connect(mapStateToProps)(Profile);