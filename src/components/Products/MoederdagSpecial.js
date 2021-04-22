import React from 'react';
import { Alert } from 'react-bootstrap';
import ProductKaart from './ProductKaart';
import { withNamespaces } from 'react-i18next';

export class MoederdagSpecial extends React.Component {

	render () {
		let {t} = this.props;
		return <Alert variant={'warning'} >
			<Alert.Heading>{t('Moederdag Special!')}</Alert.Heading>
			<hr/>
			<ProductKaart
				leftImage={'Images/moederdagbox.jpeg'}
				appleImage={'Images/greenapple.png'}
				title={t('Lady Barbara')}
				titleColor={'#0D9816'}
				subtitle={t('Appel-Rabarber')}
				text={t('Lady Barbara brengt een unieke smaak door haar mix van rabarber en appel. Zo proef jij haar elegante karakter.')}
				prijs={t('Prijs') + `: €14,95`}
			/>
		</Alert>
	}
}

export default withNamespaces('products') (MoederdagSpecial)
