import React from 'react';
import './skills.sass';
import person from '../../../../resources/media/person.svg';
import GradientBox from './GradientBox';
import {Element} from 'react-scroll/modules';
import CypherLoop from "../../../kit/effect/CypherLoop";
import Cypher from "../../../kit/effect/Cypher";
import CypherVisible from "../../../kit/effect/CypherVisible";

const Skills = () =>
{
	return (
		<div className={'skills'}>
			<Element name={"skills"}/>
			<div className={"person"} style={{backgroundImage:`url(${person})`}}>
					<div className={"container"}>

						<div>
							<h1 className={"underline"}>
								<CypherVisible shuffleMin={1} shuffleMax={3}>My Skills </CypherVisible>
							</h1>
						</div>

						<GradientBox title={"Frontend"} gradient={["#12c2e9", "#c471ed", "#f64f59"]}>
							<div>
								HTML
							</div>
							<div>
								<CypherLoop strings={[" CSS", "SASS", "LESS"]}/>
							</div>
							<div>
								<CypherLoop strings={["React", "React Native"]}/>
							</div>
							<div>
								Javascript
							</div>
							<div>
								Typescript
							</div>
						</GradientBox>

						<GradientBox title={"Backend"}gradient={["#8A2387", "#E94057", "#F27121"]}>
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
								<CypherLoop strings={["MySQL", "  SQL"]}/>
							</div>
							<div>
								Serverless
							</div>
						</GradientBox>

						<GradientBox title={"AWS"} gradient={["#f12711", "#f5af19"]}>
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
								DynamoDB
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