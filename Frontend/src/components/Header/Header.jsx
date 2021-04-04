// import { faWindows } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types/userTypes';


const Header = (props) => {

  let history = useHistory();
  const [query, setSearch] = useState("");


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
    console.log("soy el search del handler", query);
  }

  //Llama al callback onSearch
  const search = async (evt) => {
    if (evt.key === 'Enter') {
      props.onSearch(query.query);
      console.log(query.query);
    }
  }

  const genreSearch = async (evt) => {
    props.onGenre(evt.target.value);
  }

  const getUserImage = () => {
    if (props.user.image) {
      return <li className="component-header-menu-li component-header-menu-li-img"><a href="/profile/data" className='header-menu-a-name'><img src={props.user.image} alt="" className='img-user' /></a></li>;
    }
    return <li className="component-header-menu-li  header-menu-li header-menu-li-name"><a href="/profile/data" className='header-menu-a-name'>{props.user?.name}</a></li>;
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
          <li className="component-header-menu-li  header-menu-li"><input className="search" name="query" type="text" onKeyUp={search} onChange={handleStateSearch} /></li>
          <li className="component-header-menu-li header-menu-li header-menu-li-select">
            <select name="genres" onChange={genreSearch} className='header-menu-li-select'>
              <option value="0">Género</option>
              <option value="28">Acción</option>
              <option value="12">Aventura</option>
              <option value="16">Animacion</option>
              <option value="35">Comedia</option>
              <option value="80">Crimen</option>
              <option value="99">Documental</option>
              <option value="18">Drama</option>
              <option value="10751">Familia</option>
              <option value="14">Fantasía</option>
              <option value="36">Historia</option>
              <option value="27">Terror</option>
              <option value="10402">Musica</option>
              <option value="9648">Misterio</option>
              <option value="10749">Romance</option>
              <option value="878">Ficción</option>
              <option value="53">Triller</option>
              <option value="10752">Bélica</option>
              <option value="37">Western</option>
            </select>
          </li>
          <li className="component-header-menu-li  header-menu-li"><a href="/series" className='component-header-menu-a' >Series</a></li>
          <li className="component-header-menu-li header-menu-li"><a href="/profile" className='component-header-menu-a header-menu-a'>Favoritos</a></li>
          {getUserImage()}
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