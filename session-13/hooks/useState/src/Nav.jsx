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
			<Link to="/">Single Value State</Link>
			<Link to="/object-state">Object State</Link>
			<Link to="/array-state">Array State</Link>
			<Link to="/array-object-state">Array Object State</Link>
			<Link to="/best-practice">Best Practice</Link>
		</div>
	);
};
export default Nav;
