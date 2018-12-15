import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Components
import Container from './components/Container';
import Error from './components/Error';
import Home from './components/Home';
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <Navigation />
      {/* returns only the first matching route*/}
          <Switch>
      {/* route for the links provided*/}
            <Route exact path="/" render={() => <Home/>}/>
            <Route path="/sunset" component={ () => <Container tag="Sunset" /> } />
            <Route path="/cars" component={ () => <Container tag="Cars" /> } />
            <Route path="/sciene" component={ () => <Container tag="Sciene" /> } />
       {/* route for the search bar n pass url props*/}
            <Route path="/search" component={ (props) => <Container tag="Random" url={props.match.url} /> } />
       {/*Page not found if none of the links match the routes*/}
            <Route render={() => <Error/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
