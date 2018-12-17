// Import dependencies
import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

// Import Components
import Gallery from './components/Gallery';
import Error from './components/Error';
import Navigation from "./components/Navigation";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Navigation/>
                    <Switch>
                        {/*Define Routes -> tag = tag for searching via the flickr api, headline -> what gets rendered as headline*/}
                        <Route exact path="/" component={ () => <Gallery tag="Hello" headline="Welcome to my flickr app!"/> } />
                        <Route path="/sunset" component={() => <Gallery tag="Sunset" headline="Images for 'Sunset'"/>}/>
                        <Route path="/cars" component={() => <Gallery tag="Cars" headline="Images for 'Cars'"/>}/>
                        <Route path="/science" component={() => <Gallery tag="Sciene" headline="Images for 'Science'"/>}/>
                        <Route path="/beer" component={() => <Gallery tag="Beer" headline="Images for 'Beer'"/>}/>
                        <Route path="/search" component={(props) => <Gallery tag="Random" headline="Images for your Search" url={props.match.url}/>}/>
                        <Route render={() => <Error/>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
