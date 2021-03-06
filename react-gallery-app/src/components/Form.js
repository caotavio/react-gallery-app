import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
/*the form needs to redirect the user but as it is being used by the header, it is not wrapped in a Route tag. To get around it 
we import and wrap the export in a withRouter function, which gives Form access to the this.props.history, letting it redirect
the user.*/

class Form extends Component {

    state = {
        value: ''
    };

    //this function tracks and updates the changes made in the input 
    onSearchChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //term and path will creat a new route from the query
        let term = this.query.value;
        let path = `search/${term}`;
        this.props.history.push(path);
        this.props.onSearch(term);
        this.props.handler();
        e.currentTarget.reset();
    }

    render() {
        console.log(this.state.value);
        return (
            <div>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input
                        type="search"
                        name="search"
                        onChange={this.onSearchChange}
                        ref={(input) => this.query = input}
                        placeholder="Search"
                    />
                    
                    <button type="submit">
                        <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </button>

                </form>
            </div>
        );
    }
}

export default withRouter(Form);

/*Forms should always be treated as stateful components, because when the user types something into the text box or clicks a checkbox
for instance, it changes the state of the Component.*/