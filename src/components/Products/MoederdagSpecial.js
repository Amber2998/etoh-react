import React from 'react';
import { Alert } from 'react-bootstrap';
import { withNamespaces } from 'react-i18next';
import BoxKaart from './BoxKaart';

export class MoederdagSpecial extends React.Component {

	render () {
		let {t} = this.props;
		return <Alert variant={'danger'} >
			<Alert.Heading>{t('Moederdag Special!')}</Alert.Heading>
			<hr/>
			<BoxKaart
				leftImage={'Images/moederdagbox.jpeg'}
				title={t('Moederdag Box')}
				text={''}
				listItems={[
					'1 x ' + t('Fles (500ml) naar keuze'),
					'1 x ' + t('EtOH glas gegraveerd'),
					'2 x ' + t('Belgische tonic'),
					<a href={'https://www.nicely.be/'} style={{color:'var(--danger)'}}>{t('Granola by Nicely')}</a>,
					<a href={'https://balerdon.be/'} style={{color:'var(--danger)'}}>{t('Chocolade by Balerdon')}</a>,
					<a href={'http://simonleveltleuven.be'} style={{color:'var(--danger)'}}>{t('Mama Thee by Simon Lévelt')}</a>,
				]}
				prijs={t('Prijs') + ' € 34,95'}
			/>
		</Alert>
	}
}

export default withNamespaces('products') (MoederdagSpecial)
