import React, { useState } from 'react';

const ObjectState = () => {
	const [book, setBook] = useState({
		title: 'React Introduction',
		author: 'John Doe',
		address: {
			country: 'Yemen',
		},
	});

	const handleUpdateTitle = () => {
		//❌ will not work
		// book.title = 'Updated React Cookbook';

		//⚠🟡 unintended results: will reset the state to be { title: value }
		// setBook({ title: 'Updated React Cookbook' });

		// ✅will work
		setBook({ ...book, title: 'Updated React Cookbook' });

		// ✅✅ will work
		// setBook((prevState) => ({ ...prevState, title: 'Updated React Cookbook' }));
	};

	const handleUpdateAuthor = () => {
		setBook((prevState) => ({
			...prevState,
			author: 'Khorasani Abrar',
		}));
	};

	const handleUpdate = (field, value) => {
		setBook((prevState) => ({ ...prevState, [field]: value }));
	};

	return (
		<div className="center">
			<p>Title: {book.title}</p>
			<p>Author: {book.author}</p>
			<button onClick={handleUpdateTitle}>Update Title</button>
			<button onClick={handleUpdateAuthor}>Update Author</button>

			<button onClick={() => handleUpdate('author', 'Abrar')}>
				Update any Field, in this example will update author
			</button>
		</div>
	);
};

export default ObjectState;
