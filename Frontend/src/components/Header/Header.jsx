// import { faWindows } from '@fortawesome/free-brands-svg-icons';
import React, {useState }from 'react';
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
        props.dispatch({type: LOGOUT, payload: {}});
        history.push('/');
      }, 1000);
    };
  };
  
  //Handler
  const handleStateSearch = (e)=>{
    setSearch({...query, [e.target.name]: e.target.value})
    console.log("soy el search del handler",query)
  }
  // https://api.themoviedb.org/3/search/movie?api_key=e34f732b92a2e7dbe69709d0433150c3&language=es&query=${query}
  //Buscar Pelis
  const search = async()=>{
    let baseUrl=`http://api.themoviedb.org/3/search/movie?`;
    let key = "ef2edc9da61e81787a8079a7df721936";
    let resultSearch = await axios.get(`${baseUrl}api_key=${key}&language=es&query=${query.query}`);
    console.log("soy lop que viene de api",resultSearch);
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
        <li className="component-header-menu-li  header-menu-li"><input className="search" name="query" type="text" onChange={handleStateSearch}/>
          <buton onClick={search}>buscar</buton></li>
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