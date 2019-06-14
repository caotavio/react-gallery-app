import React from 'react';
import sad from '../sad.jpg';

//component for when no pictures are found
function NoImages(){
  return(
    <div className="not-found">
      <h1>We were not able to find images from your search...</h1>
      <img src={sad} style={{width: '20%'}} alt="sad" />
      <h3>Maybe try another one?</h3>
    </div>
  );
}

export default NoImages;