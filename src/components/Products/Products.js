import React from 'react';
import { withNamespaces } from 'react-i18next';


const Products = ({t}) => {
	return (
		<div>
			<h1>{t('Ontdek hier onze producten')}</h1>
			<p>{t('Onze producten komen in hersluitbare glazen flessen van 500ml en bevatten een alcoholpercentage van 17%.')}</p>


			<div className="card" style={{margin: "1em 0"}}>
				<div className="row">
					<div className="d-flex justify-content-center col-4">
						<img src="Images/Rabarber.png" className="card-img" alt="Lady Barbara"
							 style={{height: "14em", width: 'auto', objectFit: "cover"}}/>
					</div>
					<div className="col-8">
						<div className="card-body">
							<div className="card-title d-flex flex-row-reverse">
								<span style={{color: "#0D9816", fontWeight: "bolder", fontSize: "24px"}}>
        <img src="Images/greenapple.png" alt="apple" height="24px"/>
									{t('Lady Barbara')}
									<br/> <i style={{color: 'gray', textAlign: 'right', fontWeight: 'normal', fontSize: '14px'}}>{t('Appel-Rabarber')}</i>
								</span>
							</div>
							<div className="card-text">
								<p>{t('Lady Barbara brengt een unieke smaak door haar mix van rabarber en appel. Zo proef jij haar elegante karakter.')}</p>
								<h4>{t('Prijs')}: &euro;14,95</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="card" style={{margin: "1em 0"}}>
				<div className="row">
					<div className="d-flex justify-content-center col-4">
						<img src="Images/Madam Cherry.png" className="card-img" alt="Madam Cherry"
							 style={{height: "14em", width: 'auto', objectFit: "cover"}}/>
					</div>
					<div className="col-8">
						<div className="card-body">
							<div className="card-title d-flex flex-row-reverse">
								<span style={{color: "#C90404", fontWeight: "bolder", fontSize: "24px"}}>
                                    <img src="Images/redapple.png" alt="apple" height="24px"/>
									{t('Madam Cherry')}
									<br/> <i style={{color: 'gray', textAlign: 'right', fontWeight: 'normal', fontSize: '14px'}}>{t('Appel-Kers')}</i>
								</span>
							</div>
							<div className="card-text">
								<p>{t('Maak kennis met Madam Cherry: zij brengt de zoete liefde van appel en kers tot bij jou. Met haar sterk karakter verovert zij jouw hart.')}</p>
								<h4>{t('Prijs')}: &euro;14,95</h4>
								<div className="card-title d-flex flex-row-reverse">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="card" style={{margin: "1em 0"}}>
				<div className="row">
					<div className="d-flex justify-content-center col-4">
						<img src="Images/Fran.png" className="card-img" alt="Duchess Fran"
							 style={{height: '14em', width:'auto', objectFit: 'cover'}}/>
					</div>
					<div className="col-8">
						<div className="card-body">
							<div className="card-title d-flex flex-row-reverse">
								<span style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>
                                    <img src="Images/pinkapple.png" alt="apple" height="24px"/>
									{t('Duchess Fran')}
									<br/> <i style={{color: 'gray', textAlign: 'right', fontWeight: 'normal', fontSize: '14px'}}>{t('Appel-Framboos')}</i>
								</span>
							</div>
							<p>{t('Duchess Fran, deze chique dame neemt jou mee op een smaakvolle audiëntie. Een koninklijke combinatie van framboos en appel.')}</p>
							<h4>{t('Prijs')}: &euro;14,95</h4>
						</div>
					</div>
				</div>
			</div>
                                 
            
                                 			<div className="card" style={{margin: "1em 0"}}>
				<div className="row">
					<div className="d-flex justify-content-center col-4">
						<img src="Images/MissGinger.png" className="card-img" alt="Miss Cherry"
							 style={{height: "14em", width:'auto', objectFit: "cover"}}/>
					</div>
					<div className="col-8">
						<div className="card-body">
							<div className="card-title d-flex flex-row-reverse">
								<span style={{color: "#ECC814", fontWeight: "bolder", fontSize: "24px"}}>
                                    <img src="Images/yellowapple.png" alt="apple" height="24px"/>
									{t('Miss Ginger')}
									<br/> <i style={{color: 'gray', textAlign: 'right', fontWeight: 'normal', fontSize: '14px'}}>{t('Appel-Gember')}</i>
								</span>
							</div>
							<div className="card-text">
								<p>{t('Deze knappe dame is Miss Ginger. Zij overtuigt jou met haar verfrissende mix van appel, gember en een subtiele citrustoets.')}</p>
								<h4>{t('Prijs')}: &euro;14,95</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="card" style={{margin: '1em 0'}}>
				<div className="row">
					<div className="d-flex justify-content-center align-items-center col-4">
						<img src="Images/banner.jpeg" className="card-img" alt="Sfeerfoto"
							 style={{height: '12em', width:'12em', objectFit: 'cover'}}/>
					</div>
					<div className="col-8">
						<div className="card-body">
								<div className="card-title d-flex flex-row-reverse">
									<span style={{color: "gray", fontWeight: "bolder", fontSize: "24px"}}>{t('Taste Box')}</span>
								</div>
							<div className="card-text">
								<p> {t('Met deze box, kan je heerlijke cocktails maken met onze dranken. Deze box bevat:')}<br/>
									1 x {t('Fles (500ml) naar keuze - gelieve dit door te geven bij bestelling')}<br/>
									4 x {t('Tonic')} (25cl) <br/>
									2 x {t('EtOH glas')} <br/>
									{t('verrassing')} <br/></p>
								<h4>{t('Prijs')}: &euro;24,95</h4>
								</div>
							</div>
						</div>
					</div>

			</div>

		</div>

	)
}

export default withNamespaces('products') (Products);
