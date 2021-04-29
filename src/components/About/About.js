import React from 'react';
import { withNamespaces } from 'react-i18next';


const About = ({ t, ...props }) => {
	return (
		<div>
			<h1 className='mb-5'>Team EtOH</h1>
			<div className="d-flex flex-wrap justify-content-center">
				<div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-stretch justify-content-lg-end justify-content-between col-lg-6 m-lg-0 m-1 " style={{padding: '0'}}>
					<div className="mr-sm-4">
						<h2 className={'apple-text'}> <img src="Images/redapple.png" alt="apple" height="24px"/>  Wout</h2>
						<p className={'text-sm-right text-center'}>Roadie </p>
					</div>
					<img src="Images/WoutReekmans.jpg" alt="Wout Reekmans" width="300px" height="300px"/>
				</div>

				<div className="d-flex flex-column-reverse flex-lg-row align-items-center align-items-sm-stretch flex-sm-row-reverse justify-content-between justify-content-lg-start col-lg-6 m-lg-0 m-1" style={{padding: '0'}}>
					<img src="Images/DylanVerschoren.jpg" alt="Dylan Verschoren" width="300px" height="300px"/>
					<div className="mr-sm-4 ml-lg-4">
						<h2 className={'apple-text d-flex flex-row-reverse flex-lg-row'}>Dylan<img src="Images/redapple.png" alt="apple" height="24px"/></h2>
						<p className='text-center text-sm-right text-lg-left'>Treasurer</p>
					</div>
				</div>
			</div>

			<div className="d-flex justify-content-center flex-wrap">
				<div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-stretch justify-content-lg-end justify-content-between col-lg-6 m-lg-0 m-1 " style={{padding: '0'}}>
					<div className="mr-4">
						<h2 className={'apple-text'} > <img src="Images/redapple.png" alt="apple" height="24px"/> Amber</h2>
						<p  className={'text-sm-right text-center'}>Mastermind</p>
					</div>
					<img src="Images/AmberClaes.jpg" alt="Amber Claes" width="300px" height="300px"/>
				</div>

				<div className="d-flex flex-column-reverse flex-lg-row align-items-center align-items-sm-stretch flex-sm-row-reverse justify-content-between justify-content-lg-start col-lg-6 m-lg-0 m-1" style={{padding: '0'}}>
					<img src="Images/ElviraBeyens.jpg" alt="Elvira Beyens" width="300px" height="300px"/>
					<div className="mr-sm-4 ml-lg-4">
						<h2 className={'apple-text d-flex flex-row-reverse flex-lg-row'}>Elvira<img src="Images/redapple.png" alt="apple" height="24px"/></h2>
						<p className={'text-center text-sm-right text-lg-left'}>Storyteller</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withNamespaces('about')(About);
