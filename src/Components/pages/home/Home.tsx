import React from 'react';
import Intro from "./intro/Intro";
import Skills from './skills/Skills';

const Home = () =>
{
    return (
        <div>
            <Intro/>
	        <Skills/>
	        <Intro/>
        </div>
    );
};

export default Home;