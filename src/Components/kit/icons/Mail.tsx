import React from 'react';
import Icon from './Icon';

interface Props
{
	size?: number,
	gradient?: string[]
}

const Mail = (props: Props) =>
{
	return (
		<Icon
			size={props.size || 100}
			gradient={props.gradient || ["#FC5C7D", "#6A82FB"]}
		>
			<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
		</Icon>
	);
};

export default Mail;