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
				titleColor={'#109318'}
					text={'Voor één cocktail'}
					listItems={[
						'8 cl ' + t('Lady Barbarba'),
						'6 cl ' + t('Appel-Rabarbersap'),
						'1 cl ' + t('Limoensap'),
                        '4 ' + t('Frambozen')               
					]}
					recTitle={'Werkwijze'}
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
				appleImage={'Images/redapple.png'}
				titleColor={'#c20608'}
				text={'Voor één cocktail'}
				listItems={[
					'5 cl ' + t('Madam Cherry'),
					'2 cl ' + t('Vodka'),
					'2 cl ' + t('Limoensap'),
                    '4 cl ' + t('Veenbessensap')   
				]}
				recTitle={'Werkwijze'}
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
				appleImage={'Images/pinkapple.png'}
                titleColor={'#dd027a'}
				text={'Voor één cocktail'}
				listItems={[
					'8 cl ' + t('Duchess Fran'),
					'1 cl ' + t('Rozensiroop'),
					'3 cl ' + t('Limoensap')
				]}
				recTitle={'Werkwijze'}
				stappenplan={[
					'1. Doe alles samen in een glas',
					'2. Voeg eventueel wat ijsblokjes toe',
					'3. Roer alles goed door elkaar',
					'4. Smakelijk!',
				]}
			/>
                             <ReceptenKaart
				leftImage={'Images/FranCocktailClose.jpg'}
				title={t('Duchess Fran\'s Triffle ')}
				appleImage={'Images/pinkapple.png'}
                titleColor={'#dd027a'}
				text={'Voor 3 personen'}
				listItems={[
					'1 ' + t('Appel'),
					'1 ' + t('Eiwit'),
					'1 dl ' + t('Room'),
                    '125 gr ' + t('Mascarpone'),
                    '1,5 el ' + t('Honing'),
                    '40 ml ' + t('Duchess Fran'),
                    '3 ' + t('Droge Koekjes'),
                    '1 snuifje ' + t('Kristalsuiker'),
                    t('Citroensap')
				]}
				recTitle={'Werkwijze'}
				stappenplan={[
					'1. Was de appel en snij deze in blokjes. Meng hieronder de honing, het citroensap en Duchess Fran',
					'2. Klop de mascarpone op met de room. Hier mag ook wat citroensap bij.',
					'3. Klop het eiwit stijf met een beetje kristalsuiker.',
					'4. Spatel het eiwit onder het mascarpone mengsel.',
                    '5. Vul de glazen afwisselend met: koekjeskruimels, appelmengsel en mascarponecrème.',
                    '6. Zet minstens 1 uur in de koelkast.',
                    '7. Smakelijk!'
				]}
			/>
                     <hr className={'my-5'}/>

			<ReceptenKaart
				rightImage={'Images/GingerCocktailCloseSingle.jpg'}
				title={t('Miss Ginger\'s Summer Softness')}
				appleImage={'Images/yellowapple.png'}
                titleColor={'#e3c115'}
				text={'Voor één cocktail'}
				listItems={[
					'6 cl ' + t('Miss Ginger'),
					'1/3 ' + t('Limoen'),
					'10 cl ' + t('Gemberbier of limonade met gember')
				]}
				recTitle={'Werkwijze'}
				stappenplan={[
					'1. Leg de limoen in het glas en duw deze plat met een vork of lepel zodat er wat sap uit kan.',
					'2. Voeg de Miss Ginger en het gemberbier of de limonade toe',
					'3. Roer alles even door elkaar',
					'4. Smakelijk!',
				]}
			/>
<hr className={'my-5'}/>

			<ReceptenKaart
				rightImage={'Images/GingerCocktailWide.jpg'}
				title={t('Miss Ginger\s Sabayon')}
				appleImage={'Images/yellowapple.png'}
                titleColor={'#e3c115'}
				text={'Voor 4 personen'}
				listItems={[
					'85 ml ' + t('Miss Ginger'),
					'4 el ' + t('Kristalsuiker'),
					'4 ' + t('Eierdooiers')
				]}
				recTitle={'Werkwijze'}
				stappenplan={[
					'1. Breng een pan met water aan de kook.',
					'2. Scheidt de eieren. We gebruiken alleen de eierdooiers.',
					'3. Plaats een kom over de pan. Zo krijg je een bain-marie.',
					'4. Doe de eierdooiers met de suiker in de kom en klop deze luchtig met de suiker.',
                    '5. Voeg al kloppend beetje bij beetje Miss Ginger toe.',
                    '6. Blijf een tiental minuten kloppen tot je een luchtige sabayon hebt.',
                    '7. Schenk in glazen en geniet!',
                    'Tip: Ook lekker met onze andere smaken!',
				]}
			/>
		</React.Fragment>
	}
}

export default withNamespaces('recepten')(Recepten);
