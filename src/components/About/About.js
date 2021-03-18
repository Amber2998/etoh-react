import React from 'react';
import { withNamespaces } from 'react-i18next';

const About = ({t, ...props}) => {
	return (
		<div>
			<h1>Team EtOH</h1>
       <div className="d-flex justify-content-between flex-wrap">
			<div className="row">
				<div className="col-3">
					<h2 style={{textAlign: "right"}}> Wout</h2>
					<p style={{textAlign: "right"}}> Roadie</p>
				</div>
				<div className="col-3">
					<img src="Images/WoutReekmans.jpg" alt="Wout Reekmans" width="300px" height="300px"/>
				</div>
				<div className="col-3">
					<img src="Images/DylanVerschoren.jpg" alt="Dylan Verschoren" width="300px" height="300px"/>
				</div>
				<div className="col-3">
					<h2 style={{textAlign: "center"}}> Dylan</h2>
					<p style={{textAlign: "center"}}> Treasurer</p>
				</div>
				<div className="col-3">
					<h2 style={{textAlign: "right"}}> Amber</h2>
					<p style={{textAlign: "right"}}> Mastermind</p>
				</div>
				<div className="col-3">
					<img src="Images/AmberClaes.jpg" alt="Amber Claes" width="300px" height="300px"/>
				</div>
				<div className="col-3">
					<img src="Images/ElviraBeyens.jpg" alt="Elvira Beyens" width="300px" height="300px"/>
				</div>
				<div className="col-3">
					<h2 style={{textAlign: "center"}}>Elvira </h2>
					<p style={{textAlign: "center"}}> Storyteller</p>
				</div>
			</div>

		</div>
        </div>
	);
}

export default withNamespaces ('about') (About);
