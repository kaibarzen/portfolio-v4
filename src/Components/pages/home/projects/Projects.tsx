import React from 'react';
import './projects.sass';
import Project from './Project';
import {Element} from 'react-scroll/modules';
import dungeon from '../../../../resources/media/dungeon.png';
import wahlen from "../../../../resources/media/wahlen.png"
import ProjectPortfolio from './ProjectPortfolio';

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
					tags={["React"]}
					gradient={[]}
				>
					asasffas
					afsfasfsa
					fasfsa
				</Project>
			</div>
			<Project
				title={'Wahlen'}
				image={wahlen}
				tags={["React"]}
				reversed={true}
				gradient={[]}
			>
				asasffas
				afsfasfsa
				fasfsa
			</Project>

			<ProjectPortfolio
				title={'My Portfolio Website'}
				tags={["React", "Typescript", "Sass"]}
				gradient={["#c0392b", "#8e44ad"]}
			>
				This is listed so you can view the source code here ! :)
			</ProjectPortfolio>
		</div>
	);
};

export default Projects;