import React from 'react';
import { Form, Formik, Field } from 'formik'
import axios from 'axios';
import { Button, FormControl, InputGroup, Spinner, Form as BForm, Alert } from 'react-bootstrap';
import * as Yup from 'yup';

const config = {
	cors: 'https://cors-anywhere.herokuapp.com/', // <optional> doesn't display the cors error
	formUrl: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSelNyws3oJTpKF0n8Icz0UZ7GZBO2gEuU6v6a64xI1qWxCBdg/formResponse'
};

const ControlledInput = ({field, form, value, label, onChange, prepend, append, ...props}) => {
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
				<BForm.Control.Feedback type={'invalid'}>{errorMessage}</BForm.Control.Feedback>
			</InputGroup>
		</React.Fragment>
	)
}

const ValidationSchema = Yup.object().shape({
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

class OrderForm extends React.Component {
	initialValues = {
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
		verzending: {id: 50357737, value: ''},
		eighteenPlus: {id: 69530754, value: false}
	}

	state= {
		submitted: false,
		submissionState: 'failure'
	}

	submit = async(e) => {
		const formData = new FormData();

		Object.keys(e).forEach(i => {
			typeof e[i] ==='object'
				? formData.append(`entry.${e[i].id}`, e[i].value)
				: formData.append(i, e[i]);
		})

		await axios({
			url: `${config.cors}${config.formUrl}`,
			method: 'post',
			data: formData,
			responseType: 'json'
		})
			.then(response => {
				console.log('response', response);
				this.setState({submitted: true})
				this.setState({submissionState: 'success'})
			})
			.catch(err => {
				console.log('err', err);
				this.setState({submitted: true})
				this.setState({submissionState: 'failure'})
			})
	}

	updateValue = (value, field, formik) => {
		formik.setValues ({
			...formik.values,
			[field.name]: {
				...formik.values[field.name], value
			}
		})
	}

	getFieldValue = (field, formik) => formik.values[field.name].value;

	countPrice = (field, formik, price) => (parseInt (formik.values[field.name].value) * price).toLocaleString('nl-BE', {style: 'currency', currency: 'EUR'});

	render () {
		return <React.Fragment>
			<Formik initialValues={this.initialValues} onSubmit={this.submit} validationSchema={ValidationSchema}>
				{ (props) => {
					return <Form className={'w-75'}>
						<Field name={'emailAddress'} label={'E-mailadres'} component={ControlledInput}
							   disabled={this.state.submitted}
							   onChange={(value, field, form) => form.setFieldValue(field.name, value)}
							   value={(field, form) => form.values[field.name]}
						/>

						<Field value={this.getFieldValue} disabled={this.state.submitted} label={'Voornaam'} name={'voorNaam'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} disabled={this.state.submitted} label={'Achternaam'} name={'achterNaam'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} disabled={this.state.submitted} label={'Straat'} name={'straat'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} disabled={this.state.submitted} label={'Huisnummer'} name={'huisNummer'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} disabled={this.state.submitted} label={'Postbus'} name={'postBus'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} disabled={this.state.submitted} label={'Postcode'} name={'postCode'} component={ControlledInput} onChange={this.updateValue}/>
						<Field value={this.getFieldValue} disabled={this.state.submitted} label={'Plaats'} name={'plaats'} component={ControlledInput} onChange={this.updateValue}/>

						<h3>Bestelling</h3>

						<Field name={'ladyBarbaraCounter'} type={'number'} min={0}
							   label={'Lady Barbara 500ml (17%) - € 14,95/stuk'}
							   disabled={this.state.submitted}
							   component={ControlledInput}
							   prepend={'Aantal'}
							   onChange={this.updateValue}
							   value={this.getFieldValue}
							   append={(field, formik) => this.countPrice(field, formik, 14.95)}
						/>

						<Field name={'madamCherryCounter'} type={'number'} min={0}
							   label={'Madam Cherry 500ml (17%) - € 14,95/stuk'}
							   component={ControlledInput}
							   disabled={this.state.submitted}
							   prepend={'Aantal'}
							   onChange={this.updateValue}
							   value={this.getFieldValue}
							   append={(field, formik) => this.countPrice(field, formik, 14.95)}
						/>

						<Field name={'duchessFranCounter'} type={'number'} min={0}
							   label={'Duchess Fran 500ml (17%) - € 14,95/stuk'}
							   component={ControlledInput}
							   disabled={this.state.submitted}
							   prepend={'Aantal'}
							   onChange={this.updateValue}
							   value={this.getFieldValue}
							   append={(field, formik) => this.countPrice(field, formik, 14.95)}
						/>

						<Field name={'missGingerCounter'} type={'number'} min={0}
							   label={'Miss Ginger 500ml (17%) - € 14,95/stuk'}
							   component={ControlledInput}
							   disabled={this.state.submitted}
							   prepend={'Aantal'}
							   onChange={this.updateValue}
							   value={this.getFieldValue}
							   append={(field, formik) => this.countPrice(field, formik, 14.95)}
						/>

						<Field name={'tasteBoxCounter'} type={'number'} min={0}
							   label={'Taste Box - € 24,95'}
							   component={ControlledInput}
							   disabled={this.state.submitted}
							   prepend={'Aantal'}
							   onChange={this.updateValue}
							   value={this.getFieldValue}
							   append={(field, formik) => this.countPrice(field, formik, 24.95)}
						/>
						<label className={'text-muted'}>Vergeet niet om bij opmerkingen aan te geven welke smaak u verkiest, keuze uit: Madam Cherry, Lady Barbara, Miss Ginger, Empress Fran</label>

						{/* TODO: textArea */}
						<Field name={'vragenOpmerking'} as={'textarea'}
							   label={'Vragen/opmerkingen bij de bestelling'}
							   component={ControlledInput}
							   disabled={this.state.submitted}
							   onChange={this.updateValue}
							   value={this.getFieldValue}
						/>

						<Field name={'verzending'} >
							{ ({field, form}) => {
								return <BForm.Group>
									<BForm.Label>Verzending</BForm.Label>
									<BForm.Control as={"select"}
										onChange={e => this.updateValue(e.target.value, field, form)}
										onBlur={e => form.setTouched({...form.touched, [field.name]: true})}
										disabled={this.state.submitted}
									>
										<option>Gratis ophalen - Free pick up in Glabbeek (bij Amber)</option>
										<option>Gratis ophalen - Free pick up in Boortmeerbeek (bij Dylan)</option>
										<option>Gratis ophalen - Free pick up in Leuven (bij Elvira)</option>
										<option>Gratis ophalen - Free pick up in Heusden-Zolder (bij Wout)</option>
										<option>Verzending in België (+verzendkost) - Shipping in Belgium (+shipping cost)</option>
									</BForm.Control>
								</BForm.Group>
							} }
						</Field>

						<Field name={'eighteenPlus'}>
							{({field, form}) =>{
								return <div className={'d-flex'}>
									<BForm.Switch id={"plusEighteenSwitch"}
										disabled={this.state.submitted}
										onChange={e => {
											this.updateValue(e.target.checked ? 'Ja, ik ben ouder dan 18 jaar - Yes, I am over 18 years old': '', field, form)
											form.setTouched({...form.touched, [field.name]: true})
										}}
									/>
									Ja, ik ben ouder dan 18 jaar
								</div>
							}}
						</Field>

						{
							!props.values.eighteenPlus.value
							? <Alert className={'my-3'} variant={'danger'}>Je moet minstens 18 jaar oud zijn om te mogen bestellen.</Alert>
							: <div className={'d-flex justify-content-end my-3'}>
								{
									props.isSubmitting
										? <Spinner animation={'border'} variant={'secondary'}/>
										: !this.state.submitted
										? <Button disabled={props.isSubmitting} variant={'success'} type={'submit'}>Bestel!</Button>
										: this.state.submissionState === 'success'
											? <div style={{ color: 'green' }}>De bestelling is geplaatst!</div>
											: <div style={{ color: 'danger' }}>Sorry, er ging iets mis met de bestelling..
												Neem contact op met het team en zorgen we meteen voor een
												oplossing!</div>
								}
							</div>
						}
					</Form>
				}}
			</Formik>
		</React.Fragment>
	}
}


export default OrderForm;
