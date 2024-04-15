import React from 'react';
import ImageBlock from '../imageBlock/ImageBlock';

const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
];

const App = () => {
    return (
        <div>
            <h1>My Image Gallery</h1>
            <ImageBlock images={images} />
        </div>
    );
}

export default App;
