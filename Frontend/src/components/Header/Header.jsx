// import { faWindows } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types/userTypes';
import axios from "axios";

const Header = (props) => {

  let history = useHistory();
  const [query, setSearch] = useState("");
  console.log("soy el query", query.query);

  const logout = () => {
    let confirmar = window.confirm('¿Seguro que quires salir de tu perfil?');
    if (confirmar) {
      setTimeout(() => {
        props.dispatch({ type: LOGOUT, payload: {} });
        history.push('/');
      }, 1000);
    };
  };

  //Handler
  const handleStateSearch = (e) => {
    setSearch({ ...query, [e.target.name]: e.target.value })
    console.log("soy el search del handler", query)
  }

  //Llama al callback onSearch
  const search = async (evt) => {
    if (evt.key === 'Enter') {
      props.onSearch(query.query);
    }
  }

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
          <li className="component-header-menu-li  header-menu-li"><input className="search" name="query" type="text" onKeyUp={search} onChange={handleStateSearch} /></li>
          <li className="component-header-menu-li  header-menu-li"><a href="/series" className='component-header-menu-a' >Series</a></li>
          <li className="component-header-menu-li header-menu-li"><a href="/profile" className='component-header-menu-a header-menu-a'>Favoritos</a></li>
          <li className="component-header-menu-li  header-menu-li header-menu-li-name"><a href="/profile/data" className='header-menu-a-name'>{props.user?.name}</a></li>
          <li className="component-header-menu-li  header-menu-li component-header-menu-li-icon" onClick={() => logout()}> <FontAwesomeIcon icon={faUserTimes} /></li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token
  }
};
export default connect(mapStateToProps)(Header);