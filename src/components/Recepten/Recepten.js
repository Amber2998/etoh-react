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
				leftImage={'Images/BarbaraCocktailSingle.jpg'}
				appleImage={'Images/greenapple.png'}
				title={t('Lady Barbara\'s Juicy Pride')}
				titleColor={'#ECC814'}
					text={<h4>Voor één cocktail</h4>}
					listItems={[
						'8 cl ' + t('Lady Barbarba'),
						'6 cl ' + t('Appel-Rabarbersap'),
						'1 cl ' + t('Limoensap'),
                        '4 ' + t('Frambozen')               
					]}
					recTitle={<h4>Werkwijze</h4>}
					stappenplan={[
						'1. Doe de Lady Barbara, het Appel-Rabarbersap en het limoensap in een shaker',
						'2. Shake alles goed door elkaar',
						'3. Plet de frambozen met een vork en doe deze in het glas',
						'4. Giet de cocktail in het glas',
						'5. Voeg eventueel wat ijsblokjes toe, smakelijk!'
					]}
				/>

				<hr className={'my-5'}/>

			<ReceptenKaart
				rightImage={'Images/CherryCocktail.jpeg'}
				title={t('Madam Cherry\'s Classy Temper')}
                titleColor={'#ECC814'}
				text={<h4>Voor één cocktail</h4>}
				listItems={[
					'5 cl ' + t('Madam Cherry'),
					'2 cl ' + t('Vodka'),
					'2 cl ' + t('Limoensap'),
                    '4 cl ' + t('Veenbessensap')   
				]}
				recTitle={<h4>Werkwijze</h4>}
				stappenplan={[
					'1. Doe alles samen in een glas',
					'2. Voeg eventueel wat ijsblokjes toe',
					'3. Roer alles goed door elkaar',
					'4. Smakelijk!',
				]}
			/>
                    
                    <hr className={'my-5'}/>

			<ReceptenKaart
				leftImage={'Images/FranCocktailCloseSingle.jpg'}
				title={t('Duchess Fran\'s Simple Berry')}
                titleColor={'#ECC814'}
				text={<h4>Voor één cocktail</h4>}
				listItems={[
					'8 cl ' + t('Duchess Fran'),
					'1 cl ' + t('Rozensiroop'),
					'3 cl ' + t('Limoensap')
				]}
				recTitle={<h4>Werkwijze</h4>}
				stappenplan={[
					'1. Doe alles samen in een glas',
					'2. Voeg eventueel wat ijsblokjes toe',
					'3. Roer alles goed door elkaar',
					'4. Smakelijk!',
				]}
			/>
                     <hr className={'my-5'}/>

			<ReceptenKaart
				rightImage={'Images/GingerCocktailCloseSingle.jpg'}
				title={t('Miss Ginger\'s Summer Softness')}
                titleColor={'#ECC814'}
				text={<h4>Voor één cocktail</h4>}
				listItems={[
					'6 cl ' + t('Miss Ginger'),
					'1/3 ' + t('Limoen'),
					'10 cl ' + t('Gemberbier of limonade met gember')
				]}
				recTitle={<h4>Werkwijze</h4>}
				stappenplan={[
					'1. Leg de limoen in het glas en duw deze plat met een vork of lepel zodat er wat sap uit kan.',
					'2. Voeg de Miss Ginger en het gemberbier of de limonade toe',
					'3. Roer alles even door elkaar',
					'4. Smakelijk!',
				]}
			/>
		</React.Fragment>
	}
}

export default withNamespaces('recepten')(Recepten);
