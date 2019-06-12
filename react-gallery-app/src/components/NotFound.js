import React from 'react';
import { NavLink } from 'react-router-dom';

//componenet for when there are no pictures or 404 errors
function NotFound(){
  return(
    <div>
      <h1>404</h1>
      <h3>This is not the page you are looking for...</h3>
      <NavLink to="/">Don't give up! Try again</NavLink>
    </div>
  );
}

export default NotFound;