import React from 'react';
import './contact.sass';
import Github from '../../../kit/icons/Github';
import Link from '../../../kit/effect/Link';
import LinkedIn from '../../../kit/icons/LinkedIn';
import Mail from '../../../kit/icons/Mail';
import {Element} from 'react-scroll/modules';
import Xing from '../../../kit/icons/Xing';

const Contact = () =>
{
	return (
		<div className={'contact'}>
			<Element name={"contact"}/>
			<div className={'container'}>
				<h1 className={'underline'}>
					Contact Me
				</h1>
				<p>
					Feel free to contact me :)
				</p>
				<div className={'icons'}>

					<Link url={'https://www.linkedin.com/in/kai-barzen-3285091ab/'}>
						<LinkedIn size={100} />
					</Link>

					<Link url={'https://www.xing.com/profile/Kai_Barzen/cv'}>
						<Xing size={100} />
					</Link>

					<Link url={'https://github.com/kaibarzen'}>
						<Github size={100} />
					</Link>

					<Link url={'mailto:' + ['barzenkaitrier', '@', 'gm', 'ail', '.com'].join('')}>
						<Mail size={100} />
					</Link>

				</div>
			</div>
		</div>
	);
};

export default Contact;