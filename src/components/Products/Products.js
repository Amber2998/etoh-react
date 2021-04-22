import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Card, ListGroup } from 'react-bootstrap';
import { MoederdagSpecial } from './MoederdagSpecial';
import ProductKaart from './ProductKaart';

const Products = ({t}) => {
	return (
		<div>
			<h1>{t('Ontdek hier onze producten')}</h1>
			<p>{t('Onze producten komen in hersluitbare glazen flessen van 500ml en bevatten een alcoholpercentage van 17%.')}</p>
			<p>{t('yesyesyes tien windjes in een fles')}</p>

			<MoederdagSpecial/>

			<ProductKaart
				leftImage={'Images/Rabarber.png'}
				appleImage={'Images/greenapple.png'}
				title={t('Lady Barbara')}
				titleColor={'#0D9816'}
				subtitle={t('Appel-Rabarber')}
				text={t('Lady Barbara brengt een unieke smaak door haar mix van rabarber en appel. Zo proef jij haar elegante karakter.')}
				rightImage={'Images/Foto4.jpg'}
				prijs={t('Prijs') + `: €14,95`}
				/>

			<ProductKaart
				leftImage={'Images/Madam Cherry.png'}
				appleImage={'Images/redapple.png'}
				title={t('Madam Cherry')}
				titleColor={'#C90404'}
				subtitle={t('Appel-Kers')}
				text={t('Maak kennis met Madam Cherry: zij brengt de zoete liefde van appel en kers tot bij jou. Met haar sterk karakter verovert zij jouw hart.')}
				rightImage={'Images/Foto2.jpg'}
				prijs={t('Prijs') + `: €14,95`}
				/>

			<ProductKaart
				leftImage={'Images/Fran.png'}
				appleImage={'Images/pinkapple.png'}
				title={t('Duchess Fran')}
				titleColor={'#E6007E'}
				subtitle={t('Appel-Framboos')}
				text={t('Duchess Fran, deze chique dame neemt jou mee op een smaakvolle audiëntie. Een koninklijke combinatie van framboos en appel.')}
				rightImage={'Images/Foto8.jpg'}
				prijs={t('Prijs') + `: €14,95`}
			/>

			<ProductKaart
				leftImage={'Images/MissGinger.png'}
				appleImage={'Images/yellowapple.png'}
				title={t('Miss Ginger')}
				titleColor={'#ECC814'}
				subtitle={t('Appel-Gember')}
				text={t('Deze knappe dame is Miss Ginger. Zij overtuigt jou met haar verfrissende mix van appel, gember en een subtiele citrustoets.')}
				rightImage={'Images/Foto9.jpg'}
				prijs={t('Prijs') + `: €14,95`}
			/>

			<Card className={'my-2'}>
				<div className={'d-flex flex-column flex-md-row align-items-center'}>
					<Card.Img src={'Images/test4.png'} style={{width: '16em', objectFit: 'cover'}}/>

					<Card.Body className={'d-flex flex-column align-items-lg-end align-items-center'}>
						<Card.Title className={'d-flex flex-row-reverse'}>
							<span style={{color: "gray", fontWeight: "bolder", fontSize: "24px"}}>{t('Taste Box')}</span>
						</Card.Title>

						<Card.Text >
							<p> {t('Met deze box, kan je heerlijke cocktails maken met onze dranken. Deze box bevat:')}</p>

							<ListGroup variant={'flush'}>
								<ListGroup.Item className={'pl-0'}>1 x {t('Fles (500ml) naar keuze - gelieve dit door te geven bij bestelling')}</ListGroup.Item>
								<ListGroup.Item className={'pl-0'}>2 x {t('Tonic')} (250ml) </ListGroup.Item>
								<ListGroup.Item className={'pl-0'}>2 x {t('EtOH glas')} </ListGroup.Item>
								<ListGroup.Item className={'pl-0'}>{t('verrassing')} </ListGroup.Item>

							</ListGroup>
							<h4 style={{fontSize: '14px'}}>{t('Prijs')}: &euro;24,95</h4>
						</Card.Text>
					</Card.Body>
				</div>
			</Card>

		</div>

	)
}

export default withNamespaces('products') (Products);
