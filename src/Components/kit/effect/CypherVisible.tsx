import React from 'react';
import {useInView} from 'react-intersection-observer';
import Cypher from './Cypher';
interface Props
{
	delay?: number // Delay between a single shuffle
	shuffleMin?: number, // Min amount of shuffle per character
	shuffleMax?: number,
	startString?: string,
	children?: string,
	callback?: () => void, // Callback on finish
}

/**
 * Pauses if it is not visible
 * @param props
 * @constructor
 */
const CypherVisible = (props: Props) =>
{
	const {ref, inView} = useInView({triggerOnce: true});
	return <div ref={ref}> <Cypher {...props} enabled={inView}/> </div>
};

export default CypherVisible;