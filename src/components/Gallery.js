// Gallery: Highest component for showing the photos, where all subcomponents are getting rendered.
// Import dependencies
import React, {Component} from 'react';
import axios from 'axios';
import apiKey from '../apiKey';

// Import Components
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

    /*Get photos from flickr and save them in state*/
    SearchForPhotos = (tag = this.props.tag, headline = this.props.headline) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=20&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    photos: response.data.photos.photo,
                    title: tag,
                    headline: headline
                });
            })
    }

    render() {
        {/*Render Search Input if url is "/Search" -> user clicked on "Search" button in the Navigation*/}
        let input;
        if (this.state.url === '/search') {
            input = <SearchForm onSearch={this.SearchForPhotos}/>;
        }


        {/*rendering the "Photos"-Component which receives the photos from state via props*/}
        return (
            <div className="container">
                {input}
                <Photos photos={this.state.photos} title={this.state.title} headline={this.state.headline}/>
            </div>
        );
    }
}

export default Gallery;
