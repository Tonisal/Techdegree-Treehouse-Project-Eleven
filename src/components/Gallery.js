import React, {Component} from 'react';
import axios from 'axios';
import apiKey from '../apiKey';

import Search from './Search';
import Photos from './Photos';

class Gallery extends Component {
    constructor(props) {
        super();
        this.state = {
            photos: [],
            url: props.url,
        };
    }

    componentDidMount() {
        this.SearchForPhotos()
    }


    SearchForPhotos = (tag = this.props.tag) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=12&format=json&nojsoncallback=1`)
            .then(response => {
                /*set photos as array provided, tag as the title and loading to false(for when it's not loading)*/
                this.setState({
                    photos: response.data.photos.photo,
                    title: tag,
                });
            })
    }

    render() {
        /*searchBar appear only if url=/search*/
        let searchBar;
        if (this.state.url === '/search') {
            /*Call Search component*/
            /*onSearch to call on performSearch after input is received*/
            searchBar = <Search onSearch={this.SearchForPhotos}/>;
        }

        return (
            <div className="container">
                {/*call searchBar*/}
                {searchBar}
                {/*call photo container and pass data -> photos , title, and loading*/}
                <Photos photos={this.state.photos} title={this.state.title}/>
            </div>
        );
    }
}

export default Gallery;
