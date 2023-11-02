import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Colorize from './colorize.jsx';
import ObjectState from './ObjectState.jsx';
import ArrayState from './ArrayState.jsx';
import ArrayObject from './ArrayObject';
import BestPractice from './BestPractice.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Colorize />} />
				<Route path="/object-state" element={<ObjectState />} />
				<Route path="/array-state" element={<ArrayState />} />
				<Route path="/array-object-state" element={<ArrayObject />} />
				<Route path="/best-practice" element={<BestPractice />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
