import React, { Component } from 'react';
import axios from 'axios'; //axios automatically returns the response in JSON
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import apikey from './config';

import Home from './components/Home';
import Header from './components/Header';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

class App extends Component {

    constructor(props) {
        super(props);

        // binds the performSearch method to the this keyword, so this,setState inside the response in axios will work
        this.performSearch = this.performSearch.bind(this);

        this.state = {
            programmer: [],
            matrix: [],
            dogs: [],
            images: []
        };
    }

    componentDidMount() {
        this.performSearch('programmer');
        this.performSearch('matrix');
        this.performSearch('dogs');
    }

    performSearch(query) {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                switch(query) {
                    case "programmer":
                        this.setState({
                            programmer: response.data.photos.photo
                        })
                        break;
                    case "matrix":
                        this.setState({
                            matrix: response.data.photos.photo
                        })
                        break;
                    case "dogs":
                        this.setState({
                            dogs: response.data.photos.photo
                        })
                        break;
                    default:
                        this.setState({
                            images: response.data.photos.photo
                        })
                        break;
                }
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        console.log(this.state.images);
        return (
            <BrowserRouter>
                <div className="container">
                    <Header onSearch={this.performSearch} /> {/* dinamically serve the input name when loaded as a title property in Header
                    that evertything that is not text should me put btw {} because it is a JSX expression*/}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/search" render={(props)=><Gallery {...props} data={this.state.images} />}/>
                        <Route path="/programmer" render={(props)=><Gallery {...props} data={this.state.programmer} />}/>
                        <Route path="/matrix" render={(props)=><Gallery {...props} data={this.state.matrix} />}/>
                        <Route path="/dogs" render={(props)=><Gallery {...props} data={this.state.dogs} />}/>
                        <Route component={NotFound}/>
                    </Switch>
                    {/* Switch will only render the first route that matches the url... and if it don`t find any route, it will fall
                    back to the not found comp. */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;