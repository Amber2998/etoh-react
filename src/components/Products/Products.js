import React from 'react';


export default () => {
	return (
		<div>
			<h1> Ontdek hier onze producten</h1>

			<div className="card" style={{margin: "1em 0"}}>
				<div className="row">
					<div className="col-4">
						<img src="Images/Madam%20Cherry.png" className="card-img" alt="Madam Cherry"
							 style={{heigth: "100%", objectFit: "cover"}}/>
					</div>
					<div className="col-8">
						<div className="card-body">
							<div className="card-title d-flex flex-row-reverse">
								<span style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>Madam Cherry</span>
							</div>
							<div className="card-text">
								<p> Madam Cherry brengt zoete liefde van appel en kers. Een mooie, ronde fles van 500ml
									met een alcoholpercentage van 15%. Ideaal om de maaltijd mee af te sluiten of om te
									verwerken in een cocktail.</p>
								<h4>Prijs: &euro;9,95</h4>
								<div className="card-title d-flex flex-row-reverse">
									<span style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>Little Madam Cherry</span>
								</div>
								<div className="card-text">
									<p> De kleine zus van Madam Cherry. Ze komt in een stoere fles van 250ml, met een
										alcoholpercentage van 7,5%. Ideaal als aperitief: flesje openen en genieten
										maar!</p>
									<h4>Prijs: &euro;2,95</h4>
								</div>
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
								<span style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>Lady Barbara</span>
							</div>
							<div className="card-text">
								<p>Lady Barbara brengt verleiding dankzij de heerlijke mix van rabarber en appel. Deze
									fles bevat 500 mL en een alcoholpercentage van 15%. Ideaal na als afsluiter van de
									maaltijd of smaakmaker in cocktails.</p>
								<h4>Prijs: &euro;9,95</h4>
								<div className="card-title d-flex flex-row-reverse">
									<span style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>Little Lady Barbara</span>
								</div>
								<div className="card-text">
									<p> Dit is de kleine zus van Lady Barbara. Het smakenpalet is gelijkaardig, maar de
										flesjes komen in 250 mL met een percentage van 6%.</p>
									<h4>Prijs: &euro;2,95</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="card" style={{margin: "1em 0"}}>
				<div className="row">
					<div className="col-4">
						<img src="Images/Gingercomingsoon.png" className="card-img" alt="Miss Cherry"
							 style={{heigth: "100%", objectFit: "cover"}}/>
					</div>
					<div className="col-8">
						<div className="card-body">
							<div className="card-title d-flex flex-row-reverse">
								<span style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>Miss Ginger</span>
							</div>
							<div className="card-text">
								<p>Coming soon</p>
								<div className="card-title d-flex flex-row-reverse">
									<span style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>Little Miss Ginger</span>
								</div>
								<div className="card-text">
									<p>Coming soon</p>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="card" style={{margin: "1em 0"}}>
				<div className="row">
					<div className="col-8">
						<div className="card-body">
							<div className="card-title d-flex flex-row-reverse">
								<span
									style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>Taste Box Small</span>
							</div>
							<div className="card-text">
								<p>Aan de hand van deze box, maak je kennis met ons product. Deze box bevat:<br/>
									2 x Little Madam Cherry (200ml) in een limited edition fles <br/>
									2 x Little Lady Barbara (200ml) in een limited edition fles <br/>
									2 x EtOH glas <br/>
									verrassing <br/>
								</p>
								<h4>Prijs: &euro;14,95</h4>
								<div className="card-title d-flex flex-row-reverse">
									<span style={{color: "#E6007E", fontWeight: "bolder", fontSize: "24px"}}>Cocktail Box Large</span>
								</div>
								<div className="card-text">
									<p> Met deze box, kan je heerlijke cocktails maken met onzee dranken. Deze box
										bevat:<br/>
											1 x Madam Cherry (500ml)<br/>
											1 x Lady Barbara (500ml)<br/>
											2 x EtOH glas <br/>
											verrassing <br/></p>
									<h4>Prijs: &euro;24,95</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="col-4">
						<img src="Images/banner.jpeg" className="card-img" alt="Lady Barbara"
							 style={{heigth: "100%", objectFit: "cover"}}/>
							<br/><br/><br/><br/>
								<img src="Images/banner.jpeg" className="card-img" alt="Lady Barbara"
									 style={{heigth: "100%", objectFit: "cover"}}/>
					</div>
				</div>
			</div>

		</div>

	)
}
