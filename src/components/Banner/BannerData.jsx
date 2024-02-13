import React, { useState, useCallback, useEffect } from 'react';
import Button from '../Button/Button';

const BannerData = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeliting, setIsDeliting] = useState(false);
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(200 - Math.random() * 100);

	const tick = useCallback(() => {
		const toRotate = ['My name is Michael and I am a web developer…'];
		const period = 2000;

		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeliting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeliting) setDelta((prevDelta) => prevDelta / 2);

		if (!isDeliting && updatedText === fullText) {
			setIsDeliting(true);
			setDelta(period);
		}
		else if (isDeliting && updatedText === '') {
			setIsDeliting(false);
			setLoopNum(loopNum + 1);
			setDelta(200);
		}
	}, [isDeliting, loopNum, text.length]);

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => clearInterval(ticker);
	}, [text, delta, tick]);

	return (
		<div className="banner__data">
			<h1 className="banner__title">
				Hey there<span>!</span>
			</h1>
			<h2 className="banner__subtitle">
				{text}
			</h2>
			<p className="banner__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perspiciatis omnis ipsam officiis odio! Dolore labore quidem maiores, nesciunt repellat laudantium est a deserunt illum minima quaerat, enim, rem veritatis?</p>

			<Button
				className={'button banner__button'}
				link={'#contact'}
				text={'Say hello'}
				icon={'uil uil-smile-squint-wink button__icon'}
			/>

		</div>
	)
}

export default BannerData;