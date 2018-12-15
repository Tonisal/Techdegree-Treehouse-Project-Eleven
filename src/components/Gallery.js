import React, {Component} from 'react';
import axios from 'axios';
import apiKey from '../apiKey';

import SearchForm from './SearchForm';
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
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=20&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    photos: response.data.photos.photo,
                    title: tag,
                });
            })
    }

    render() {
        let input;
        if (this.state.url === '/search') {
            input = <SearchForm onSearch={this.SearchForPhotos}/>;
        }

        return (
            <div className="container">
                {input}
                <Photos photos={this.state.photos} title={this.state.title}/>
            </div>
        );
    }
}

export default Gallery;
