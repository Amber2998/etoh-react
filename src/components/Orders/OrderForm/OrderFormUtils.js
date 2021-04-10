import * as Yup from 'yup';
import React from 'react';
import { Form as BForm, FormControl, InputGroup } from 'react-bootstrap';
import { withNamespaces } from 'react-i18next';

export const config = {
	cors: 'https://cors-anywhere.herokuapp.com/', // <optional> doesn't display the cors error
	formUrl: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSelNyws3oJTpKF0n8Icz0UZ7GZBO2gEuU6v6a64xI1qWxCBdg/formResponse'
};

export const initialValues = {
	emailAddress: '',
	voorNaam: {id: 1612816974, value:''},
	achterNaam: {id: 95838241, value:''},
	straat: {id: 1252622776, value:''},
	huisNummer: {id: 2029748559, value:''},
	postBus: {id: 1796339265, value:''},
	postCode: {id: 507427680, value:''},
	plaats: {id: 215792322, value:''},
	ladyBarbaraCounter: {id: 2031162540, value: 0},
	madamCherryCounter: {id: 159461287, value: 0},
	duchessFranCounter: {id: 1009742711, value: 0},
	missGingerCounter: {id: 1580922975, value: 0},
	tasteBoxCounter: {id: 1420066394, value: 0},
	vragenOpmerking: {id: 1750870435, value: ''},
	verzending: {id: 50357737, value: 'Gratis ophalen - Free pick up in Glabbeek (bij Amber)'},
	eighteenPlus: {id: 69530754, value: false},
}

export const ValidationSchema = Yup.object().shape({
	emailAddress: Yup.string().email('Dit is geen geldig e-mailadres!').required('Verplicht!'),
	voorNaam: Yup.object().shape({value: Yup.string().required('Verplicht!')}),
	achterNaam: Yup.object().shape({value: Yup.string().required('Verplicht!')}),
	straat: Yup.object().shape({value: Yup.string().required('Verplicht!')}),
	huisNummer: Yup.object().shape({value: Yup.string().required('Verplicht!')}),
	postCode: Yup.object().shape({value: Yup.string().required('Verplicht!')}),
	plaats: Yup.object().shape({value: Yup.string().required('Verplicht!')}),
	ladyBarbaraCounter: Yup.object().shape({value: Yup.number()}),
	madamCherryCounter: Yup.object().shape({value: Yup.number()}),
	duchessFranCounter: Yup.object().shape({value: Yup.number()}),
	missGingerCounter: Yup.object().shape({value: Yup.number()}),
	tasteBoxCounter: Yup.object().shape({value: Yup.number()}),
});

const DryControlledInput = ({field, form, value, label, onChange, prepend, append, t, ...props}) => {
	let isInErrorState = !!form.errors[field.name] && form.touched[field.name];
	let errorMessage = typeof form.errors[field.name] === 'object' ? form.errors[field.name].value : form.errors[field.name]
	return (
		<React.Fragment>
			<BForm.Label>{label}</BForm.Label>

			<InputGroup className={'mb-3'} hasValidation>
				{ !!prepend &&<InputGroup.Prepend>
					<InputGroup.Text>{prepend}</InputGroup.Text>
				</InputGroup.Prepend>}

				<FormControl value={value(field, form)}
							 onChange={e => onChange(e.target.value, field, form)}
							 onBlur={e => form.setTouched({...form.touched, [field.name]: true})}
							 isInvalid={isInErrorState}
							 {...props}/>

				{ !!append && <InputGroup.Append >
					<InputGroup.Text>{append(field,form)}</InputGroup.Text>
				</InputGroup.Append> }
				<BForm.Control.Feedback type={'invalid'}>{t(errorMessage)}</BForm.Control.Feedback>
			</InputGroup>
		</React.Fragment>
	)
}

export const ControlledInput = withNamespaces('errormessages') (DryControlledInput);
