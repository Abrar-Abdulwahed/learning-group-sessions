import React from 'react';

const MultipleEvent = () => {
	const handleBlur = (syntheticEvent) => {
		console.log('blur event');
		// console.log(syntheticEvent.nativeEvent instanceof FocusEvent);
	};

	const handleChange = (syntheticEvent) => {
		console.log('change event');
		// console.log(syntheticEvent.nativeEvent instanceof InputEvent);
	};

	const handleMultipleEvent = (event) => {
		// console.log(syntheticEvent.nativeEvent instanceof PointerEvent);
		switch (event.type) {
			case 'click':
				console.log('clicked');
				break;
			case 'dblclick':
				console.log('double clicked');
				break;
			default:
				console.log('unhandled', event.type);
		}
	};

	const handleEvent = (event) => {
		const { target } = event;
		console.log(`Event bubbled up to div from ${target.tagName}`);
	};

	return (
		<div className="center">
			<p>Track Console</p>
			<input type="text" onChange={handleChange} onBlur={handleBlur} />
			<button onClick={handleMultipleEvent} onDoubleClick={handleMultipleEvent}>
				multiple event
			</button>
		</div>
	);
};

export default MultipleEvent;
