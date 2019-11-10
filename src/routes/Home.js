import React from 'react';
import styles from './Home.scss';
import image from '../images/homeImage.jpg';

const Home = () => {
    return (
        <div className ="home">
            <img src={image} className="homeImage" alt="home image"/>
        </div>
    );
};

export default Home;