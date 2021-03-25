import React from 'react';
import { Button } from 'react-bootstrap';

const CookieBanner = (props) => {
	return (
		<div className="d-flex justify-content-center flex-wrap fixed-bottom stretch" style={{backgroundColor: '#E6007Ec0'}}>
			<span className={'col-12 text-center text-white m-1 flex-grow-1 col-3'}>Deze site maakt gebruik van cookies. </span>
			<div className={'m-1 d-flex justify-content-between'}>
				<Button className={'flex-grow-1'} onClick={props.yesFn} variant="dark" >Toestaan</Button>
				<Button className={'flex-grow-1'} onClick={props.noFn} variant="dark" >Niet Toestaan</Button>
			</div>
		</div>
	)
}

export default CookieBanner;
