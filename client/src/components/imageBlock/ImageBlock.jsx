import React from 'react';
import './imageBlock.scss';

const ImageGallery = ({ imageBlock }) => {
    return (
        <div className="image-blocks">
            <img  src={imageBlock.image} alt=""/>
        </div>
    );
}

export default ImageGallery;