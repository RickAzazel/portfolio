import React from 'react';

import Header from './../Header/Header';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ScrollUp from '../ScrollUp/ScrollUp';

import './../../styles/index.scss';




const App = () => {
	// const boxRef = useRef(null);

	// const [bgColor, setBgColor] = useState('rgb(6, 29, 51)');
	// const [left, setLeft] = useState(0);
	// const [top, setTop] = useState(0);

	// const onMouseMoveHandler = (e) => {
	// 	console.log(boxRef.current.className)
	// 	const originalColor = 'rgb(6, 29, 51)';
	// 	const lightColor = 'rgb(0,163,255)';
	// 	const gradientSize = 50;

	// 	setLeft(boxRef.current?.offsetLeft ?? 0);
	// 	const x = e.pageX - left;

	// 	setTop(boxRef.current?.offsetTop ?? 0);
	// 	const y = e.pageY - top;

	// 	const xy = `${x} ${y}`;

	// 	setBgColor(
	// 		`-webkit-gradient(
	// 			radial, 
	// 			${xy}, 
	// 			0, 
	// 			${xy}, 
	// 			${gradientSize}, 
	// 			from(${lightColor}), 
	// 			to(${originalColor})
	// 		), ${originalColor}`
	// 	);
	// }

	// const onMouseLeaveHandler = () => {
	// 	setBgColor('rgb(6, 29, 51)');
	// }

	return (
		<div
			className="wrapper"
			// style={{ background: bgColor }}
			// ref={boxRef}
			// onMouseMove={(e) => onMouseMoveHandler(e)}
			// onMouseLeave={onMouseLeaveHandler}
		>

			<Header />

			<main className='main'>
				<Banner />
				<About />
				<Portfolio />
				<Contact />
			</main>

			<Footer />
			<ScrollUp />
		</div>
	)
}

export default App;