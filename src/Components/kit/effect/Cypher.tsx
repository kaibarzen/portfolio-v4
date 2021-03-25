import {Component} from 'react';

interface Props
{
	delay?: number // Delay between a single shuffle
	shuffleMin?: number, // Min amount of shuffle per character
	shuffleMax?: number,
	startString?: string,
	children?: string,
	enabled?: boolean,
	callback?: () => void, // Callback on finish
}

interface PropsDefaulted
{
	delay: number
	shuffleMin: number,
	shuffleMax: number,
	startString: string,
	children: string,
	tableFull: string,
	tableLight: string,
	tableMedium: string,
	tableHeavy: string,
	enabled: boolean,
	callback: Function | null,
}

interface QueueItem
{
	index: number, // Position of the character
	shuffle: number, // How many times it will the character still be shuffled
	shuffleMax: number, // Max time of shuffling per character
	from: string, // What char we are starting from
	to: string, // What final character should it be
}

class Cypher extends Component<Props>
{
	prop: PropsDefaulted = {
		delay: 40,
		shuffleMin: 4,
		shuffleMax: 16,
		startString: '',
		children: 'String',
		tableLight: ',._+*~^°',
		tableMedium: '<>;:-#+iIl1/(){[]}',
		tableHeavy: '?}][{/()=%&$LlIiYyJjTtCcDdOoQqUuZz',
		tableFull: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$%/()=?{[]}#+',
		callback: null,
		enabled: true,
	};

	constructor(props: Props)
	{
		super(props);
		this.prop = {...this.prop, ...props};
	}

	queue: QueueItem[] = [];
	interval: number | null = null;

	state = {
		string: '',
	};

	componentDidMount(): void
	{
		if (this.prop.enabled)
		{
			this.setState({string: this.prop.startString});
			this.generateQueue();
			this.interval = window.setInterval(this.tick.bind(this), this.prop.delay);
		}
	}

	componentWillUnmount(): void
	{
		if (this.interval)
		{
			clearInterval(this.interval);
		}
	}

	componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void
	{
		// On Prop Change, set out custom prop object, + start over
		if (prevProps !== this.props)
		{
			this.prop = {...this.prop, ...this.props};
			if (this.prop.enabled)
			{
				this.generateQueue();
				this.interval = window.setInterval(this.tick.bind(this), this.prop.delay);
			}
			else if (this.interval)
			{
				clearInterval(this.interval);
			}
		}
	}

	/**
	 * Generates the queue, an array of objects which defined the output character and the amount of shuffles
	 */
	generateQueue(): void
	{
		this.queue = [];
		const lenght: number = this.prop.startString.length > this.prop.children.length ? this.prop.startString.length : this.prop.children.length;

		for (let i = 0; i < lenght; i++)
		{
			if (this.prop.startString.charAt(i) === this.prop.children.charAt(i))
			{
				continue;
			}
			const rand = Math.floor(Math.random() * (this.prop.shuffleMax - this.prop.shuffleMin + 1)) + this.prop.shuffleMin;
			this.queue.push({
				index: i,
				shuffle: rand,
				shuffleMax: rand,
				to: this.prop.children.charAt(i) || ' ',
				from: this.prop.startString.charAt(i) || ' ',
			});
		}

	}

	/**
	 * Tick every n ms, chooses and random item from the queue
	 */
	tick(): void
	{
		if (this.queue.length === 0)
		{
			this.setState({
				string: this.prop.children // For safety
			})
			if (this.interval)
			{
				clearInterval(this.interval);
			}
			if (this.prop.callback)
			{
				this.prop.callback();
			}
			return;
		}
		const index = Math.floor(Math.random() * this.queue.length);
		const item: QueueItem = this.queue[index];

		this.setChar(item);

		if (item.shuffle === 1)
		{
			this.queue.splice(index, 1);
		}
		else
		{
			item.shuffle--;
		}
	}

	/**
	 * Set the character at the output string, used the item char or getRandomChar() depending on remaining shuffles
	 * @param item
	 */
	setChar(item: QueueItem): void
	{
		let oldString = this.state.string;

		let char = item.to;
		if (item.shuffle !== 1)
		{
			char = this.getRandomChar(item);
		}
		oldString = oldString.substring(0, item.index) + char + oldString.substring(item.index + 1);
		this.setState({string: oldString});
	}

	/**
	 * Get an random char depending on item attributes
	 * @param item
	 */
	getRandomChar(item: QueueItem): string
	{
		let char = '';
		let table = '';

		if (item.from === ' ')
		{
			// nothing to char, get heavier
			table = this.getTable(item.shuffleMax - item.shuffle);
		}
		else if (item.to === ' ')
		{
			// char to nothing, get lighter
			table = this.getTable(item.shuffle);
		}
		else
		{
			// char to chart
			table = this.prop.tableFull;
		}

		char = table.charAt(Math.floor(Math.random() * table.length));
		if (char === item.to || char === item.from)
		{
			return this.getRandomChar(item);
		}
		return char;
	}

	/**
	 * Get an char table with different character weight, lighter = smaller characters
	 * @param weight
	 */
	getTable(weight: number): string
	{
		if (weight <= 3)
		{
			return this.prop.tableLight;
		}

		if (weight <= 6)
		{
			return this.prop.tableMedium;
		}

		if (weight <= 9)
		{
			return this.prop.tableHeavy;
		}

		return this.prop.tableFull;
	}

	render()
	{
		return this.state.string;
	}
}

export default Cypher;