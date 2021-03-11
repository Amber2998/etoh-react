import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';




class CustomNavBar extends React.Component {
	render () {
		let {location} = this.props;

		return <Navbar expand="lg" sticky="top" style={{backgroundColor: 'white', boxShadow: '0px 3px 5px 0px #ececec', margin: '0 0 1em 0'}} >
			<Navbar.Brand href={"/"}>
				<img src="Images/EtOH%20logo.png" alt="Logo" style={{ width: '100px' }}/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav activeKey={location.pathname} style={{display:'flex', justifyContent:'space-evenly', flexGrow:1}}>
					<Nav.Link style={{flexGrow:1, textAlign:'center'}} href="/">Home</Nav.Link>
					<Nav.Link style={{flexGrow:1, textAlign:'center'}} href="/about">About</Nav.Link>
					<Nav.Link style={{flexGrow:1, textAlign:'center'}} href="/products">Products</Nav.Link>
					<Nav.Link style={{flexGrow:1, textAlign:'center'}} href="/orders">Orders</Nav.Link>
					<Nav.Link style={{flexGrow:1, textAlign:'center'}} href="/contact">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	}
}

export default withRouter(CustomNavBar);
