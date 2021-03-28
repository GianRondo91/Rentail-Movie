import React from 'react';
import './Footer.scss';

import {useHistory} from 'react-router-dom';

const Footer = (props)=>{
    let history=useHistory();

    return(
              
        <div className="vistaFooter">
            <div className="header-footer">
                <div>¿Preguntas? Llama al 900 000 000</div>
            </div>
            <div className="links-blok">
                <ul className="links-block first-block">
                    <li className="first-block-li">Preguntas frecuentes</li>
                    <li className="first-block-li">Inversores</li>
                    <li className="first-block-li">Formas de ver</li>
                    <li className="first-block-li">Onformación corporativa</li>
                </ul>
                <ul className="links-block second-block">
                    <li className="second-block-li">Centro de ayuda</li>
                    <li className="second-block-li">Términos de uso</li>
                    <li className="second-block-li">Contáctanos</li>
                </ul>
                <ul className="links-block third-block">
                    <li className="third-block-li">Cuenta</li>
                    <li className="third-block-li">Canjear tarjetas regalo</li>
                    <li className="third-block-li">Privacidad</li>
                </ul>
                <ul className="links-block fourth-block">
                    <li className="fourth-block-li">Zona de prensa</li>
                    <li className="fourth-block-li">Comprar tarjetas regalo</li>
                    <li className="fourth-block-li">Avisos legales</li>
                </ul>
            </div>
            <div className="link-languages">
                Español
            </div>
            <div className="link-logo">
                <p className="link-logo-title">NetFlim</p>
                <p className="link-logo-subtitle">ESPAÑA</p>
            </div>

            
        </div>
    )
    

}
export default Footer;