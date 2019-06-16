import React from 'react';
import GalleryItem from './GalleryItem';
import NoImages from './NoImages';

const Gallery = (props) => {

    const data = props.data;

    /*this ternary operator works the same as an if-else statent. If there are no photos, it renders the NoImages component,
    if there are photos the data gets iterated and will display the rendered photos.*/
    let images = (data.length > 0)
    //necessary props to be passed to the GalleryItem component so it can form the url for rendering each image
    ? data.map(image => <GalleryItem farm={image.farm} serverId={image.server} id={image.id} secret={image.secret} key={image.id}/>)
    : <NoImages />;

    //same here but with the headings.
    let h2 = data.length > 0 ? <h2>Results</h2> : <h2>Sorry</h2>;

    return(
    <div className="photo-container">
        {h2}
        <ul>
            {
                (props.loading)
                ? <p>Loading...</p>
                : images
            }
        </ul>
    </div>
    );
}

export default Gallery;