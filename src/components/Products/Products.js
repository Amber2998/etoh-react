import React from 'react';
import { withNamespaces } from 'react-i18next';


const Products = ({t}) => {
	return (
		<div>
			<h1>{t('Ontdek hier onze producten')}</h1>
			<p>Onze producten komen in hersluitbare glazen flessen van 500ml en bevatten een alcoholpercentage van 17%.</p>


			<div className="card" style={{margin: "1em 0"}}>
				<div className="row">
					<div className="col-4">
						<img src="Images/Madam%20Cherry.png" className="card-img" alt="Madam Cherry"
							 style={{heigth: "100%", objectFit: "cover"}}/>
					</div>
					<div className="col-8">
						<div className="card-body">
							<div className="card-title d-flex flex-row-reverse">
								<span style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>
									Madam Cherry
									<br/> <i style={{color: 'gray', textAlign: 'right', fontWeight: 'normal', fontSize: '14px'}}>Appel-Kers</i>
								</span>
							</div>
							<div className="card-text">
								<p> Maak kennis met Madam Cherry: zij brengt de zoete liefde van appel en kers tot bij jou. Met haar sterk karakter verovert zij jouw hart. </p>
								<h4>Prijs: &euro;14,95</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="card" style={{margin: "1em 0"}}>
				<div className="row">
					<div className="col-4">
						<img src="Images/Rabarber.png" className="card-img" alt="Lady Barbara"
							 style={{heigth: "100%", objectFit: "cover"}}/>
					</div>
					<div className="col-8">
						<div className="card-body">
							<div className="card-title d-flex flex-row-reverse">
								<span style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>
									Lady Barbara
									<br/> <i style={{color: 'gray', textAlign: 'right', fontWeight: 'normal', fontSize: '14px'}}>Appel-Rabarber</i>
								</span>
							</div>
							<div className="card-text">
								<p>Lady Barbara brengt een unieke smaak door haar mix van rabarber en appel. Zo proef jij haar elegante karakter.</p>
								<h4>Prijs: &euro;14,95</h4>
								<div className="card-title d-flex flex-row-reverse">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="card" style={{margin: "1em 0"}}>
				<div className="row">
					<div className="col-4">
						<img src="Images/MissGinger.png" className="card-img" alt="Miss Cherry" style={{heigth: "100%", objectFit: "cover"}}/>
					</div>
					<div className="col-8">
						<div className="card-body">
							<div className="card-title d-flex flex-row-reverse">
								<span style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>
									Miss Ginger
									<br/> <i style={{color: 'gray', textAlign: 'right', fontWeight: 'normal', fontSize: '14px'}}>Appel-Gember</i>
								</span>
							</div>
							<div className="card-text">
								<p>Deze knappe dame is Miss Ginger. Zij overtuigt jou met haar verfrissende mix van appel, gember en een subtiele citrustoets.</p>
								<h4>Prijs: &euro;14,95</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="card" style={{margin: "1em 0"}}>
				<div className="row">
					<div className="col-4">
						<img src="Images/duchessfran.png" className="card-img" alt="Duchess Fran"
							 style={{heigth: '100%', objectFit: 'cover'}}/>
					</div>
					<div className="col-8">
						<div className="card-body">
							<div className="card-title d-flex flex-row-reverse">
								<span style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>
									Duchess Fran
									<br/> <i style={{color: 'gray', textAlign: 'right', fontWeight: 'normal', fontSize: '14px'}}>Appel-Framboos</i>
								</span>
							</div>
							<p>Duchess Fran, deze chique dame neemt jou mee op een smaakvolle audiëntie. Een koninklijke combinatie van framboos en appel. </p>
							<h4>Prijs: &euro;14,95</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="card" style={{margin: '1em 0'}}>
				<div className="row">
					<div className="col-4">
						<img src="Images/banner.jpeg" className="card-img" alt="Sfeerfoto"
							 style={{height: '100%', objectFit: 'cover'}}/>
					</div>
					<div className="col-8">
						<div className="card-body">
								<div className="card-title d-flex flex-row-reverse">
									<span style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>Taste Box</span>
								</div>
							<div className="card-text">
								<p> Met deze box, kan je heerlijke cocktails maken met onze dranken. Deze box
									bevat:<br/>
									1 x Fles (500ml) naar keuze - gelieve dit door te geven bij bestelling<br/>
									4 x Tonic (25cl) <br/>
									2 x EtOH glas <br/>
									verrassing <br/></p>
								<h4>Prijs: &euro;24,95</h4>
								</div>
							</div>
						</div>
					</div>

			</div>

		</div>

	)
}

export default withNamespaces() (Products);
