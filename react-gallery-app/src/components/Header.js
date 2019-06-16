import React from 'react';
import Form from './Form';
import Nav from './Nav';

const navLinkNames = [
    {
        name: "Programmer",
        id: 1
    },
    {
        name: "Matrix",
        id: 2
    },
    {
        name: "Dogs",
        id: 3
    }
];

const Header = (props) => {
    return(
        <div>
            <Form handler={props.handler} onSearch={props.onSearch} />
            <Nav initialNavLinks={navLinkNames}/>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Header;
