import React from 'react';
import './Home.sass';

const Home = () => {
    return (
        <div id="home">
            <h1>MathUp!</h1>
            <p>Hello! Thanks for visiting my personal project "MathUp!." MathUp! is web application that allows for the practice
            of ones mathematical skills. This is project is currently ongoing while I integrate more complex mathematical topics and problems.
            Feel free to sign up for an account and test your math skills. - Ryan
            </p>
            <a href="https://github.com/ryanKrumbholz/mathup">Github Repo</a>
            <img src="https://media1.giphy.com/avatars/tontonfriends/oR1fkkiDPgSG.gif" id="doggo"></img>
        </div>
    );
};

export default Home;