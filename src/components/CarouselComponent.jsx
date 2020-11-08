import React from 'react';

import { Carousel } from 'antd';

const contentStyle = {
    height: '100vh',
};

const CarouselComponent = () => {
    return (
        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}><img src="https://tripfinder-redq.firebaseapp.com/static/media/1.3bd6d5f8.jpg" alt="banner1"/></h3>
            </div>
            <div>
                <h3 style={contentStyle}><img src="https://tripfinder-redq.firebaseapp.com/static/media/2.7ac6e294.jpg" alt="banner2"/></h3>
            </div>
            <div>
                <h3 style={contentStyle}><img src="https://tripfinder-redq.firebaseapp.com/static/media/3.b9923e48.jpg" alt="banner3"/></h3>
            </div>
        </Carousel>
    );
}

export default CarouselComponent;
