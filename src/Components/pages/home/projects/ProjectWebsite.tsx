import React, {ReactNode} from 'react';
import CypherVisible from '../../../kit/effect/CypherVisible';
import CodeIcon from '@material-ui/icons/Code';
import CallMadeIcon from '@material-ui/icons/CallMade';

interface Props
{
	title: string,
	children?: ReactNode,
	source?: string,
	href?: string,
	tags?: string[]
	reversed?: boolean
	gradient: string[]
	url: string,
}

const ProjectWebsite = (props: Props) =>
{

	return (
		<div
			className={`project ${props.reversed ? 'reversed' : ''}`}
			style={{
				backgroundImage: `linear-gradient(to right, ${props.gradient.join(', ')})`,
			}}
		>

			<div className={'desc'}>
				<h2>
					<CypherVisible
						shuffleMax={6}
						delay={20}
					>
						{props.title}
					</CypherVisible>
					{
						props.href ?
							<CallMadeIcon
								fontSize={'large'}
								onClick={() =>
								{
									window.open(props.href, '_blank');
								}}
							/>
							:
							null
					}
					{
						props.source ?
							<CodeIcon
								fontSize={'large'}
								onClick={() =>
								{
									window.open(props.source, '_blank');
								}}
							/>
							:
							null
					}

				</h2>
				<p>
					{props.children}
				</p>
				<div className={'tags'}>
					{props.tags?.map((item, i) =>
					{
						return <div key={i}> {item} </div>;
					})}
				</div>
			</div>

			<div className={'iContainer'}>
				<div>
					<iframe
						src={props.url}
						title={props.url}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectWebsite;