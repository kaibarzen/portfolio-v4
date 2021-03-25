import React, {ReactNode} from 'react';

interface Props
{
	title: string,
	children?: ReactNode,
	image: string,
	source?: string,
	href?: string,
	tags?: string[]
	reversed?: boolean
	gradient: string[]
}

const Project = (props: Props) =>
{

	return (
		<div
			className={`project ${props.reversed ? 'reversed' : ''}`}
			style={{
				backgroundImage: `linear-gradient(to right, ${props.gradient.join(", ")})`
			}}
		>

			<div className={'desc'}>
				<h2>
					{props.title}
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

			<div className={'img'}>
				<img
					src={props.image}
					alt={'ALT Description'}
				/>
			</div>
		</div>
	);
};

export default Project;