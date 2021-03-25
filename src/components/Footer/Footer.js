import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Button } from 'react-bootstrap';


const Footer = ({ t, cookieState, ...props }) => {
	let {checkedCookies, allowsCookies, oldEnough, cookieNoFn} = cookieState;
	return (
		<footer>
			<div className="d-flex justify-content-center">
				<a href="https://www.facebook.com/EtOHBeverages">
					<img src="Images/facebook.png" height="50px" alt={'facebook'}/>
				</a>
				<a href="https://wa.me/32478239016">
					<img src="Images/whatsapp.png" height="50px" alt={'whatsapp'}/>
				</a>
				<a href="mailto: etohbeverages@gmail.com">
					<img src="Images/email.png" height="50px" alt={'email'}/>
				</a>
			</div>
			<div className="d-flex justify-content-center ">
				<p style={{ color: "white" }}> Copyright &copy; 2021 | EtOH </p>
			</div>
			{ checkedCookies
			&& allowsCookies
			&& oldEnough
			&& <a onClick={cookieNoFn} className={'delete-cookie-button d-flex justify-content-center'}>Cookies verwijderen</a>}
		</footer>
	)
}

export default withNamespaces('footer')(Footer);
