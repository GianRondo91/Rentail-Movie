import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';
import { LOGOUT } from '../../../redux/types';

const HeaderUser = () => {
    const history = useHistory();

    const exit = (props) => {
        props.dispatch({ type: LOGOUT });
        history.push('/');
    }

    return (
        <div className='component-header-user cell-2'>
            <div className="component-header-logo">
                <div className="user-logo-first">Net </div>
                <div className="user-logo-second"> Film</div>
            </div>
            <div className="component-header-menu">
                <ul className="component-header-menu-ul">
                    <li className="component-header-menu-li"><a href="/profile/data" className='component-header-menu-a'>Mis datos</a></li>
                    <li className="component-header-menu-li"><a href="/profile" className='component-header-menu-a'>Favoritos</a></li>
                    <li className="component-header-menu-li">UserName</li>
                    <li className="component-header-menu-li component-header-menu-li-icon" onClick={exit}> <FontAwesomeIcon icon={faUserTimes} /></li>
                    {/* Probar que funciones correctamente el logout*/}
                </ul>
            </div>
        </div>
    );
}
export default HeaderUser;