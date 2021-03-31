// import { faWindows } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

  let history = useHistory();
  let user = JSON.parse(localStorage.getItem('user'));
  //let user =props.user;
  //console.log(credentials)
  // console.log(user.name);
  // console.log(user.phone);

  const logout = () => {
    let confirmar = window.confirm('¿Seguro que quires salir de tu perfil?');
    if (confirmar) {
      setTimeout(() => {
        localStorage.removeItem('user');
        history.push('/');
      }, 1000);
    }
  }

  return (
    <div className='component-header-user header-movies'>
            <div className="component-header-logo">
                <div className="user-logo-first">Net </div>
                <div className="user-logo-second"> Film</div>
            </div>
            <div className="component-header-menu">
                <ul className="component-header-menu-ul">
                    <li className="component-header-menu-li"><a href="" className='component-header-menu-a' onClick={() => history.push('/')}>Mi Colección</a></li>
                    <li className="component-header-menu-li"><a href="" className='component-header-menu-a' onClick={() => history.push('/peliculas')}>Peliculas</a></li>
                    <li className="component-header-menu-li" >Bienvenido {user.name}</li>
                    <li className="component-header-menu-li"><input className="search" type="text" placeholder=" Busqueda..." /></li>
                    <li className="component-header-menu-li component-header-menu-li-icon" onClick={() => logout()}> <FontAwesomeIcon icon={faUserTimes} /></li>
                    {/* Probar que funciones correctamente el logout*/}
                </ul>
            </div>
        </div>
    // <div className="vistaHeader">
    //   <div className="form-logo">
    //     <div className="form-logo-first">Net </div>
    //     <div className="form-logo-second"> Film</div>
    //   </div>
    //   <div className="nav">
    //     <div className="inicio" onClick={() => history.push('/')}>Mi Colección</div>
    //     <div className="Peliculas" onClick={() => history.push('/peliculas')}>Peliculas</div>
    //     <div className="Series" onClick={() => history.push('/series')}> Series</div>
    //     <input className="search" type="text" placeholder=" Busqueda..." />
    //     <div className="userName" onClick={() => logout()}>Bienvenido {user.name}</div>
    //   </div>
    // </div>

  )

}
export default Header;