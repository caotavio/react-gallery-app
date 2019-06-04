import React from 'react';

const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                {props.initialNavLinks.map( navLink =>
                    <li><a href='#'>{navLink.name}</a></li>
                    //do the same with the hrefs... make them dynamic
                )}
            </ul>
        </nav>
    );
}

export default Nav; 