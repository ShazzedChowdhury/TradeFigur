import React from 'react';
import Lottie from 'lottie-react';

const AnimatedImage = ({data, style}) => {
    return (
        <Lottie animationData={data} className={style} loop={true} />
    );
};

export default AnimatedImage;