import React from 'react';
import { withNamespaces } from 'react-i18next';


const Orders = ({t, ...props}) => {
	return (
		<div >
			<div>
				<h1>{t('Via dit formulier kan je je bestelling plaatsen.')}</h1>
				<h3>{t('Hoe werkt het?')}</h3>
				<ol>
					<li>{t('Vul onderstaand formulier in.')}</li>
					<li>{t('Je ontvangt van ons een e-mail met de betaalgegevens.')}</li>
					<li>{t('Maak de betaling in orde.')}</li>
					<li>{t('Wij sturen je een mail om de betaling de bevestigen en de details voor de verzending of ophaling van jouw bestelling.')}</li>
				</ol>
			</div>
			<div >
				<iframe title={'google-form-to-order'} src="https://docs.google.com/forms/d/e/1FAIpQLSelNyws3oJTpKF0n8Icz0UZ7GZBO2gEuU6v6a64xI1qWxCBdg/viewform?embedded=true" style={{display:"inline-block", width:"100%", height: "203em", border:"hidden"}}>Laden…</iframe>
			</div>
			<div style={{display:"flex", justifyContent: "center"}}>
				<img src="Images/alcoholverbod.jpg" alt={'banner-alcoholwet-10-dec-2009'}/>
			</div>
		</div>
	)
}

export default withNamespaces ('orders') (Orders);
