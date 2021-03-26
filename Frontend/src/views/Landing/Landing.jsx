import React from 'react';

const Main = () => {
    return (
        <div id='content'>
            <div className="content-left"></div>
            <div className="content-right">
                <div className="form">
                    <div className="form-logo">Nombre <em>Web</em></div>
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
                            <div className="form-button">
                                <p>Iniciar Sesión</p>
                            </div>
                        </div>
                        <div className="form-content-options">
                            <p className='form-content-options-label'>o inicia sesión con</p>
                            <div className="buttons-login">
                                <div className="button-login button-login-google">Google</div>
                                <div className="button-login button-login-facebook">Facebook</div>
                            </div>
                            <div className="form-content-register">
                                <p className='register-question'>¿Todavia no tienes una cuenta? <em className='register'>Crea una ahora</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;