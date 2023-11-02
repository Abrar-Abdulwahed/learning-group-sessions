import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				position: 'fixed',
				top: '0',
				justifyContent: 'center',
				background: '#f0f0f0',
				padding: '10px',
				zIndex: '9999',
			}}
		>
			<Link to="/">Intro</Link>
			<Link to="/multiple-event">Multiple Event</Link>
			<Link to="/event-bubbling">Event Bubbling</Link>
			<Link to="/event-delegation">Event Delegation</Link>
		</div>
	);
};
export default Nav;
