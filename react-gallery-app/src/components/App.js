import React from 'react';
import Header from './Header';
//import your config file

const App = (props) => {
    return (
        <div>
            <Header
            title="Name of the current loaded search input"
            /> {/* dinamically serve the input name when loaded... remember 
            that evertything that is not text should me put btw {} because it is a JSX expression*/}
        </div>
    );
}

export default App;