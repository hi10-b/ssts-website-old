import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../Pages/home';

export const NavBar = () => {
	return (
		<Navbar expand="lg" style={styles}>
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#HomePage">Home</Nav.Link>
						<Nav.Link href="#Gallery">Gallery</Nav.Link>
						<Nav.Link href="#Information">Info</Nav.Link>
					</Nav>
					<Nav>
						<Navbar.Brand href="#facebook">
							<img src="/logo192.png" width="30" height="30" className="d-inline-block align-top" alt="" />
						</Navbar.Brand>
						<Navbar.Brand href="#insta">
							<img src="/logo192.png" width="30" height="30" className="d-inline-block align-top" alt="" />
						</Navbar.Brand>
						<Navbar.Brand href="#youtube">
							<img src="/logo192.png" width="30" height="30" className="d-inline-block align-top" alt="" />
						</Navbar.Brand>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
const styles = {
	position: 'sticky-top',
	top: '100',
	backgroundColor: ' #a40606',
	backgroundImage: 'linear-gradient(90deg, #a40606 0%, #d98324 92%)',
};
