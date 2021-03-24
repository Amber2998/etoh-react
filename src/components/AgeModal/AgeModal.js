import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const AgeModal = (props) => {
	return (

		<Modal
			show={props.show}
			backdrop={'static'}
			keyboard={false}
			centered
			backdropClassName={'blurredBackdrop'}
		>
			<Modal.Header>
				<Modal.Title>Leeftijdscheck</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Alcohol voor iedereen! Ben je +18?
			</Modal.Body>
			<Modal.Footer>
				<Button variant={'secondary'} onClick={props.yesFn} >Ja</Button>
				<Button onClick={props.noFn}>Nee</Button>
			</Modal.Footer>

		</Modal>

	)
}

export default AgeModal;
