import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const EventDelegation = () => {
	const [numbers, setNumbers] = useState([]);

	const addNumber = () => {
		const randomNumber = uuid();
		setNumbers((prevNumbers) => [...prevNumbers, randomNumber]);
	};

	const handleRemovePoor = (index) => {
		setNumbers((prevNumbers) => prevNumbers.filter((_, i) => i !== index));
	};

	const handleRemoveGood = (event) => {
		const index = event.target.dataset.d;
		setNumbers((prevNumbers) =>
			prevNumbers.filter((_, i) => i !== parseInt(index))
		);
	};

	return (
		<div className="center">
			<p>Track Console</p>
			<div
				style={{
					display: 'flex',
					width: '90vw',
					justifyContent: 'space-between',
				}}
			>
				<div id="poop" style={{ width: '49%' }}>
					<h2>Poor</h2>
					<ul>
						{numbers.map((number, index) => (
							<li key={number}>
								{number}
								<button onClick={() => handleRemovePoor(index)}>Remove</button>
							</li>
						))}
					</ul>
				</div>
				<div id="good" style={{ width: '49%' }}>
					<h2>Good</h2>
					<ul onClick={handleRemoveGood}>
						{numbers.map((number, index) => (
							<li key={number}>
								{number}
								<button data-d={index}>Remove</button>
							</li>
						))}
					</ul>
				</div>
			</div>
			<button onClick={addNumber}>Add Number</button>
		</div>
	);
};

export default EventDelegation;
