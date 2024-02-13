import React from 'react';
import PortfolioItem from './PortfolioItem';
import { PORRTFOLIO_ITEMS } from './../../utils/constants';

const Portfolio = () => {
	return (
		<section className='portfolio section' id='portfolio'>
			<h2 className="section__title">Portfolio</h2>
			<span className='section__subtitle'>Most recent works</span>

			<div className="portfolio-items__container container">
				{PORRTFOLIO_ITEMS.map((item) => (

					<PortfolioItem item={item} key={item.id} />

				))}
			</div>

		</section>
	)
}

export default Portfolio;