import { useState } from 'react';

function BestPractice() {
	let localVar = 'Look at lazy initialization for heavy computation tasks';
	// poor: will take the localstorage in every render (NOT only mount)
	// const [name, setName] = useState(window.localStorage.getItem('name'));

	// good: Lazy initialization will take the localstorage in Mount phase ONLY
	const [name, setName] = useState(() => window.localStorage.getItem('name'));
	const [count, setCount] = useState(0);

	// function handleClickLocalVar() {
	// 	localVar = 'Updated Local Variable';
	// 	console.log(localVar);
	// }

	function handleClick() {
		// New value
		// stale closure
		// setCount(count + 1); // 1
		// setCount(count + 1); // 1
		// setCount(count + 1); // 1

		// updater function
		setCount((prevState) => prevState + 1);
		setCount((prevState) => prevState + 1);
		setCount((prevState) => prevState + 1);

		// it could led to stale if count as data inside in any point
		// setCount((prevState) => prevState + 1);
		// setCount((prevState) => prevState + count);
		// setCount((prevState) => prevState + 1);
	}

	return (
		<div className="center">
			<button onClick={handleClick}>Avoid stale closure</button>
			<p>{localVar}</p>
		</div>
	);
}

export default BestPractice;
