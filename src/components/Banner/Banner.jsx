import React from 'react';

import Social from './../Social/Social';
import BannerData from './BannerData';
import ScrollDown from './ScrollDown';

const Banner = () => {
	return (
		<section className='banner section' id='banner'>
			<div className="banner__container container">
				<div className="banner__content">

					<Social />
					<BannerData/>

				</div>

				<ScrollDown />
			</div>
		</section>
	)
}

export default Banner;