import React from 'react';
import { withNamespaces } from 'react-i18next';
import MoederdagSpecial from './MoederdagSpecial';
import ProductKaart from './ProductKaart';
import BoxKaart from './BoxKaart';

const Products = ({t}) => {
	return (
		<div>
			<h1>{t('Ontdek hier onze producten')}</h1>
			<p>{t('Onze producten komen in hersluitbare glazen flessen van 500ml en bevatten een alcoholpercentage van 17%.')}</p>
			<p>{t('yesyesyes tien windjes in een fles')}</p>

			<ProductKaart
				leftImage={'Images/Rabarber.png'}
				appleImage={'Images/greenapple.png'}
				title={t('Lady Barbara')}
				titleColor={'#0D9816'}
				subtitle={t('Appel-Rabarber')}
				text={t('Lady Barbara brengt een unieke smaak door haar mix van rabarber en appel. Zo proef jij haar elegante karakter.')}
				rightImage={'Images/Foto4.jpg'}
				prijs={t('Prijs') + `: € 16,95`}
				/>

			<ProductKaart
				leftImage={'Images/Madam Cherry.png'}
				appleImage={'Images/redapple.png'}
				title={t('Madam Cherry')}
				titleColor={'#C90404'}
				subtitle={t('Appel-Kers')}
				text={t('Maak kennis met Madam Cherry: zij brengt de zoete liefde van appel en kers tot bij jou. Met haar sterk karakter verovert zij jouw hart.')}
				rightImage={'Images/Foto2.jpg'}
				prijs={t('Prijs') + `: € 16,95`}
				/>

			<ProductKaart
				leftImage={'Images/Fran.png'}
				appleImage={'Images/pinkapple.png'}
				title={t('Duchess Fran')}
				titleColor={'#E6007E'}
				subtitle={t('Appel-Framboos')}
				text={t('Duchess Fran, deze chique dame neemt jou mee op een smaakvolle audiëntie. Een koninklijke combinatie van framboos en appel.')}
				rightImage={'Images/Foto8.jpg'}
				prijs={t('Prijs') + `: € 16,95`}
			/>

			<ProductKaart
				leftImage={'Images/MissGinger.png'}
				appleImage={'Images/yellowapple.png'}
				title={t('Miss Ginger')}
				titleColor={'#ECC814'}
				subtitle={t('Appel-Gember')}
				text={t('Deze knappe dame is Miss Ginger. Zij overtuigt jou met haar verfrissende mix van appel, gember en een subtiele citrustoets.')}
				rightImage={'Images/Foto9.jpg'}
				prijs={t('Prijs') + `: € 16,95`}
			/>

			<BoxKaart
				leftImage={'Images/tastebox.jpeg'}
				title={t('Taste Box')}
				text={t('Met deze box, kan je heerlijke cocktails maken met onze dranken. Deze box bevat:')}
				listItems={[
					'1 x ' + t('Fles (500ml) naar keuze'),
					'2 x ' + t('Tonic')+ ' (250ml)',
					'2 x ' + t('EtOH glas')
					]}
				prijs={t('Prijs') + ' € 24,95'}
				/>
		</div>

	)
}

export default withNamespaces('products') (Products);
