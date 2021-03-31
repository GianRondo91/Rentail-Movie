import React from 'react';
import Header from '../../components/Header/Header';
import ReactPlayer from 'react-player';

const Series =()=>{


    return(

        <div className='component-series'>
            <Header/>
            <div className='video-player'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=0U9BGCry6ho"
                controls
                />
            </div>
           
            
        </div>
    )
}

export default Series;