import React from 'react';
import Intro from "./intro/Intro";
import Skills from './skills/Skills';
import Projects from './projects/Projects';

const Home = () =>
{
    return (
        <div>
            <Intro/>
	        <Skills/>
	        <Projects/>
	        <Intro/>
        </div>
    );
};

export default Home;