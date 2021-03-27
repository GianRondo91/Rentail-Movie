import React from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';


const Profile =(props)=>{

    let history = useHistory();

    let credentials=props.user.name;
    console.log(credentials);

    return(

        <div>
            Soy Profile del --Usuario



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