import React from 'react';
import './projects.sass';
import Project from './Project';
import {Element} from 'react-scroll/modules';
import dungeon from '../../../../resources/media/dungeon.png';
import wahlen from "../../../../resources/media/wahlen.png"
import attack from "../../../../resources/media/attack.png"
import online from "../../../../resources/media/online.png"
import ProjectWebsite from './ProjectWebsite';

const Projects = () =>
{
	return (
		<div className={'projects'}>
			<Element name={"projects"}/>
			<div className={'gradient purple'}>
				<div className={'content'}>
					<h1 className={'underline '}>
						Projects
					</h1>
				</div>
				<Project
					title={'Dungeon Generator'}
					image={dungeon}
					tags={["React", "Typescript", "MobX"]}
					gradient={[]}
					source={"https://github.com/kaibarzen/lf_dungeon"}
					href={"https://dungeon.kaibarzen.cloud/"}
				>
					Dungeon Generator is a minimalistic dungeon drawer for virtual tabletop games.
					It's based around the HTML canvas object and includes many adv fts like asjkasfjn
				</Project>
			</div>
			<Project
				title={'Rhineland-Palatinate Elections'}
				image={wahlen}
				tags={["Typescript", "React", "AWS", "Amplify", "Lambda", "ApiGateway", "MongoDB"]}
				reversed={true}
				gradient={[]}
				href={"https://wahlen.volksfreund.cloud/"}
			>
				Election website made for the 2021 election in Rhineland-Palatinate.
				Over the timespan of 24 hours the website got served 95,000 times with 135,000 successful api calls.
			</Project>

			<Project title={"Fairy Tail Attack!"} tags={["NodeJS", "Typescript", "Sass"]} gradient={["#8A2387", "#E94057", "#F27121"]} image={attack} source={"https://github.com/kaibarzen/fairy-tail-attack"}>
				Fairy Tail Attack! is an card generator to easily create and modify playing cards for virtual tabletop gaming.
			</Project>

			<ProjectWebsite title={"aasffsa"} gradient={[]} url={"https://dungeon.kaibarzen.cloud/"} />

			<Project title={"Am I Online?"} gradient={[]} image={online} reversed={true} href={"https://online.kaibarzen.cloud/"} source={"https://github.com/kaibarzen/Am-I-Online"}>
				FTA!
			</Project>

			<ProjectWebsite
				title={'My Portfolio Website'}
				tags={["React", "Typescript", "Sass"]}
				gradient={["#c0392b", "#8e44ad"]}
				source={"https://github.com/kaibarzen/portfolio-v4"}
				url={"https://master.d2sr79gikb2sst.amplifyapp.com/"}
			>
				This is listed here so you view the sourcecode of my website.
				<br/>
				Also on the right hand is a scrollable miniature version of this website :)
			</ProjectWebsite>
		</div>
	);
};

export default Projects;