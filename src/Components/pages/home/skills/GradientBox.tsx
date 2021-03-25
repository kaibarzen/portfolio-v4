import React, {ReactNode} from 'react';

interface Props
{
	children?: ReactNode,
	gradient?: string,
	title?: string,
}

const GradientBox = (props: Props) =>
{
	return (
		<div className={'gradientBox'}>
			<h2>
				{props.title}
			</h2>
			<div className={"gradient"} style={{background: props.gradient}}>
				<div className={"content"}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default GradientBox;