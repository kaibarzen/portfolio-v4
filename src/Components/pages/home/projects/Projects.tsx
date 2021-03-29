import React from 'react';
import './projects.sass';
import Project from './Project';
import {Element} from 'react-scroll/modules';
import dungeon from '../../../../resources/media/dungeon.png';
import wahlen from '../../../../resources/media/wahlen.png';
import attack from '../../../../resources/media/attack.png';
import online from '../../../../resources/media/online.png';
import ProjectWebsite from './ProjectWebsite';

const Projects = () =>
{
	return (
		<div className={'projects'}>
			<Element name={'projects'} />
			<div className={'gradient purple'}>
				<div className={'content'}>
					<h1 className={'underline '}>
						Projects
					</h1>
				</div>
				<Project
					title={'Dungeon Generator'}
					image={dungeon}
					tags={['React', 'Typescript', 'MobX']}
					gradient={[]}
					source={'https://github.com/kaibarzen/lf_dungeon'}
					href={'https://dungeon.kaibarzen.cloud/'}
				>
					Dungeon Generator is a minimalistic dungeon drawer for virtual tabletop games.
					It utilizes the HTML canvas element and includes advanced features like layering.
				</Project>
			</div>
			<Project
				title={'Rhineland-Palatinate Elections'}
				image={wahlen}
				tags={['Typescript', 'React', 'AWS', 'Amplify', 'Lambda', 'ApiGateway', 'MongoDB']}
				reversed={true}
				gradient={[]}
				href={'https://wahlen.volksfreund.cloud/'}
			>
				Election website made for the 2021 election in Rhineland-Palatinate.
				During the election the website got served 95,000 times with 135,000 successful api calls.
			</Project>

			<Project
				title={'Fairy Tail Attack!'}
				tags={['NodeJS', 'Typescript', 'Sass']}
				gradient={['#8A2387', '#E94057', '#F27121']}
				image={attack}
				source={'https://github.com/kaibarzen/fairy-tail-attack'}
			>
				Fairy Tail Attack! is a card generator to easily create and modify playing cards for virtual tabletop
				gaming.
			</Project>

			<ProjectWebsite
				title={'Am I Online?'}
				gradient={[]}
				reversed={true}
				url={'https://online.kaibarzen.cloud/'}
				href={'https://online.kaibarzen.cloud/'}
				source={'https://github.com/kaibarzen/Am-I-Online'}
				tags={["Javascript", "React", "AWS", "Lambda", "ApiGateway"]}
			>
				Am I Online? is a PWA app created to test your connectivity, you can install it on your device for offline functionality.
			</ProjectWebsite>

			<ProjectWebsite
				title={'My Portfolio Website'}
				tags={['React', 'Typescript', 'Sass']}
				gradient={['#c0392b', '#8e44ad']}
				source={'https://github.com/kaibarzen/portfolio-v4'}
				url={'https://master.d2sr79gikb2sst.amplifyapp.com/'}
			>
				My portfolio is listed here so you can view the source code or play around with the miniature version on the right-hand side.
			</ProjectWebsite>
		</div>
	);
};

export default Projects;