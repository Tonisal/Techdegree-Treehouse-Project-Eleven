import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Gallery from './components/Gallery';
import Error from './components/Error';
import Home from './components/Home';
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <Navigation />
          <Switch>
            <Route exact path="/" render={() => <Home/>}/>
            <Route path="/sunset" component={ () => <Gallery tag="Sunset" /> } />
            <Route path="/cars" component={ () => <Gallery tag="Cars" /> } />
            <Route path="/science" component={ () => <Gallery tag="Sciene" /> } />
            <Route path="/search" component={ (props) => <Gallery tag="Random" url={props.match.url} /> } />
            <Route render={() => <Error/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
