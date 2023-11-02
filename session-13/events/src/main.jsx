import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import MultipleEvent from './MultipleEvent';
import EventDelegation from './EventDelegation.jsx';
import EventBubbling from './EventBubbling.jsx';
import EventPooling from './EventPooling.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route index element={<App />} />
				<Route path="/multiple-event" element={<MultipleEvent />} />
				<Route path="/event-bubbling" element={<EventBubbling />} />
				<Route path="/event-delegation" element={<EventDelegation />} />
			</Routes>
		</BrowserRouter>
		{/* <EventPooling /> */}
	</React.StrictMode>
);
