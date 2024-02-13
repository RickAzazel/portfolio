import React from 'react';

import CV from './../../assets/MikhalchukM.pdf';

const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className="section__title">About me</h2>
			<span className="section__subtitle">My introduction</span>

			<div className="about__container container">
				<p className="about__description">
					Highly motivated individual dedicated to writing
					clear, concise, robust code that works. Striving to
					never stop learning and improving.
				</p>

				<a download="" href={CV} className='button button--flex'>
					Download CV
					<i class="uil uil-file-download button__icon"></i>
				</a>
			</div>
		</section>
	)
}

export default About;