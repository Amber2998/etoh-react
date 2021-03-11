import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
	return <div>
		{/*<main style="background-color: white">*/}
			<div className="box">
				<div className="fadingbox">
					<img src="Images/banner4.jpg"/>
					{/*<div className="btn" onClick="document.location='bestelformulier.html'">Bestel hier!</div>*/}
					<Link to={"/orders"}>
						<div className="btn" >Bestel hier!</div>

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
								<span style={{color: '#E6007E', fontWeight: 'bolder'}}>EtOH, belgian flavors in a bottle</span>
							</div>
							<div className="card-text ">
								<p>Wij, bij EtOH, hechten belang aan lokale teelt. Wij maken gebruik van pure ingrediënten uit ons prachtige Hageland en verwerken deze in onze heerlijke drankjes. </p>
								<p> Wij zijn een team van 4 studenten, elk met een andere opleiding. Maar hoe verschillend wij ook mogen zijn, we hebben ontdekt dat we allemaal hier ons hart hebben liggen.</p>
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
								<span style={{color: '#E6007E', fontWeight: 'bolder'}}> Onze Missie: Lokale passie </span>
							</div>
							<div className="card-text ">
								<p> Met onze drankjes willen we onze passie voor lokaal delen met heel Vlaanderen. We willen de aandacht vestigen op lokale, pure teelt. Met dit project willen wij bewijzen dat ook Belgi&euml; heel wat lekkere alcoholische dranken te bieden heeft.</p>
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
					<h3>Onze producten</h3>
				</div>
				<div className="d-flex justify-content-center">
					<a href="products.html">
						<img src="Images/Madam%20Cherry.png" height="200em"/>
						<img src="Images/Rabarber.png" height="200em"/>
						<img src="Images/Gingercomingsoon.png" height="200em"/>
					</a>
				</div>
			</div>
			<div>
				<br/>
					<div className="d-flex justify-content-center">
						<h3>Onze partners</h3>
					</div>
					<div className="d-flex justify-content-between">
						<img src="Images/dame-jeanne.png" height="100px"/>
						<img src="Images/pipo.png" height="100px"/>
						<img src="Images/vlajo.jpg" height="100px"/>
					</div>
			</div>
		{/*</main*/}
	</div>
}
