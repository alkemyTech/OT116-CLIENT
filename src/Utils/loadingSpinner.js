import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingSpinner = ({type='ThreeDots',color='black',height,width,visible}) => {

    return(
        <Loader
            type= {type}
            color={color}
            height={height}
            width={width}
            visible={visible}
        />
    )
}

export default LoadingSpinner;

