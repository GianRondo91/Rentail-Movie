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
                    <li className="first-block-li"></li>
                    <li className="first-block-li"></li>
                    <li className="first-block-li"></li>
                    <li className="first-block-li"></li>
                </ul>
                <ul className="links-block second-block">
                    <li className="second-block-li"></li>
                    <li className="second-block-li"></li>
                    <li className="second-block-li"></li>
                </ul>
                <ul className="links-block third-block">
                    <li className="third-block-li"></li>
                    <li className="third-block-li"></li>
                    <li className="third-block-li"></li>
                </ul>
                <ul className="links-block fourth-block">
                    <li className="fourth-block-li"></li>
                    <li className="fourth-block-li"></li>
                    <li className="fourth-block-li"></li>
                </ul>
            </div>
            <div className="link-languages">

            </div>
            <div className="link-logo">
                <p className="link-logo-title"></p>
                <p className="link-logo-subtitle"></p>
            </div>

            
        </div>
    )
    

}
export default Footer;