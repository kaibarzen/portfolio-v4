import React, {ReactNode} from 'react';
import CypherVisible from '../../../kit/effect/CypherVisible';
import CodeIcon from '@material-ui/icons/Code';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Image from 'react-image-webp';

interface Props
{
	title: string,
	children?: ReactNode,
	image: string,
	imageWebp: string,
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
									window.open(props.href, "_blank")
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
									window.open(props.source, "_blank")
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

			<div className={'img'}>
				<Image
					 src={props.image}
					 webp={props.imageWebp}
					 alt={"alt description"}
				/>
			</div>
		</div>
	);
};

export default Project;