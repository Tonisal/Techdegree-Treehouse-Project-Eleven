import React, {Component} from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';

class App extends Component {

    state = {
        categories: [
            {
                name: 'beer',
                active: false,
                id: 1
            },
            {
                name: 'dogs',
                active: false,
                id: 2
            },
            {
                name: 'computers',
                active: false,
                id: 3
            }
        ]
    };

    componentDidMount() {
        this.requestImagesFromFlickr();

    }

    requestImagesFromFlickr() {
        console.log('mounted');
    }


    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header/>
                    <Navigation
                        categories={this.state.categories}
                    />
                    <Gallery/>
                </div>
            </div>
        );
    }
}

export default App;
