import React from 'react';
import Intro from "./intro/Intro";
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

const Home = () =>
{
    return (
        <div>
            <Intro/>
	        <Skills/>
	        <Projects/>
	        <Contact/>
        </div>
    );
};

export default Home;