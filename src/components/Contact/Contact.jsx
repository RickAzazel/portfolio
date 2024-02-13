import React from 'react';
import { CONTACT_CARDS } from '../../utils/constants';

const Contact = () => {
	return (
		<section className='contact section' id='contact'>
			<h2 className="section__title">Get in touch</h2>
			<span className="section__subtitle">Contact me</span>

			<div className="contact__container container">
				<div className="contact__content">
					<h3 className="contact__title">Talk to me</h3>

					<div className="contact__info">
						{CONTACT_CARDS.map((card) => (
							<div key={card.id} className="contact__card">
								<i className={`${card.icon} contact__card-icon`}></i>

								<h3 className="contact__card-title">{card.title}</h3>
								<span className="contact__card-data">{card.data}</span>

								<a href={card.button.link} className={card.button.className} target='_blank' rel="noreferrer">
									{card.button.text}
									<i className={`${card.button.icon} contact__button-icon`}></i>
								</a>
							</div>
						))}
					</div>

				</div>
			</div>
		</section>
	)
}

export default Contact;