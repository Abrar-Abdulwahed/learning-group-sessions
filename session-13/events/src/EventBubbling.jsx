import React from 'react';

const EventBubbling = () => {
	const handleParentClick = () => {
		console.log('Parent clicked');
	};

	const handleChildClick = (event) => {
		event.stopPropagation();
		console.log('Child clicked');
	};

	const handleSubmit = (event) => {
		console.log('Form submitted');
		event.preventDefault();
	};

	const handleClick = (event) => {
		console.log('Button clicked');
		event.preventDefault();
	};

	return (
		<div className="center">
			<p>Track Console</p>
			<div
				onClick={handleParentClick}
				style={{
					backgroundColor: 'green',
					width: '200px',
					height: '200px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<button onClick={handleChildClick}>Child</button>
			</div>
			<form onSubmit={handleSubmit}>
				<button onClick={handleClick}>Button inside form</button>
			</form>
		</div>
	);
};
export default EventBubbling;
