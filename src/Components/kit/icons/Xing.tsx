import React from 'react';

interface Props
{
	size?: number,
	gradient?: string[]
}

const Xing = (props: Props) =>
{
	props = {
		size: 100,
		gradient: ['#00F260', '#0575E6'],
		...props,
	};

	const id = props.gradient?.join('').replace(/#/g, '');

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.size}
			height={props.size}
			viewBox='426.896 102.499 170.207 200'
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
						props.gradient?.map((item, i) =>
						{
							const offset = Math.round(100 / ((props.gradient?.length || 0) - 1) * i);

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

			<path
				fill={`url(#${id})`}
				d='M442.394 142c-1.736 0-3.197.61-3.934 1.803-.76 1.231-.645 2.818.166 4.424l19.503 33.761c.033.064.033.105 0 .164l-30.648 54.084c-.799 1.592-.76 3.191 0 4.425.736 1.187 2.033 1.966 3.771 1.966h28.844c4.312 0 6.393-2.91 7.867-5.57 0 0 29.973-53.01 31.14-55.068-.118-.19-19.83-34.58-19.83-34.58-1.439-2.557-3.606-5.41-8.03-5.41h-28.849z'
			/>
			<path
				fill={`url(#${id})`}
				d='M563.574 102.501c-4.309 0-6.176 2.714-7.723 5.494 0 0-62.14 110.2-64.188 113.818.105.196 40.984 75.191 40.984 75.191 1.432 2.558 3.641 5.494 8.06 5.494h28.81c1.738 0 3.096-.654 3.828-1.843.77-1.23.748-2.857-.059-4.458l-40.664-74.295a.167.167 0 0 1 0-.189l63.863-112.92c.803-1.594.82-3.22.061-4.452-.736-1.188-2.098-1.843-3.836-1.843h-29.139v.002h.003z'
			/>
		</svg>
	);
};

export default Xing;