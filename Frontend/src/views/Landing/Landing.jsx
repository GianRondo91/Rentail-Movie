import React from 'react';
import Login from '../../components/Login/Login';

const Landing = () => {
    return (
        <div id='content'>
            <div className="content-left"></div>
            <div className="content-right">
                <Login/>
            </div>
        </div>
    )
};

export default Landing;