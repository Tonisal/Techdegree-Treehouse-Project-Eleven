import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import Error from './components/Error';
import Home from './components/Home';

class App extends Component {

    state = {
        categories: [
            {
                name: 'sunset',
                path: '/sunset',
                id: 1
            },
            {
                name: 'cars',
                path: '/cars',
                id: 2
            },
            {
                name: 'science',
                path: '/science',
                id: 3
            }
        ],

        photos: []
    };

    componentDidMount() {
        this.requestImagesFromFlickr('random');
    }

    requestImagesFromFlickr(thema) {
        const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=36517e4fe86b9c5794dca50cb59433f6&tags=' + thema + '&per_page=20&format=json&nojsoncallback=1';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({photos: data.photos.photo})
            })
    }


    render() {
        const buttons = this.state.categories.map((category) =>
            <Route path={category.path} render={() => <Gallery category={category.name} photos={this.state.photos} hello={this.requestImagesFromFlickr(category.name)}/>}/>
        );
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Navigation
                            categories={this.state.categories}
                        />
                        <Switch>
                            <Route exact path="/" component={Home} />}/>
                            {buttons}
                            <Route component={Error}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
