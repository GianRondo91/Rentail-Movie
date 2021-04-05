import React from 'react';

const Footer = (props) => {

    return (

        <div className="vistaFooter">
            <div className="header-footer">
                <div className="header-footer-question">¿Preguntas? Llama al 900 000 000</div>
            </div>
            <div className="links-block">
                <ul className="links-block first-block">
                    <li className="first-block-li">Preguntas frecuentes</li>
                    <li className="first-block-li">Inversores</li>
                    <li className="first-block-li">Formas de ver</li>
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
                <div className="form-logo">
                    <div className="form-logo-first">Net </div>
                    <div className="form-logo-second"> Film</div>
                </div>
                <p className="link-logo-subtitle">ESPAÑA</p>
            </div>
        </div>
    )
};

export default Footer;