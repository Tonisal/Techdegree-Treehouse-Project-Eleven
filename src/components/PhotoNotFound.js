//display PhotoNotFound if search = no photos
import React, { Component } from 'react';

class Search extends Component {

  render() {
    return (
      <li className="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
      </li>
    );
  }
}

export default Search;
