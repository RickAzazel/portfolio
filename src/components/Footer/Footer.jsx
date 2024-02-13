import React from 'react';
import Social from '../Social/Social';
import { FOOTER_LIST } from '../../utils/constants';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h2 className='footer__title'>Title</h2>

				<ul className="footer__list">
					{FOOTER_LIST.map((item) => (
						<li key={item.id}>
							<a className="footer__link" href={item.link}>
								{item.text}
							</a>
						</li>
					))}
				</ul>

				<Social />

				<span className="footer__copy">
					&#169; All rights reserved 2024
				</span>
			</div>
		</footer>
	)
}

export default Footer;