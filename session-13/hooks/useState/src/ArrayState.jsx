import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const ArrayState = () => {
	const [numbers, setNumbers] = useState([]);

	const addNumber = () => {
		const randomNumber = uuid();

		//❌ will not work
		// numbers[numbers.length-1] = randomNumber;
		// numbers.push(randomNumber);

		//⚠🟡 unintended results: will reset the state to be only single value inside array
		// setNumbers([randomNumber]);

		// ✅will work
		// setNumbers(numbers.concat(randomNumber));
		// setNumbers([...numbers, randomNumber]);

		// ✅✅ will work
		setNumbers((prevNumbers) => [...prevNumbers, randomNumber]);
	};

	const removeNumber = (index) => {
        //❌ will not work
        // numbers.splice(index, 1); setNumbers(numbers);

        // ✅✅ will work
		// setNumbers((prevNumbers) => prevNumbers.filter((_, i) => i !== index));
	};

    const removeFromEnd = () => {
        //❌ will not work
        // numbers.pop();

        // ✅✅will work
		setNumbers((prevNumbers) => prevNumbers.slice(0, -1));
    }

	return (
		<div className="center">
			<ul>
				{numbers.map((number, index) => (
					<li key={number}>
						{number}
						<button onClick={() => removeNumber(index)}>Remove</button>
					</li>
				))}
			</ul>
			<button onClick={addNumber}>Add Number</button>
			<button onClick={removeFromEnd}>Remove From End</button>
		</div>
	);
};

export default ArrayState;
