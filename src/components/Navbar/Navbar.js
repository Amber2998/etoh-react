import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter, NavLink } from 'react-router-dom';


const CustomNavLink = ({to, label, ...props}) => {
	return (
		<NavLink className={'nav-link'}
				 to={to}
				 activeClassName={"active"}
				 style={{flexGrow:1, textAlign: 'center'}}
				 {...props}
		>{label}</NavLink>
	)
}


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
					<CustomNavLink to={"/"} label={'Home'} exact/>
					<CustomNavLink to={"/about"} label={'About'}/>
					<CustomNavLink to={"/products"} label={'Products'}/>
					<CustomNavLink to={"/orders"} label={'Orders'}/>
					<CustomNavLink to={"/contact"} label={'Contact'}/>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	}
}

export default withRouter(CustomNavBar);
