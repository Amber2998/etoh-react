import React from 'react';
import { Button } from 'react-bootstrap';

const CookieBanner = (props) => {
	return (
		<div className="d-flex justify-content-center flex-wrap fixed-bottom" style={{backgroundColor: '#E6007E'}}>
			<span className={'col-12 text-center'}>Deze site maakt gebruik van cookies. </span>
			<div>
				<Button onClick={props.yesFn}>Toestaan</Button>
				<Button onClick={props.noFn}>Niet Toestaan</Button>
			</div>
		</div>
	)
}

export default CookieBanner;
