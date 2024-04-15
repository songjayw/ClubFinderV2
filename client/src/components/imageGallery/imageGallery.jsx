import React from 'react';
import ImageBlock from '../imageBlock/ImageBlock';
import "./imageGallery.scss"

const imageGallery = [

    {
        image:'https://images.pexels.com/photos/1855418/pexels-photo-1855418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        image:'https://images.pexels.com/photos/1076081/pexels-photo-1076081.jpeg?auto=compress&cs=tinysrgb&w=600'
    },

    {
        image:'https://images.pexels.com/photos/2301172/pexels-photo-2301172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        image:'https://images.pexels.com/photos/2421764/pexels-photo-2421764.jpeg',
    },
    {
        image:'https://images.pexels.com/photos/957039/hut-alpine-mountains-bavaria-957039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        image:'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    
    
    
    
    // Add more image URLs as needed
];

const ImageGallery = () => {
    return (
        <div className="image-gallery-container">
            {imageGallery.map((imageBlock, index) => (
                <div className="image-gallery" key={index}>
                    <ImageBlock imageBlock={imageBlock} />
                </div>
            ))}
        </div>
    );
}

export default ImageGallery;
