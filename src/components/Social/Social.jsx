import React from 'react';
import { SOCIAL } from './../../utils/constants';

const Social = () => {
	return (
		<div className="social">
			{SOCIAL.map((item) => (
				<a key={item.id} href={item.link} className="social__link" target='__blank'>
					<i className={item.icon}></i>
				</a>
			))}
		</div>
	)
}

export default Social;