import React from 'react';
import './skills.sass';
import person from '../../../../resources/media/person.svg';
import GradientBox from './GradientBox';

const Skills = () =>
{
	return (
		<div className={'skills'}>
			<div className={"person"} style={{backgroundImage:`url(${person})`}}>
					<div className={"container"}>

						<div>
							<h1 className={"underline"}>
								My Skills
							</h1>
						</div>

						<GradientBox title={"Frontend"} gradient={"linear-gradient(to right, #8a2387, #e94057, #f27121)"}>
							<div>
								HTML
							</div>
							<div>
								CSS
							</div>
							<div>
								REACT
							</div>
							<div>
								Javascript
							</div>
							<div>
								Typescript
							</div>
						</GradientBox>

						<GradientBox title={"Backend"} gradient={"linear-gradient(to right, #8a2387, #e94057, #f27121)"}>
							<div>
								NodeJS
							</div>
							<div>
								PHP
							</div>
							<div>
								MongoDB
							</div>
							<div>
								MySQL SQL
							</div>
							<div>
								Serverless
							</div>
						</GradientBox>

						<GradientBox title={"AWS"} gradient={"linear-gradient(to right, #8a2387, #e94057, #f27121)"}>
							<div>
								Lambda
							</div>
							<div>
								API Gateway
							</div>
							<div>
								Cognito
							</div>
							<div>
								Amplify
							</div>
							<div>
								Dynamo DB
							</div>
							<div>
								CloudFormation
							</div>
							<div>
								S3
							</div>
						</GradientBox>

					</div>
			</div>
		</div>
	);
};

export default Skills;