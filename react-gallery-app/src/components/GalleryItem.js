import React from 'react';

//the source of the image is an url from the flickr api docs, formed by the props passed in gallery.
const GalleryItem = (props) => {
    return(
        <li>
            <img src={`https://farm${props.farm}.staticflickr.com/${props.serverId}/${props.id}_${props.secret}_m.jpg`} alt="" />
        </li>
    );
}

export default GalleryItem;