import React from 'react';
import Button from '../Button/Button';

const PortfolioItem = ({ item }) => {
	return (
		<div className="portfolio-item">
			<img src={item.image} alt={item.alt} className='portfolio-item__img' />
			<h3 className="portfolio-item__title">{item.title}</h3>

			<Button 
				className={'portfolio-item__button'}
				link={item.link}
				text={'Demo'}
				icon={'bx bx-right-arrow-alt portfolio-item__button-icon'}
			/>
		</div>
	)
}

export default PortfolioItem;