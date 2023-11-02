import React, { useState } from 'react';

const ArrayObject = () => {
	const [todos, setTodos] = useState([
		{ id: 1, text: 'first task' },
		{ id: 2, text: 'second task' },
		{ id: 3, text: 'third task' },
	]);

	const addTodo = () => {
		const newTodo = { id: Date.now(), text: 'New task' };
		setTodos((prevToDos) => [...prevToDos, newTodo]);
	};

	const removeTodo = (id) => {
		setTodos((prevToDos) => prevToDos.filter((todo) => todo.id !== id));
	};

	return (
		<div className="center">
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						{todo.text}
						<button onClick={() => removeTodo(todo.id)}>Remove</button>
					</li>
				))}
			</ul>
			<button onClick={addTodo}>Add Todo</button>
		</div>
	);
};

export default ArrayObject;
