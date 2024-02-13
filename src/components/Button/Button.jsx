import React from 'react';

const Button = ({className, link, text, icon}) => {
	return (
		<a className={className} href={link} rel="noopener noreferrer">
			{text}
			<i className={icon}></i>
		</a>
	)
}

export default Button;