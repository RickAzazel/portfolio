import React, { useState } from 'react';
import { NAV_LIST } from '../../utils/constants';
import logo from './../../assets/images/logo.png';

const Header = () => {
	window.addEventListener('scroll', () => {
		const header = document?.querySelector('.header');

		(window.scrollY >= 80)
			? header.classList.add('scroll-header')
			: header.classList.remove('scroll-header');
	});

	const [Toggle, showMenu] = useState();
	const [activeNav, setActiveNav] = useState('#banner');

	return (
		<header className="header">
			<nav className="nav container">
				<a href="/" className="nav__logo">
					<img src={logo} alt="Logo" />
				</a>

				<div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
					<ul className="nav__list">
						{NAV_LIST.map((item) => (
							<li key={item.id} className="nav__item">
								<a href={item.link}
									onClick={() => setActiveNav(item.link)}
									className={activeNav === item.link ? 'nav__link active-link' : 'nav__link'}>
									<i className={`${item.icon} nav__icon`}></i>
									{item.text}
								</a>
							</li>
						))}

					</ul>

					<i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
				</div>

				<div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
					<i className="uil uil-apps"></i>
				</div>
			</nav>
		</header>
	)
}

export default Header;