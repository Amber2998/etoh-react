import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Card } from 'react-bootstrap';

function AgeDenial () {
	return (
		<div className={'d-flex justify-content-center'}>
			<Card border={'danger'}>
				<Card.Header bg='Danger' style={{backgroundColor: '#E6007E', color: 'white'}}>Leeftijdsbeperking</Card.Header>
				<Card.Body>
					Als je niet ouder bent dan 18 jaar, mogen we je helaas geen toegang verlenen tot deze website.
				</Card.Body>
			</Card>
		</div>
	)
}

export default withNamespaces('agedenial') (AgeDenial);
