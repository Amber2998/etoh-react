import React from 'react';
import { Alert } from 'react-bootstrap';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SuccessAlert = ({heading, text, extraInfo, ...props}) => {

	return <Alert {...props}>
			{!!heading && <Alert.Heading>{heading}</Alert.Heading>}

			<p>{text}</p>

			{!!extraInfo && <React.Fragment>
					<hr/>
				<LazyLoadImage effect={'blur'} alt={'tip'} src={'Icons/lightbulb-regular.svg'} style={{width: '0.75em', margin: '0 0.5em 0 0'}}/>
				{extraInfo}
			</React.Fragment>}

		</Alert>
}

export default SuccessAlert;
