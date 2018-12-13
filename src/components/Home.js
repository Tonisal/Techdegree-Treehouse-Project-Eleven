import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Flickr Photo App!</h1>
            <h2>Please us the navigation or the search input to see some photos from Flickr!</h2>
        </div>
    );
}

export default Home;


const Header = (props) => {
    return (
        //If the function just returns JSX, you can delete the "return" part
        <header>
            <h1>{props.title}</h1>
            <span className="stats"> Players: {props.totalPlayers}</span>
        </header>
    );
}