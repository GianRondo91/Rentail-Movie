import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
<<<<<<< HEAD
//import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
=======
>>>>>>> 06cf87565ca49fea5af1ff5a92eec7130eb52add


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