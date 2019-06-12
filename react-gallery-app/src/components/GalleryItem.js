import React from 'react';

const GalleryItem = (props) => {
    return(
        <li>
            <img src={`https://farm${props.farm}.staticflickr.com/${props.serverId}/${props.id}_${props.secret}_m.jpg`} alt="" />
        </li>
    );
}

export default GalleryItem;