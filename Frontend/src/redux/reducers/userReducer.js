import {LOGIN, LOGOUT,UPDATE_USER} from '../types/userTypes';

const initialState = {
    user: {},
    token: ""
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN :
            return {
                ...state,
                user : action.payload.user,
                token : action.payload.token
            }

        case LOGOUT :
            return initialState

        case UPDATE_USER :
            return {
                ...state,
                user : action.payload
            }
        default : 
            return state
    }
};

export default userReducer;