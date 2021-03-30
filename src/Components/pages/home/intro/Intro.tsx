import React from 'react';
import './intro.sass';
import person from '../../../../resources/media/person.svg';
import {Element, scroller} from 'react-scroll/modules';

const Intro = () =>
{

	const opt = {
		smooth: "easeInOutCubic"
	}

	return (
		<div className={'intro'}>
			<Element name={"intro"}/>
			<div
				className={'person'}
				style={{backgroundImage: `url(${person})`}}
			>
				<div className={'container'}>
					<div>
						<h1>
							Hi, I'm Kai
						</h1>

						<p>
							I'm a fullstack web developer who loves working with react and aws.
						</p>
					</div>

					<div className={'scroll'}>
						<div
							onClick={() =>
							{
								scroller.scrollTo("skills", opt)
							}}
						>
							My Skills
						</div>
						<div
							onClick={() =>
							{
								scroller.scrollTo("projects", opt)
							}}
						>
							Projects
						</div>
						<div
							onClick={() =>
							{
								scroller.scrollTo("contact", opt)
							}}
						>
							Contact Me
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Intro;