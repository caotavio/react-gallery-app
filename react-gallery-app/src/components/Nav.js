import React from 'react';
import { NavLink } from 'react-router-dom';

//inside the ul there is an iteration of the NavLinkNames array which will display as many nav links as the user add to the array.
const Nav = (props) => {
    return (
        <div>
            <nav className="main-nav">
                <ul>
                    {props.initialNavLinks.map( navLink =>
                        <li key={navLink.id.toString()}><NavLink to={`/${navLink.name.toLowerCase()}`}>{navLink.name}</NavLink></li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Nav; 