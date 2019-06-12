import React from 'react';
import { NavLink } from 'react-router-dom';

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