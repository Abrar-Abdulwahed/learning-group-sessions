import { useState } from 'react';

const getRadomColor = () => {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function Colorize() {
	let [color, setColor] = useState('#000');

	function handleClick() {
		setColor(getRadomColor());
	}

	return (
		<div className="center">
			<div
				style={{ width: '300px', height: '300px', backgroundColor: color }}
			></div>
			<button onClick={handleClick}>Change Color</button>
		</div>
	);
}

export default Colorize;
