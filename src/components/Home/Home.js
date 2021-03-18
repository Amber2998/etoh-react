import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

const Home = ({ t }) => {
	return <div>
			<div className="box">
				<div className="fadingbox">
					<img src="Images/banner4.jpg" alt={'banner'}/>
					<Link to={"/orders"}>
						<div className="btn" >{t('Bestel hier!')}</div>
					</Link>
				</div>
			</div>

			<div className="card" style={{margin: '1em 0'}}>
				<div className="row">
					<div className="col-md-4">
						<img src="Images/banner.jpeg" className="card-img" alt="Test1" style={{height: '100%', objecFit: 'cover'}}/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<div className="card-title d-flex flex-row-reverse">
								<span style={{color: '#E6007E', fontWeight: 'bolder', fontSize: '32px'}}>{t('EtOH, belgian flavors in a bottle')}</span>
							</div>
							<div className="card-text ">
								<p>{t('Wij, bij EtOH, hechten belang aan lokale teelt. Wij maken gebruik van pure ingrediënten uit ons prachtige Hageland en verwerken deze in onze heerlijke drankjes.')} </p>
								<p> {t('Wij zijn een team van 4 studenten, elk met een andere opleiding. Maar hoe verschillend wij ook mogen zijn, we hebben ontdekt dat we allemaal hier ons hart hebben liggen.')}</p>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div className="card" style={{margin: '1em 0'}}>
				<div className="row">
					<div className="col-md-8">
						<div className="card-body">
							<div className="card-title">
								<span style={{color: '#E6007E', fontWeight: 'bolder', fontSize: '32px'}}>{t('Onze Missie: Lokale passie')} </span>
							</div>
							<div className="card-text ">
								<p> {t('Met onze drankjes willen we onze passie voor lokaal delen met heel Vlaanderen. We willen de aandacht vestigen op lokale, pure teelt. Met dit project willen wij bewijzen dat ook België heel wat lekkere alcoholische dranken te bieden heeft.')}</p>
							</div>
						</div>

					</div>
					<div className="col-md-4">
						<img src="Images/banner3.jpeg" className="card-img" alt="Test1" style={{height: '100%', objectFit: 'cover'}}/>
					</div>
				</div>
			</div>
			<div>
				<div className="d-flex justify-content-center">
					<h3>{t('Onze producten')}</h3>
				</div>
				<div className="d-flex justify-content-center">
					<Link to={'/products'}>
						<img src="Images/Madam%20Cherry.png" height="200em" alt={'madam-cherry'}/>
						<img src="Images/Rabarber.png" height="200em" alt={'rabarber'}/>
						<img src="Images/MissGinger.png" height="200em" alt={'miss-ginger'}/>
						<img src="Images/Fran.png" height="200em" alt={'duchess-fran'}/>
					</Link>
				</div>
			</div>
			<div>
				<br/>
					<div className="d-flex justify-content-center">
						<h3>{t('Onze partners')}</h3>
					</div>
					<div className="d-flex justify-content-between">
						<img src="Images/bsc.jpeg" height="100px" alt={'bsc'}/>
						<img src="Images/pipo.png" height="100px" alt={'pipo'}/>
						<img src="Images/fruitvanhellemont.jpeg" height="100px" alt={'fruit-vanhellemont'}/>
						<img src="Images/vlajo.jpg" height="100px" alt={'vlajo'}/>
					</div>
			</div>
	</div>
}

export default withNamespaces('home') (Home);
