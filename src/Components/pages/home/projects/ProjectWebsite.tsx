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
	scaling?: number,
}

const ProjectWebsite = (props: Props) =>
{
	const scale = 1 - (props.scaling || 1) * 0.7;
	const width = Math.floor((props.scaling || 1) * 1920);
	const height = Math.floor((props.scaling || 1) * 1080);

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
				<div
					style={{
						transform: `scale(${scale}, ${scale})`,
					}}
				>
					<iframe
						src={props.url}
						style={{
							width,
							height,
						}}
						title={props.url}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectWebsite;