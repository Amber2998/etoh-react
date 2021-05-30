import React from 'react';
import { Alert } from 'react-bootstrap';
import { withNamespaces } from 'react-i18next';
import BoxKaart from './BoxKaart';

export class MoederdagSpecial extends React.Component {

	render () {
		let {t} = this.props;
		return <Alert variant={'danger'} >
			<Alert.Heading>{t('Vaderdagtip!')}</Alert.Heading>
			<hr/>
			<BoxKaart
				leftImage={'Images/vaderdagteaser.jpeg'}
				title={t('Apero Box')}
				text={''}
				listItems={[
					'4 x ' + t('1 Flesje van elke smaak (4 x 200ml)'),
					'1 x ' + t('Tonic'),
                    '1 x ' + t('Ginger Ale'),      
					'1 x ' + t('Hand Cooked Chips'),
                    '1 x ' + t('Spice Balls'),
                    '1 x ' + t('Knabbelbacon'),
                    '1 x ' + t('Tapenade'),
                    '1 x ' + t('Mini Grissini'),
                    '1 x ' + t('Pan Tostado'),
                    '1 x ' + t('Scrocchi'),
					
				]}
				prijs={t('Prijs') + ' € 49,95'}
			/>
		</Alert>
	}
}

export default withNamespaces('products') (MoederdagSpecial)
