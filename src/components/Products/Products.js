import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Card, ListGroup } from 'react-bootstrap';

const Products = ({t}) => {
	return (
		<div>
			<h1>{t('Ontdek hier onze producten')}</h1>
			<p>{t('Onze producten komen in hersluitbare glazen flessen van 500ml en bevatten een alcoholpercentage van 17%.')}</p>
			<p>{t('yesyesyes tien windjes in een fles')}</p>

			<Card className={'my-2'}>
				<div className={'d-flex flex-column flex-md-row'}>
					<Card.Img className={'container-fluid'} src={'Images/Rabarber.png'} style={{height:'14em', width: 'auto', objectFit: 'cover'}}/>

					<div className={'d-flex'}>
						<Card.Body>
							<Card.Title className={'d-flex flex-row-reverse'}>
								<span className='d-flex flex-column' style={{color: "#0D9816", fontWeight: "bolder", fontSize: "24px"}}>
									<div className={'apple-text'}>
										<img src="Images/greenapple.png" alt="apple" height="24px"/>
										{t('Lady Barbara')}
									</div>
									<i className={'sub-text'}>{t('Appel-Rabarber')}</i>
								</span>
							</Card.Title>

							<Card.Text>
								<p>{t('Lady Barbara brengt een unieke smaak door haar mix van rabarber en appel. Zo proef jij haar elegante karakter.')}</p>
								<h4 style={{fontSize: '14px'}}>{t('Prijs')}: &euro;14,95</h4>
							</Card.Text>
						</Card.Body>

						<Card.Img src={'Images/Foto4.jpg'} style={{height:'14em', width: 'auto', objectFit: 'cover'}}/>

					</div>
				</div>
			</Card>

			<Card className={'my-2'}>
				<div className={'d-flex flex-column flex-md-row'}>
					<Card.Img className={'container-fluid'} src={'Images/Madam Cherry.png'} style={{height: '14em', width: 'auto', objectFit: 'cover'}}/>

					<div className={'d-flex'}>
						<Card.Body>
							<Card.Title className={'d-flex flex-row-reverse'}>
								<span className='d-flex flex-column' style={{color: "#C90404", fontWeight: "bolder", fontSize: "24px"}}>
									<div className={'apple-text'}>
										<img src="Images/redapple.png" alt="apple" height="24px"/>
										{t('Madam Cherry')}
									</div>
									<i className={'sub-text'}>{t('Appel-Kers')}</i>
								</span>
							</Card.Title>

							<Card.Text>
								<p>{t('Maak kennis met Madam Cherry: zij brengt de zoete liefde van appel en kers tot bij jou. Met haar sterk karakter verovert zij jouw hart.')}</p>
								<h4 style={{fontSize: '14px'}}>{t('Prijs')}: &euro;14,95</h4>
							</Card.Text>
						</Card.Body>
						<Card.Img src={'Images/Foto2.jpg'} style={{height: "14em", width: 'auto', objectFit: "cover"}}/>
					</div>
				</div>
			</Card>

			<Card className={'my-2'}>
				<div className={'d-flex flex-column flex-md-row'}>
					<Card.Img className={'container-fluid'} src={'Images/Fran.png'} style={{height: '14em', width: 'auto', objectFit: 'cover'}}/>

					<div className={'d-flex'}>
						<Card.Body>
							<Card.Title className={'d-flex flex-row-reverse'}>
								<span className='d-flex flex-column' style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>
									<div className={'apple-text'}>
										<img src="Images/pinkapple.png" alt="apple" height="24px"/>
										{t('Duchess Fran')}
									</div>
									<i className={'sub-text'}>{t('Appel-Framboos')}</i>
								</span>
							</Card.Title>
							<Card.Text>
								<p>{t('Duchess Fran, deze chique dame neemt jou mee op een smaakvolle audiëntie. Een koninklijke combinatie van framboos en appel.')}</p>
								<h4 style={{fontSize: '14px'}}>{t('Prijs')}: &euro;14,95</h4>
							</Card.Text>

						</Card.Body>
						<Card.Img src={'Images/Foto8.jpg'} style={{height: "14em", width: 'auto', objectFit: "cover"}}/>
					</div>
				</div>
			</Card>

			<Card className={'my-2'}>
				<div className={'d-flex flex-column flex-md-row'}>
					<Card.Img className={'container-fluid'} src="Images/MissGinger.png" style={{height: "14em", width: 'auto', objectFit: "cover"}}/>
					<div className={'d-flex'}>
						<Card.Body>
							<Card.Title className={'d-flex flex-row-reverse'}>
									<span className='d-flex flex-column' style={{color: "#ECC814", fontWeight: "bolder", fontSize: "24px"}}>
										<div className={'apple-text'}>
											<img src="Images/yellowapple.png" alt="apple" height="24px"/>
											{t('Miss Ginger')}
										</div>
										<i className={'sub-text'}>{t('Appel-Gember')}</i>
									</span>
							</Card.Title>
							<Card.Text>
								<p>{t('Deze knappe dame is Miss Ginger. Zij overtuigt jou met haar verfrissende mix van appel, gember en een subtiele citrustoets.')}</p>
								<h4 style={{fontSize: '14px'}}>{t('Prijs')}: &euro;14,95</h4>
							</Card.Text>

						</Card.Body>
						<Card.Img src={'Images/Foto9.jpg'} style={{height: "14em", width: 'auto', objectFit: "cover"}}/>
					</div>
				</div>
			</Card>

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
								<ListGroup.Item className={'pl-0'}>1 x {t('Geurkaars')} </ListGroup.Item>
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
