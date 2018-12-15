import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';

//Components
import Search from './Search';
import Photos from './Photos';

class Gallery extends Component {
  constructor(props) {
    super();
    /*Set initial state for photos, url and loading */
    this.state = {
      /*Set photos as an empty array*/
      photos: [],
      /*Pass search url for any results received*/
      url: props.url,
      /*Display loading indicator when array is still being fetched*/
      loading: true
    };
  }

  /*call performSearch*/
  componentDidMount(){this.performSearch()}

  /*create performSearch and use axios to call flickr api*/
  /*get flickr array using given apiKey(from config.js) and tag from the props*/
  performSearch = (tag =this.props.tag) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=12&format=json&nojsoncallback=1`)
    .then(response => {
     /*set photos as array provided, tag as the title and loading to false(for when it's not loading)*/
      this.setState({
        photos: response.data.photos.photo,
        title: tag,
        loading: false
      });
      console.log(response.data.photos.photo);
      console.log(this.state.title);
    })
    .catch(error => {
      console.log('error',error);
    });
  }
  render() {
    /*searchBar appear only if url=/search*/
    let searchBar;
    if (this.state.url === '/search') {
      /*Call Search component*/
      /*onSearch to call on performSearch after input is received*/
      searchBar = <Search onSearch={this.performSearch} />;
    }

    return (
      <div className="container">
        {/*call searchBar*/}
        {searchBar}
        {/*call photo container and pass data -> photos , title, and loading*/}
        <Photos data={this.state.photos} title={this.state.title} loading={this.state.loading} />
      </div>
    );
  }
}

export default Gallery;
