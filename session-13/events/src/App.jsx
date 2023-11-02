function App() {
	function handleClickStandard(e) {
		console.log('regular function');
		console.log(this);
		console.log(e);
	}

	const handleClickArrow = (e, param) => {
		console.log('arrow function');
		console.log(this);
		console.log(e, param);
	};

	return (
		<div className="center">
			<p>Track Console</p>
			<button onClick={handleClickStandard}>Standard Function</button>
			<button onClick={(e) => handleClickArrow(e, 'Abrar')}>
				Arrow Function
			</button>
		</div>
	);
}

export default App;
