import React, {Component, useState} from 'react';
import Cypher from './Cypher';

interface Props
{
	delay?: number // Delay between a single character shuffle
	pause?: number, // Delay between switching strings
	shuffleMin?: number, // Min amount of shuffle per character
	shuffleMax?: number,
	strings: string[], // List of strings that get looped through
	callback?: (string: string, index: number) => void, // Callback after every string
}

interface PropsDefaulted
{
	delay: number,
	pause: number,
	shuffleMin: number,
	shuffleMax: number,
	strings: string[],
	callback: Function | null,
}

/**
 * Loops through the given strings endlessly
 */
class CypherLoop extends Component<Props>
{

	prop: PropsDefaulted = {
		delay: 40,
		pause: 4000,
		shuffleMin: 4,
		shuffleMax: 16,
		strings: ['THIS', 'SHALL', 'NOT', 'BE', 'EMPTY'],
		callback: null,
	};
	timeout: number = 0;

	state = {
		index: 0, // Index of startString of prop.strings
	};

	constructor(props: Props)
	{
		super(props);
		this.prop = {...this.prop, ...props};
	}

	componentWillUnmount(): void
	{
		clearTimeout(this.timeout);
	}

	callback()
	{
		if (this.prop.callback)
		{
			this.prop.callback(this.prop.strings[this.state.index], this.state.index);
		}
		this.timeout = window.setTimeout(() =>
		{
			if (this.state.index === this.prop.strings.length - 1)
			{
				this.setState({index: 0});
			}
			else
			{
				this.setState({index: this.state.index + 1});
			}
		}, this.prop.pause);
	}

	render()
	{
		const start = this.prop.strings[this.state.index];
		const end = this.prop.strings.length === this.state.index + 1 ? this.prop.strings[0] : this.prop.strings[this.state.index + 1];
		return <Cypher
			startString={start}
			children={end}
			callback={this.callback.bind(this)}
			delay={this.prop.delay}
			shuffleMax={this.prop.shuffleMax}
			shuffleMin={this.prop.shuffleMin}
		/>;
	}

}

export default CypherLoop;