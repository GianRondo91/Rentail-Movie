import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className={styles}>
                    <img  src="assets/1.jpeg" />
                    
                    <p className="legend">Legend 1</p>
                </div>
                
            </Carousel>
        );
    }
};

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));