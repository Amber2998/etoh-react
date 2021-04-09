import React from 'react';
import { withNamespaces } from 'react-i18next';
import OrderForm from './OrderForm/OrderForm';

class Orders extends React.Component {

	render () {
		let {t} = this.props;

		return (
			<div >
				<div>
					<h1>{t('Via dit formulier kan je je bestelling plaatsen.')}</h1>
					<h3>{t('Hoe werkt het?')}</h3>
					<p className={'apple-text'}><img src="Images/greenapple.png" alt="apple" height="16px"/>{t('Vul onderstaand formulier in.')}</p>
					<p className={'apple-text'}><img src="Images/redapple.png" alt="apple" height="16px"/>{t('Je ontvangt van ons een e-mail met de betaalgegevens.')}</p>
					<p className={'apple-text'}><img src="Images/pinkapple.png" alt="apple" height="16px"/>	{t('Maak de betaling in orde.')}</p>
					<p className={'apple-text'}><img src="Images/yellowapple.png" alt="apple" height="16px"/>{t('Wij sturen je een mail om de betaling de bevestigen en de details voor de verzending of ophaling van jouw bestelling.')}</p>
				</div>

				<h2>{t('Binnenkort kan je hier bestellen')}</h2>

				<h3>Bestelformulier</h3>
				<div className={'d-flex justify-content-center'}>
					<OrderForm />
				</div>

				<div style={{display:"flex", justifyContent: "center"}}>
					<img className={'img-fluid'} src="Images/alcoholverbod.jpg" alt={'banner-alcoholwet-10-dec-2009'}/>
				</div>
			</div>
		)

	}
}

export default withNamespaces ('orders') (Orders);
