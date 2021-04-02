import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT } from '../../../redux/types/userTypes';

const HeaderUser = (props) => {

    const history = useHistory();

    const logout = () => {
        let confirmar = window.confirm('¿Seguro que quires salir de tu perfil?');
        if (confirmar) {
            setTimeout(() => {
                props.dispatch({ type: LOGOUT, payload: {} });
                history.push('/');
            }, 1000);
        };
    };

    const getUserImage = () => {
        if(props.user.image){
            return  <li className="component-header-menu-li component-header-menu-li-img"><img src={props.user.image} alt="" className='img-user'/></li>;
        }
        return  <li className="component-header-menu-li component-header-menu-li-name"> {props.user?.name}</li>;
    };

    return (
        <div className='component-header-user cell-2'>
            <div className="component-header-logo">
                <a href="/home" className='logo-link'>
                    <div className="user-logo-first">Net </div>
                    <div className="user-logo-second"> Film</div>
                </a>
            </div>
            <div className="component-header-menu">
                <ul className="component-header-menu-ul">
                    <li className="component-header-menu-li"><a href="/profile/data" className='component-header-menu-a'>Mis datos</a></li>
                    <li className="component-header-menu-li"><a href="/profile" className='component-header-menu-a'>Favoritos</a></li>
                    {/*  */}
                    {getUserImage()}
                    <li className="component-header-menu-li component-header-menu-li-icon" onClick={() => logout()}> <FontAwesomeIcon icon={faUserTimes} /></li>
                    {/* Probar que funciones correctamente el logout*/}
                </ul>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token
    }
};
export default connect(mapStateToProps)(HeaderUser);
