import React from 'react';
import { Button } from 'react-bootstrap';

const CookieBanner = (props) => {
	return (
		<div className="d-flex justify-content-center flex-wrap fixed-bottom" style={{backgroundColor: '#da067a99'}}>
			<span className={'col-12 text-center'}>Wilde gai cookies oep aowun tampoeter? </span>
			<div>
				<Button onClick={props.yesFn}>Hier, pak mijn nier ook maar</Button>
				<Button onClick={props.noFn}>Ik wil hier eigenlijk nie zijn</Button>
			</div>
		</div>
	)
}

export default CookieBanner;
