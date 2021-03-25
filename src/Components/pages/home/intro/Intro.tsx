import React from 'react';
import './intro.sass';
import person from "../../../../resources/media/person.svg"

const Intro = () =>
{
	return (
		<div className={'intro'}>
			<div className={"person"} style={{backgroundImage:`url(${person})`}}>
				<div className={"container"}>
					<div>
						<h1>
							Hi, I'm Kai
						</h1>

						<p>
							I'm a fullstack web developer which loves working with react and aws.
						</p>
					</div>

					<div>
						View Skills | View Projects | Contact
					</div>

				</div>
			</div>
		</div>
	);
};

export default Intro;