import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter, NavLink } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';


const CustomNavLink = ({to, label, ...props}) => {
	return (
		<NavLink className={'nav-link'}
				 key={to}
				 to={to}
				 activeClassName={"active"}
				 style={{flexGrow:1, textAlign: 'center'}}
				 {...props}
		>{label}</NavLink>
	)
}


class CustomNavBar extends React.Component {
	render () {
		let {location, t} = this.props;

		return <Navbar expand="lg" collapseOnSelect={true} sticky="top" style={{}} >
			<Navbar.Brand href={"/"}>
				<img src="Images/EtOH%20logo.png" alt="Logo" style={{ width: '100px' }}/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav activeKey={location.pathname} style={{display:'flex', justifyContent:'space-evenly', flexGrow:1}}>
					<CustomNavLink to={"/"} label={t('Home')} exact/>
					<CustomNavLink to={"/about"} label={t('About')}/>
					<CustomNavLink to={"/products"} label={t('Products')}/>
					<CustomNavLink to={"/orders"} label={t('Orders')}/>
					<CustomNavLink to={"/contact"} label={t('Contact')}/>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	}
}

const RouterNavBar = withRouter(CustomNavBar);

export default withNamespaces('navbar') (RouterNavBar);
