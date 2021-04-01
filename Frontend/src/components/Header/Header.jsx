// import { faWindows } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types/userTypes';

const Header = (props) => {
  
  let history = useHistory();
 

  const logout = () => {
    let confirmar = window.confirm('¿Seguro que quires salir de tu perfil?');
    if (confirmar) {
      setTimeout(() => {
        props.dispatch({type: LOGOUT, payload: {}});
        history.push('/');
      }, 1000);
    };
  };

  return (
    <div className='component-header-user header-movies'>
      <div className="component-header-logo header-logo">
        <a href="/home" className='logo-link'>
          <div className="user-logo-first">Net </div>
          <div className="user-logo-second"> Film</div>
        </a>
        
      </div>
      <div className="component-header-menu header-menu-movies">
        <ul className="component-header-menu-ul header-menu-ul">
        <li className="component-header-menu-li  header-menu-li"><input className="search" type="text" placeholder=" Busqueda..." /></li>
          <li className="component-header-menu-li  header-menu-li"><a href="/series" className='component-header-menu-a' >Series</a></li>
          <li className="component-header-menu-li header-menu-li"><a href="/profile" className='component-header-menu-a header-menu-a'>Favoritos</a></li>
          <li className="component-header-menu-li  header-menu-li header-menu-li-name">{props.user?.name}</li>
          <li className="component-header-menu-li  header-menu-li component-header-menu-li-icon" onClick={() => logout()}> <FontAwesomeIcon icon={faUserTimes} /></li>
        </ul>
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
export default connect(mapStateToProps)(Header);