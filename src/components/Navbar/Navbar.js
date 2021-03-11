import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';




class CustomNavBar extends React.Component {
	render () {
		let {location} = this.props;

		console.log(location.pathname)
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

{/*<header className="sticky-top">*/}
{/*	<nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>*/}
{/*		/!*<button className="navbar-toggler" type="button" data-toggle="collapse"*!/*/}
{/*		/!*		data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*!/*/}
{/*		/!*		aria-expanded="false" aria-label="Toggle navigation">*!/*/}
{/*		/!*	<span className="navbar-toggler-icon"></span>*!/*/}
{/*		/!*</button>*!/*/}
{/*		<nav-table>*/}
{/*			<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
{/*				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">*/}
{/*					<li>*/}
{/*						<Link to={"/"}>*/}
{/*							<img src="Images/EtOH%20logo.png" alt="Logo" style={{ width: '100px' }}/>*/}
{/*						</Link>*/}
{/*						/!*<a className="navbar-brand" href="index.html">*!/*/}
{/*					/!*</a>*!/*/}
{/*					</li>*/}
{/*					<li className="nav-item">*/}
{/*						/!*<Link className={`nav-link`} to={"/"}>Home</Link>*!/*/}
{/*						<CustomLink to={'/'} label={'Home'}/>*/}
{/*						/!*<a className="nav-link active" href="index.html">Home</a>*!/*/}
{/*					</li>*/}
{/*					<li className="nav-item">*/}
{/*						/!*<Link className="nav-link" to={"/about"}>About</Link>*!/*/}
{/*						<CustomLink to={'/about'} label={'About'}/>*/}
{/*						/!*<a className="nav-link" href="about.html">About</a>*!/*/}
{/*					</li>*/}
{/*					<li className="nav-item">*/}
{/*						/!*<Link className="nav-link " to={"/products"}>Products</Link>*!/*/}
{/*						<CustomLink to={'/products'} label={'Products'}/>*/}
{/*						/!*<a className="nav-link" href="products.html">Products</a>*!/*/}
{/*					</li>*/}
{/*					<li className="nav-item">*/}
{/*						/!*<Link className="nav-link " to={"/orders"}>Orders</Link>*!/*/}
{/*						<CustomLink to={'/orders'} label={'Orders'}/>*/}
{/*						/!*<a className="nav-link" href="bestelformulier.html">Orders</a>*!/*/}
{/*					</li>*/}
{/*					<li className="nav-item">*/}
{/*						/!*<Link className="nav-link " to={"/contact"}>Contact</Link>*!/*/}
{/*						<CustomLink to={'/contact'} label={'Contact'}/>*/}
{/*						/!*<a className="nav-link" href="contact.html">Contact</a>*!/*/}
{/*					</li>*/}
{/*				</ul>*/}
{/*			</div>*/}
{/*		</nav-table>*/}
{/*	</nav>*/}
{/*</header>*/}

