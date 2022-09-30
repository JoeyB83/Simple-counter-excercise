import React, { useState, useEffect } from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';


//create your first component
function Home (props) {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
		  setCounter((prevCounter) => prevCounter + 1);
		}, 1000);
	
		return () => clearInterval(interval);
	  }, []);

	  const two = Math.floor(counter/10);
	  const three = Math.floor(counter/100);
	  const four = Math.floor(counter/1000);
	  const five = Math.floor(counter/10000);
	  const six = Math.floor(counter/100000);

	return (
		<div className = "counter">
			<div className = "clock"><FontAwesomeIcon icon = { faClock } /></div>
			<div className = "digitSix">{six % 10}</div>
			<div className = "digitFive">{five % 10}</div>
			<div className = "digitFour">{four % 10}</div>
			<div className = "digitThree">{three % 10}</div>
			<div className = "digitTwo"> {two % 10}</div>
			<div className = "digitOne"> {counter % 10}</div>
		</div>			
	);
};	

export default Home;
