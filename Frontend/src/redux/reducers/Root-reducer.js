import {combineReducers} from 'redux';
import userReducer from './user-router';



const rootReducer = combineReducers({
    userReducer,
 
});

export default rootReducer;