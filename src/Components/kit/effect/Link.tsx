import React, {ReactNode} from 'react';
import './link.sass';

interface Props
{
	children?: ReactNode,
	url?: string,
	target?: string,
}

const Link = (props: Props) =>
{
	const onClick = () =>
	{
		if (props.url)
		{
			window.open(props.url, props.target || '_blank');
		}
	};

	return (
		<div className={"link"} onClick={onClick}>
			{props.children}
		</div>
	);
};

export default Link;