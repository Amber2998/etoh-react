import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { Carousel, CarouselItem } from 'react-bootstrap';


const Home = ({ t }) => {
	return <div>
		<div className="box">
			<div className="fadingbox">

					<Carousel>
						<CarouselItem>
							<img src="Images/banner5.png" alt="test" width="100%"/>
						</CarouselItem>
						<CarouselItem>
							<img src="Images/test3.png" alt="test" width="100%"/>
						</CarouselItem>
						<CarouselItem>
							<img src="Images/Foto3.jpg" alt="test" width="100%"/>
						</CarouselItem>
						<CarouselItem>
							<img src="Images/Foto7.jpg" alt="test" width="100%"/>
						</CarouselItem>
					</Carousel>

				<Link to={"/orders"}>
					<div className="btn">{t('Bestel hier!')}</div>
				</Link>
			</div>
		</div>


		<div className="card" style={{ margin: '1em 0' }}>
			<div className="row">
				<div className="col-md-4">
					<img src="Images/test3.png" className="card-img" alt="Test1"
						 style={{ width: '100%', objecFit: 'cover' }}/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<div className="card-title d-flex flex-row-reverse">
								<span className={'apple-text'}
									  style={{ color: '#E6007E', fontWeight: 'bolder', fontSize: '32px' }}>
                                                <img src="Images/pinkapple.png" alt="apple" height="32px"/>
									{t('EtOH, belgian flavors in a bottle')}</span>
						</div>
						<div className="card-text ">
							<p>{t('Wij, bij EtOH, hechten belang aan lokale teelt. Wij maken gebruik van pure ingrediënten uit ons prachtige Hageland en verwerken deze in onze heerlijke drankjes.')} </p>
							<p> {t('Wij zijn een team van 4 studenten, elk met een andere opleiding. Maar hoe verschillend wij ook mogen zijn, we hebben ontdekt dat we allemaal hier ons hart hebben liggen.')}</p>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div className="card" style={{ margin: '1em 0' }}>
			<div className="row">
				<div className="col-md-8">
					<div className="card-body">
						<div className="card-title">
								<span className={'apple-text'}
									  style={{ color: '#E6007E', fontWeight: 'bolder', fontSize: '32px' }}>
                                      <img src="Images/pinkapple.png" alt="apple" height="32px"/>
									{t('Onze Missie: Lokale passie')} </span>
						</div>
						<div className="card-text ">
							<p> {t('Met onze drankjes willen we onze passie voor lokaal delen met heel Vlaanderen. We willen de aandacht vestigen op lokale, pure teelt. Met dit project willen wij bewijzen dat ook België heel wat lekkere alcoholische dranken te bieden heeft.')}</p>
						</div>
					</div>

				</div>
				<div className="col-md-4">
					<img src="Images/Foto1.jpg" className="card-img" alt="Test1"
						 style={{ height: '100%', objectFit: 'cover' }}/>
				</div>
			</div>
		</div>
		<div>
			<div className="d-flex justify-content-center">
				<h3 className={'apple-text'}><img src="Images/greenapple.png" alt="apple" height="24px"/>{t('Onze producten')}</h3>
			</div>
			<div className="d-flex justify-content-center">
				<Link to={'/products'} className={'d-flex justify-content-center'}>
					<div className={'d-flex flex-wrap justify-content-center'}>
						<img className={'ladyImage'} src="Images/Madam%20Cherry.png" alt={'madam-cherry'}/>
						<img className={'ladyImage'} src="Images/Rabarber.png" alt={'rabarber'}/>
					</div>
					<div className={'d-flex flex-wrap justify-content-center'}>
						<img className={'ladyImage'} src="Images/MissGinger.png" alt={'miss-ginger'}/>
						<img className={'ladyImage'} src="Images/Fran.png" alt={'duchess-fran'}/>
					</div>
				</Link>
			</div>
		</div>
		<div>
			<br/>
			<div className="d-flex justify-content-center">
				<h3 className={'apple-text'}>
					<img src="Images/greenapple.png" alt="apple" height="24px"/>
					{t('Onze partners')}</h3>
			</div>
			<div className="d-flex flex-wrap justify-content-between">
				<img src="Images/bsc.jpeg" height="100px" alt={'bsc'}/>
				<img src="Images/pipo.png" height="100px" alt={'pipo'}/>
				<img src="Images/fruitvanhellemont.jpeg" height="100px" alt={'fruit-vanhellemont'}/>
				<img src="Images/vlajo.jpg" height="100px" alt={'vlajo'}/>
			</div>
		</div>
	</div>
}

export default withNamespaces('home')(Home);
