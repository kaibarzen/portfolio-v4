import React, {ReactNode} from 'react';
import {isArray} from 'util';

interface Props
{
	children: ReactNode,
	gradient?: string[],
	title?: string,
	direction?: string
}

const GradientBox = (props: Props) =>
{
	props = {
		direction: 'to right',
		...props,
	};

	const gradient = props.gradient || ['#8a2387', '#e94057', ' #f27121'];
	const gradientCSS = `linear-gradient(${props.direction}, ${gradient?.join(',')})`;

	return (
		<div className={'gradientBox'}>
			<h2>
				{props.title}
			</h2>
			<div
				className={'gradient'}
				style={{background: gradientCSS}}
			>
			</div>
			<div
				className={'content'}
				style={{
					borderLeft: `4px solid ${gradient[0]}`,
					borderRight: `4px solid ${gradient[gradient.length - 1]}`,
				}}
			>
				{Array.isArray(props.children) ?
					props.children.map((item, key) =>
					{
						return (
							<div style={{border: `1px solid ${gradient[0]}`}}>
								{item}
							</div>
						);
					})
					:
					null
				}
			</div>
			<div
				className={'gradient'}
				style={{background: gradientCSS}}
			>
			</div>
		</div>
	);
};

export default GradientBox;