import React from 'react';
import './projects.sass';
import Project from './Project';
import dungeon from '../../../../resources/media/dungeon.png';
import {Element} from 'react-scroll/modules';

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
				image={dungeon}
				tags={["React"]}
				reversed={true}
				gradient={[]}
			>
				asasffas
				afsfasfsa
				fasfsa
			</Project>

			<Project
				title={'Dungeon Generator'}
				image={dungeon}
				tags={["React"]}
				gradient={["#c0392b", "#8e44ad"]}
			>
				asasffas
				afsfasfsa
				fasfsa
			</Project>
		</div>
	);
};

export default Projects;