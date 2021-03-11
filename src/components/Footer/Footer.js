import React from 'react';

const Footer = () => {
	return (
		<footer >
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
					<p style={{color: "white"}}> Copyright &copy; 2021 | EtOH </p>
				</div>
		</footer>
	)
}

export default Footer;
