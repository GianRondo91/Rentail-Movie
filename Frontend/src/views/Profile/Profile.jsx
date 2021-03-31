import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import HeaderUser from '../../components/User/Header-user/Header-user';
// import {useHistory} from 'react-router-dom';


const Profile =(props)=>{



   
    // let history = useHistory();

    // let credentials=props.user.name;
    // console.log(credentials);

    return(

        <div className='component-profile'>
            <HeaderUser/>
           
            
        </div>
    )
}


// const mapStateToProps = state => {
//     return {
//         user : state.userReducer.user,
//         token : state.userReducer.token,
//        }
// }

// export default connect(mapStateToProps)(Profile);
export default Profile;