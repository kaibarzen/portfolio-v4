import React, {ReactNode} from 'react';

interface Props
{
	size: number,
	gradient: string[]
	children: ReactNode
}

const Icon = (props: Props) =>
{
	const id = props.gradient.join('').replace(/#/g, '');

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill={`url(#${id})`}
			width={props.size}
			height={props.size}
		>
			<defs>
				<linearGradient
					spreadMethod='pad'
					id={id}
					x1='0%'
					y1='0%'
					x2='0%'
					y2='100%'
				>
					{
						props.gradient.map((item, i) =>
						{
							const offset = Math.round(100 / (props.gradient.length - 1) * i);

							return (
								<stop
									offset={`${offset}%`}
									stopColor={item}
									key={i}
								/>
							);
						})
					}
				</linearGradient>
			</defs>
			{
				props.children
			}
		</svg>
	);
};

export default Icon;

