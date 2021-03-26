import React from 'react';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div className="form">
            <div className="form-logo">
                <div className="form-logo-first">Net </div>
                <div className="form-logo-second"> Film</div>
            </div>
            <div className="form-content">
                <div className="form-content-title">Bienvenido de vuelta</div>
                <div className="form-content-inputs">
                    <p className='form-label'>Email</p>
                    <input className="form-input form-input-email"></input>
                    <div className="form-password">
                        <p className='form-label form-label-password'>Contraseña</p>
                        <p className='form-label-error'>¿Has olvidado tu contraseña?</p>
                    </div>
                    <input className="form-input form-input-password"></input>
                    <FontAwesomeIcon icon={faEye} className='form-input-password-eye' />
                    <div className="form-button">
                        Iniciar Sesión
                            </div>
                </div>
                <div className="form-content-options">
                    <p className='form-content-options-label'>o inicia sesión con</p>
                    <div className="buttons-login">
                        <div className="button-login button-login-google">
                            <FontAwesomeIcon icon={faGoogle} className='button-login-icon' />
                            <em className='button-login-letter'>Google</em>
                        </div>
                        <div className="button-login button-login-facebook">
                            <FontAwesomeIcon icon={faFacebookF} className='button-login-icon' />
                            <em className='button-login-letter'>Facebook</em>
                        </div>
                    </div>
                    <div className="form-content-register">
                        <p className='register-question'>¿Todavia no tienes una cuenta? </p>
                        <p className='register'><a href="/register" className='register-link'> Crea una ahora</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;