import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = (props) => {

    const data = props.data;
    let images = data.map(image => <GalleryItem farm={image.farm} serverId={image.server} id={image.id} secret={image.secret} key={image.id}/>);

    return(
    <div className="photo-container">
        <h2>Results</h2>
        <ul className="photo-container">
            {images}
        </ul>
    </div>
    );
}

export default Gallery;