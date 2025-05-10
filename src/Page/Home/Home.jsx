import React from 'react';
import Category from './Component/Category/Category';
import AboutYoga from './Component/AboutYoga/AboutYoga';
import Count from './Component/Count/Count';
import Blog from './Component/Blog/Blog';
import Motivation from './Component/Motivation/Motivation';
import Contact from './Component/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Category></Category>
            <AboutYoga></AboutYoga>
            <Count></Count>
            <Blog></Blog>
            <Motivation></Motivation>
            <Contact></Contact>
        </div>
    );
};

export default Home;