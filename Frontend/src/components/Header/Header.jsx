import React from 'react';
import './Header.scss';

import {useHistory} from 'react-router-dom';

const Header = (props)=>{
    let history=useHistory();
 

    if( props.style == 'style1'){

        return(
              
            <div className="vistaHeader">

                <div className="logo">
                  
                </div>

                <div className="nav">
                <div className="inicio" onClick={()=>history.push('/')}>INICIO</div>
                <div className="directorio" onClick={()=> history.push('/peliculas')}>DIRECTORIO PELICULAS</div>
                <div >
                   <input className="search" type="text" placeholder=" Busqueda..."/>
                </div>
                
                <div className="login" onClick={()=> history.push('./login')}>LOGIN</div>

                </div>
              
                
                
            </div>
        )
    }if(props.style == 'style2'){

     return(

        <div>
           
            <div className="cliente"></div>
            <div className="Logout"></div>
        </div>
    )
}
}
export default Header;