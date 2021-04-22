import React from 'react';
import { Alert } from 'react-bootstrap';
import ProductKaart from './ProductKaart';
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
					t('Granola by Nicely'),
					t('Chocolade by Balerdon'),
					t('Mama Thee by Simon Lévelt'),
				]}
				prijs={t('Prijs') + ' €24,95'}
			/>
		</Alert>
	}
}

export default withNamespaces('products') (MoederdagSpecial)
