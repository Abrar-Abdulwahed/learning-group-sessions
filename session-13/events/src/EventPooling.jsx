import React from 'react';

// تم حذفها من الإصدارات الحديثة للرياكت
const EventPooling = () => {
	const handleChange = (event) => {
		event.persist();
		setTimeout(() => {
			console.log(event.target.value);
			console.log(event.target.value); // This will log the input value
		}, 1000);
	};

	return <input type="text" onChange={handleChange} />;
};
export default EventPooling;
