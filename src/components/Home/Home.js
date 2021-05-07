import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { Carousel, CarouselItem } from 'react-bootstrap';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = ({ t }) => {
	return <div>
		<div className="box">
			<div className="fadingbox" >

					<Carousel controls={true}>
						<CarouselItem  >
							<LazyLoadImage effect={'blur'} src="Images/Foto7.jpg" alt="test" width="100%"/>
						</CarouselItem>
						<CarouselItem>
							<LazyLoadImage effect={'blur'} src="Images/Foto3.jpg" alt="test" width="100%"/>
						</CarouselItem>
						<CarouselItem>
							<LazyLoadImage effect={'blur'} src="Images/DSC_0025.jpg" alt="test" width="100%"/>
						</CarouselItem>
						<CarouselItem>
							<LazyLoadImage effect={'blur'} src="Images/DSC_0695.jpg" alt="test" />
						</CarouselItem>
						<CarouselItem>
							<LazyLoadImage effect={'blur'} src="Images/Team.jpg" alt="test" />
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
					<LazyLoadImage effect={'blur'} src="Images/test3.png" className="card-img" alt="Test1"
						 style={{ width: '100%', objecFit: 'cover' }}/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<div className="card-title d-flex flex-row-reverse">
								<span className={'apple-text'} style={{ color: '#E6007E', fontWeight: 'bolder', fontSize: '32px' }}>
									<LazyLoadImage effect={'blur'} className={'d-flex'} src="Images/pinkapple.png" alt="apple" height="32px" />
									{t('EtOH, belgian Flavors in a bottle')}
								</span>
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
                                      <LazyLoadImage effect={'blur'} className={'d-flex'} src="Images/pinkapple.png" alt="apple" height="32px"/>
									{t('Onze Missie: Lokale passie')} </span>
						</div>
						<div className="card-text ">
							<p> {t('Met onze drankjes willen we onze passie voor lokaal delen met heel Vlaanderen. We willen de aandacht vestigen op lokale, pure teelt. Met dit project willen wij bewijzen dat ook België heel wat lekkere alcoholische dranken te bieden heeft.')}</p>
						</div>
					</div>

				</div>
				<div className="col-md-4">
					<LazyLoadImage effect={'blur'} className={'d-flex'} src="Images/Foto1.jpg" className="card-img" alt="Test1"
						 style={{ height: '100%', objectFit: 'cover' }}/>
				</div>
			</div>
		</div>
		<div>
			<div className="d-flex justify-content-center">
				<h3 className={'apple-text'}><LazyLoadImage effect={'blur'} className={'d-flex'} src="Images/greenapple.png" alt="apple" height="24px"/>{t('Onze producten')}</h3>
			</div>
			<div className="d-flex justify-content-center">
				<Link to={'/products'} className={'d-flex justify-content-center'}>
					<div className={'d-flex flex-wrap justify-content-center'}>
                        <LazyLoadImage effect={'blur'} className={'ladyImage'} src="Images/Rabarber.png" alt={'rabarber'}/>
						<LazyLoadImage effect={'blur'} className={'ladyImage'} src="Images/Madam%20Cherry.png" alt={'madam-cherry'}/>
					</div>
					<div className={'d-flex flex-wrap justify-content-center'}>
                        <LazyLoadImage effect={'blur'} className={'ladyImage'} src="Images/Fran.png" alt={'duchess-fran'}/>
						<LazyLoadImage effect={'blur'} className={'ladyImage'} src="Images/MissGinger.png" alt={'miss-ginger'}/>
					</div>
				</Link>
			</div>
		</div>
		<div>
			<br/>
			<div className="d-flex justify-content-center">
				<h3 className={'apple-text'}>
					<LazyLoadImage effect={'blur'} className={'d-flex'} src="Images/greenapple.png" alt="apple" height="24px"/>
					{t('Onze verkooppunten')}</h3>
			</div>
			<div className="d-flex flex-wrap">
				<LazyLoadImage effect={'blur'} src="Images/vierslag.png" height="100px" alt={'vierslag'}/>
				<div className="card-text ">
					<p> {t('Bistro De Vierslag')} </p>
					<p> {t('Dorpstraat 15')}</p>
					<p> {t('3440 Halle-Booienhoven')}</p>
				</div>
			</div>
		</div>
		<br/>
		<div>
			<br/>
			<div className="d-flex justify-content-center">
				<h3 className={'apple-text'}>
					<LazyLoadImage effect={'blur'} className={'d-flex'} src="Images/greenapple.png" alt="apple" height="24px"/>
					{t('Onze partners')}</h3>
			</div>
			<div className="d-flex flex-wrap justify-content-between">
				<LazyLoadImage effect={'blur'} src="Images/bsc.jpeg" height="100px" alt={'bsc'}/>
				<LazyLoadImage effect={'blur'} src="Images/pipo.png" height="100px" alt={'pipo'}/>
				<LazyLoadImage effect={'blur'} src="Images/fruitvanhellemont.jpeg" height="100px" alt={'fruit-vanhellemont'}/>
				<LazyLoadImage effect={'blur'} src="Images/vlajo.jpg" height="100px" alt={'vlajo'}/>
			</div>
		</div>
	</div>
}

export default withNamespaces('home')(Home);
