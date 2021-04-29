import React from 'react';
import { withNamespaces } from 'react-i18next';
import ReceptenKaart from './ReceptenKaart';


class Recepten extends React.Component {
	render () {
		let { t } = this.props;
		return <React.Fragment>
			<div>
				<h1>{t('Recepten')}</h1>
				<p>{t('Hier kan je verschillende recepten vinden die gemaakt worden met onze dames. Probeer, proef en geniet!')}</p>
			</div>

				<ReceptenKaart
					leftImage={'Images/FranCocktail.jpg'}
					title={t('Mix Box')}
					text={<h4>In de doos zit</h4>}
					listItems={[
						'1 x ' + t('Fles (500ml) naar keuze'),
						'2 x ' + t('Tonic')+ ' (250ml)',
						'2 x ' + t('EtOH glas')
					]}
					recTitle={<h4>Luister!</h4>}
					stappenplan={[
						'1 x Opstaan',
						'1 x Zet de feesthoed op',
						'2 x Draai een rondje',
						'2 x Drink van het pintje',
						'Om af te werken: Shake ya booty'
					]}
				/>

				<hr className={'my-5'}/>

			<ReceptenKaart
				rightImage={'Images/FranCocktail.jpg'}
				title={t('Mix Box')}
				text={<h4>In de doos zit</h4>}
				listItems={[
					'1 x ' + t('Fles (500ml) naar keuze'),
					'2 x ' + t('Tonic')+ ' (250ml)',
					'2 x ' + t('EtOH glas')
				]}
				recTitle={<h4>Luister!</h4>}
				stappenplan={[
					'1 x Opstaan',
					'1 x Zet de feesthoed op',
					'2 x Draai een rondje',
					'2 x Drink van het pintje',
					'Om af te werken: Shake ya booty'
				]}
			/>
		</React.Fragment>
	}
}

export default withNamespaces('recepten')(Recepten);
